# @squidlab/phosphor-solid

<!-- BEGIN_LOGO -->
<img src="/.github/logo.png" width="128" align="right" />
<!-- END_LOGO -->

[Phosphor Icons](https://phosphoricons.com) for [SolidJS](https://www.solidjs.com/).

[![NPM](https://img.shields.io/npm/v/@squidlab/phosphor-solid.svg?style=flat-square)](https://www.npmjs.com/package/@squidlab/phosphor-solid)
[![CI](https://img.shields.io/github/actions/workflow/status/squidlab-it/phosphor-solid/ci.yml?branch=main&style=flat-square)](https://github.com/squidlab-it/phosphor-solid/actions/workflows/ci.yml)

[![GitHub stars](https://img.shields.io/github/stars/squidlab-it/phosphor-solid?style=flat-square&label=Star)](https://github.com/squidlab-it/phosphor-solid)
[![GitHub forks](https://img.shields.io/github/forks/squidlab-it/phosphor-solid?style=flat-square&label=Fork)](https://github.com/squidlab-it/phosphor-solid/fork)
[![GitHub watchers](https://img.shields.io/github/watchers/squidlab-it/phosphor-solid?style=flat-square&label=Watch)](https://github.com/squidlab-it/phosphor-solid)

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
import { HouseIcon } from "@squidlab/phosphor-solid/house";

function App() {
  return <HouseIcon weight="bold" class="w-6 h-6 text-white" />;
}
```

Every component accepts the props listed below plus any standard SVG attribute.
`fill="currentColor"` is set by default, so the icon inherits the parent's text color.

## Props

| Prop       | Type               | Default          | Description                                          |
| ---------- | ------------------ | ---------------- | ---------------------------------------------------- |
| `weight`   | `IconWeight`       | `"regular"`      | Icon stroke weight                                   |
| `size`     | `string \| number` | —                | Sets both `width` and `height`                       |
| `color`    | `string`           | `"currentColor"` | Fill color                                           |
| `mirrored` | `boolean`          | `false`          | Flip the icon horizontally                           |
| `alt`      | `string`           | —                | Accessible text rendered as `<title>` inside the SVG |
| …          | `SVGAttributes`    | —                | Any standard SVG attr                                |

```ts
type IconWeight = "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
```

## Context

Use `IconProvider` to set default props for all descendant icons, avoiding repetition:

```tsx
import { IconProvider } from "@squidlab/phosphor-solid";
import { HouseIcon } from "@squidlab/phosphor-solid/house";
import { GearIcon } from "@squidlab/phosphor-solid/gear";

function App() {
  return (
    <IconProvider color="white" size={32} weight="bold">
      <HouseIcon />
      <GearIcon />
    </IconProvider>
  );
}
```

Props passed directly to an icon take precedence over context values.

| Prop       | Type               | Default          |
| ---------- | ------------------ | ---------------- |
| `color`    | `string`           | `"currentColor"` |
| `size`     | `string \| number` | —                |
| `weight`   | `IconWeight`       | `"regular"`      |
| `mirrored` | `boolean`          | `false`          |
## Import styles

### Individual imports (recommended)

Each icon is exposed as its own entry point for the best possible tree-shaking:

```ts
import { IconProvider } from "@squidlab/phosphor-solid";
import { ArrowRightIcon } from "@squidlab/phosphor-solid/arrow-right";
import { GithubLogoIcon } from "@squidlab/phosphor-solid/github-logo";
```

### Barrel import

Import all icons at once via the `/icons` subpath. This will include every icon in your bundle, so use it only when you genuinely need the full set:

```ts
import {
  ArrowRightIcon,
  GithubLogoIcon,
  HouseIcon,
} from "@squidlab/phosphor-solid/icons";
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
