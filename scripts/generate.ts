import { type IconEntry, icons } from "@phosphor-icons/core";
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

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

function svgToJsx(svg: string): string {
  const inner = svg
    .replace(/<svg[^>]*>/, "")
    .replace(/<\/svg>/, "")
    .trim();
  return `<g>${inner}</g>`;
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
        weights.set(weight, svgToJsx(svg));
      }
    }

    if (weights.size === 0) {
      console.error(`FAIL ${name}: no SVG assets found`);
      fails++;
      continue;
    }

    const entries = [...weights]
      .map(([w, content]) => `  ["${w}", ${content}]`)
      .join(",\n");

    const componentName = `${name}Icon`;

    const componentContent = `\
/* GENERATED FILE */
import { type JSX, splitProps } from "solid-js";
import type { IconProps } from "../lib/types.ts";

const weights = new Map<IconProps["weight"], JSX.Element>([
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
export function ${componentName}(rawProps: IconProps): JSX.Element {
  const [local, others] = splitProps(rawProps, ["weight"]);
  const weight = local.weight ?? "regular";
  const content = weights.get(weight) ?? weights.get("regular");

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      {...others}
    >
      {content}
    </svg>
  );
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

  const exports = iconList
    .map((icon) => {
      const name = pascalize(icon.name);
      const componentName = `${name}Icon`;
      let line = `export { ${componentName} } from "./${name}.tsx";`;
      if (icon.alias) {
        const aliasName = pascalize(icon.alias.name);
        line += `\nexport { ${componentName} as ${aliasName}Icon } from "./${name}.tsx";`;
      }
      return line;
    })
    .join("\n");

  const exportsMap: Record<string, string> = {
    ".": "./src/mod.tsx",
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
