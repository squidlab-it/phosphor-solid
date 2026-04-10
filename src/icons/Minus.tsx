/* GENERATED FILE */
import type { JSX } from "solid-js";
import { IconBase } from "../lib/IconBase";
import type { IconProps, IconWeight } from "../lib/types";

const weights = new Map<IconWeight, () => JSX.Element>([
  [
    "thin",
    () => (
      <g>
        <path d="M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128Z" />
      </g>
    ),
  ],
  [
    "light",
    () => (
      <g>
        <path d="M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128Z" />
      </g>
    ),
  ],
  [
    "regular",
    () => (
      <g>
        <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z" />
      </g>
    ),
  ],
  [
    "bold",
    () => (
      <g>
        <path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z" />
      </g>
    ),
  ],
  [
    "fill",
    () => (
      <g>
        <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H72a8,8,0,0,1,0-16H184a8,8,0,0,1,0,16Z" />
      </g>
    ),
  ],
  [
    "duotone",
    () => (
      <g>
        <path
          d="M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z"
          opacity="0.2"
        />
        <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z" />
      </g>
    ),
  ],
]);

/**
 * Minus icon component.
 *
 * @example
 * ```tsx
 * <MinusIcon weight="regular" />
 * ```
 */
export function MinusIcon(props: IconProps): JSX.Element {
  return <IconBase weights={weights} {...props} />;
}
