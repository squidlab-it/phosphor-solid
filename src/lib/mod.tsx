/**
 * Core utilities for Phosphor Icons in SolidJS.
 *
 * Provides the {@linkcode IconProvider} context provider and shared types.
 * Import individual icons from their dedicated subpaths (e.g.
 * `@squidlab/phosphor-solid/arrow-right`) for optimal tree-shaking.
 *
 * @module
 * @example
 * ```tsx
 * import { IconProvider } from "@squidlab/phosphor-solid";
 * import { ArrowRightIcon } from "@squidlab/phosphor-solid/arrow-right";
 *
 * <IconProvider weight="bold" size={24}>
 *   <ArrowRightIcon />
 * </IconProvider>;
 * ```
 */

export { IconProvider } from "./IconProvider.tsx";
export { IconContext, type IconContextValue } from "./context.ts";
export type { IconProps, IconWeight } from "./types.ts";
