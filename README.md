# @squidlab/phosphor-solid

[Phosphor Icons](https://phosphoricons.com) for [SolidJS](https://www.solidjs.com/).

1,500+ icons across six weights — thin, light, regular, bold, fill, and duotone — each as a standalone SolidJS component. Icons are sourced from [@phosphor-icons/core](https://github.com/phosphor-icons/core).

## Features

- **Native TypeScript** — ships raw `.tsx` sources, fully typed out of the box with no extra `@types` needed
- **SSR-compatible** — no browser APIs at render time; your bundler compiles the components for both server and client
- **Tree-shakeable** — unused icons are eliminated at build time by any modern bundler (Vite, Rollup, esbuild, …)
- **Zero runtime dependencies** — only `solid-js` as a peer dependency

## Installation

```sh
npm install @squidlab/phosphor-solid
# or
pnpm add @squidlab/phosphor-solid
# or
yarn add @squidlab/phosphor-solid
# or
bun add @squidlab/phosphor-solid
```

## Quick start

```tsx
import { HouseIcon } from "@squidlab/phosphor-solid";

function App() {
  return <HouseIcon weight="bold" class="w-6 h-6 text-white" />;
}
```

Every component accepts a `weight` prop plus any standard SVG attribute.
Sizing and coloring are handled via CSS — `fill="currentColor"` is set by default.

## Props

| Prop     | Type            | Default     | Description           |
| -------- | --------------- | ----------- | --------------------- |
| `weight` | `IconWeight`    | `"regular"` | Icon stroke weight    |
| …        | `SVGAttributes` | —           | Any standard SVG attr |

```ts
type IconWeight = "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
```

## Import styles

### Individual imports (recommended)

Each icon is exposed as its own entry point for the best possible tree-shaking:

```ts
import { ArrowRightIcon } from "@squidlab/phosphor-solid/arrow-right";
import { GithubLogoIcon } from "@squidlab/phosphor-solid/github-logo";
```

### Barrel import

Import multiple icons from the package root — still tree-shakeable:

```ts
import {
  ArrowRightIcon,
  GithubLogoIcon,
  HouseIcon,
} from "@squidlab/phosphor-solid";
```

### Namespace import

Import the entire icon set under a single namespace:

```ts
import * as Icons from "@squidlab/phosphor-solid/icons";

<Icons.ArrowRightIcon />;
```

## Bundler notes

Because the package exports TypeScript sources directly, your bundler must be configured to handle `.tsx` files from `node_modules`. SolidJS starters (e.g. `degit solidjs/templates/ts`) already do this via `vite-plugin-solid`.

## Version mapping

| `@squidlab/phosphor-solid` | `@phosphor-icons/core` |
| -------------------------- | ---------------------- |
| 1.0.0                      | 2.1.1                  |

## License

MIT — icons from [Phosphor Icons](https://phosphoricons.com).
