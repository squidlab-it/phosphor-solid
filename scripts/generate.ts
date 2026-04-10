import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { type IconEntry, icons } from "@phosphor-icons/core";

const WEIGHTS = [
  "thin",
  "light",
  "regular",
  "bold",
  "fill",
  "duotone",
] as const;

const scriptDir = dirname(fileURLToPath(import.meta.url));
const pkgRoot = join(scriptDir, "..");
const ICONS_DIR = join(pkgRoot, "src", "icons");
const corePath = join(pkgRoot, "node_modules", "@phosphor-icons", "core");

function pascalize(str: string): string {
  return str
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function readSvg(weight: string, name: string): string | null {
  const fileName =
    weight === "regular" ? `${name}.svg` : `${name}-${weight}.svg`;
  const svgPath = join(corePath, "assets", weight, fileName);
  try {
    return readFileSync(svgPath, "utf-8");
  } catch {
    return null;
  }
}

function extractPaths(svg: string): string[] {
  const inner = svg
    .replace(/<svg[^>]*>/, "")
    .replace(/<\/svg>/, "")
    .trim();
  const paths: string[] = [];
  const re = /<path\s+([^>]*?)\/>/g;
  for (let match = re.exec(inner); match !== null; match = re.exec(inner)) {
    paths.push(match[1].trim());
  }
  return paths;
}

function formatPath(attrStr: string, indent: string): string {
  const attrs: { name: string; value: string }[] = [];
  const re = /(\w+)="([^"]*)"/g;
  for (let match = re.exec(attrStr); match !== null; match = re.exec(attrStr)) {
    attrs.push({ name: match[1], value: match[2] });
  }
  const singleLine = `${indent}<path ${attrs.map((a) => `${a.name}="${a.value}"`).join(" ")} />`;
  if (singleLine.length <= 80) {
    return singleLine;
  }
  if (attrs.length <= 1) {
    return singleLine;
  }
  const attrLines = attrs
    .map((a) => `${indent}  ${a.name}="${a.value}"`)
    .join("\n");
  return `${indent}<path\n${attrLines}\n${indent}/>`;
}

function formatEntry(weight: string, svg: string): string {
  const paths = extractPaths(svg);
  const formattedPaths = paths.map((p) => formatPath(p, "        ")).join("\n");
  return `  [\n    "${weight}",\n    () => (\n      <g>\n${formattedPaths}\n      </g>\n    ),\n  ]`;
}

function main() {
  const iconList = icons as unknown as readonly IconEntry[];

  rmSync(ICONS_DIR, { recursive: true, force: true });
  mkdirSync(ICONS_DIR, { recursive: true });

  let passes = 0;
  let fails = 0;

  for (const icon of iconList) {
    const name = pascalize(icon.name);
    const weights = new Map<string, string>();

    for (const weight of WEIGHTS) {
      const svg = readSvg(weight, icon.name);
      if (svg) {
        weights.set(weight, svg);
      }
    }

    if (weights.size === 0) {
      console.error(`FAIL ${name}: no SVG assets found`);
      fails++;
      continue;
    }

    const entries = [...weights]
      .map(([w, svg]) => formatEntry(w, svg))
      .join(",\n");

    const componentName = `${name}Icon`;

    const componentContent = `\
/* GENERATED FILE */
import type { JSX } from "solid-js";
import { IconBase } from "../lib/IconBase";
import type { IconProps, IconWeight } from "../lib/types";

const weights = new Map<IconWeight, () => JSX.Element>([
${entries},
]);

/**
 * ${name} icon component.
 *
 * @example
 * \`\`\`tsx
 * <${componentName} weight="regular" />
 * \`\`\`
 */
export function ${componentName}(props: IconProps): JSX.Element {
  return <IconBase weights={weights} {...props} />;
}
`;

    try {
      writeFileSync(join(ICONS_DIR, `${name}.tsx`), componentContent);
      console.log(`DONE ${name}`);
      passes++;
    } catch (err) {
      console.error(`FAIL ${name}: ${err}`);
      fails++;
    }
  }

  const exportsBySource = new Map<string, string[]>();
  for (const icon of iconList) {
    const name = pascalize(icon.name);
    const componentName = `${name}Icon`;
    const names = exportsBySource.get(name) ?? [];
    names.push(componentName);
    if (icon.alias) {
      const aliasComponentName = `${pascalize(icon.alias.name)}Icon`;
      names.push(`${componentName} as ${aliasComponentName}`);
    }
    exportsBySource.set(name, names);
  }
  const exportLines = [...exportsBySource.entries()]
    .sort(([a], [b]) => {
      const al = a.toLowerCase();
      const bl = b.toLowerCase();
      return al < bl ? -1 : al > bl ? 1 : 0;
    })
    .map(([source, names]) => {
      const singleLine = `export { ${names.join(", ")} } from "./${source}";`;
      if (singleLine.length <= 80 || names.length <= 1) {
        return singleLine;
      }
      const namedExports = names.map((n) => `  ${n},`).join("\n");
      return `export {\n${namedExports}\n} from "./${source}";`;
    });
  const exports = exportLines.join("\n");

  const exportsMap: Record<string, string> = {
    ".": "./src/lib/mod.tsx",
    "./icons": "./src/icons/mod.tsx",
  };

  for (const icon of iconList) {
    const name = pascalize(icon.name);
    const kebabName = icon.name;
    exportsMap[`./${kebabName}`] = `./src/icons/${name}.tsx`;
  }

  const pkgJsonPath = join(pkgRoot, "package.json");
  const pkgJson = JSON.parse(readFileSync(pkgJsonPath, "utf-8"));
  pkgJson.exports = exportsMap;
  writeFileSync(pkgJsonPath, `${JSON.stringify(pkgJson, null, 2)}\n`);

  const modContent = `/* GENERATED FILE */
/**
 * All Phosphor icons exported as individual SolidJS components.
 *
 * Each icon component accepts \`IconProps\` including a \`weight\` prop
 * (\`"thin" | "light" | "regular" | "bold" | "fill" | "duotone"\`).
 *
 * @module
 * @example
 * \`\`\`tsx
 * import { ArrowRightIcon, HouseIcon } from "@transitionsag/phosphor-solid/icons";
 *
 * <ArrowRightIcon weight="bold" />
 * <HouseIcon weight="fill" />
 * \`\`\`
 */
${exports}
`;

  writeFileSync(join(ICONS_DIR, "mod.tsx"), modContent);

  console.log(`\n${passes} components generated, ${fails} failed`);
}

main();
