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
 * Extends all valid SVG attributes and adds props to control
 * the icon's appearance and behavior.
 */
export type IconProps = JSX.IntrinsicElements["svg"] & {
  /** Accessible alt text rendered as a `<title>` inside the SVG. */
  alt?: string;
  /** Override the icon fill color. Defaults to `"currentColor"`. */
  color?: string;
  /** Width and height of the icon. */
  size?: string | number;
  /** The visual weight of the icon. Defaults to `"regular"`. */
  weight?: IconWeight;
  /** Mirror the icon horizontally. */
  mirrored?: boolean;
};
