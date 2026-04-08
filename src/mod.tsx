/**
 * Phosphor Icons for SolidJS.
 *
 * A flexible icon family for the SolidJS ecosystem. Import individual icons
 * for optimal tree-shaking, or use the `./icons` entrypoint to access all icons.
 *
 * @module
 * @example
 * ```tsx
 * import { ArrowRightIcon } from "@squidlab/phosphor-solid";
 *
 * <ArrowRightIcon weight="bold" size={24} />;
 * ```
 */

export * from "./icons/mod.tsx";
export { IconProvider } from "./lib/IconProvider.tsx";
export type { IconProps, IconWeight } from "./lib/types.ts";
