import type { JSX } from "solid-js";

/** The visual weight/thickness variant of an icon. */
export type IconWeight =
  | "thin"
  | "light"
  | "regular"
  | "bold"
  | "fill"
  | "duotone";

/**
 * Props accepted by any Phosphor icon component.
 *
 * Extends all valid SVG attributes and adds a `weight` prop to control
 * the icon's visual thickness.
 */
export type IconProps = JSX.IntrinsicElements["svg"] & {
  /** The visual weight of the icon. Defaults to `"regular"`. */
  weight?: IconWeight;
};
