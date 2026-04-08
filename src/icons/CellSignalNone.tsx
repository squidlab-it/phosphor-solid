/* GENERATED FILE */
import type { JSX } from "solid-js";
import { IconBase } from "../lib/IconBase.tsx";
import type { IconProps, IconWeight } from "../lib/types.ts";

const weights = new Map<IconWeight, JSX.Element>([
  [
    "thin",
    <g>
      <path d="M44,192v8a4,4,0,0,1-8,0v-8a4,4,0,0,1,8,0Z" />
    </g>,
  ],
  [
    "light",
    <g>
      <path d="M46,192v8a6,6,0,0,1-12,0v-8a6,6,0,0,1,12,0Z" />
    </g>,
  ],
  [
    "regular",
    <g>
      <path d="M48,192v8a8,8,0,0,1-16,0v-8a8,8,0,0,1,16,0Z" />
    </g>,
  ],
  [
    "bold",
    <g>
      <path d="M52,192v8a12,12,0,0,1-24,0v-8a12,12,0,0,1,24,0Z" />
    </g>,
  ],
  [
    "fill",
    <g>
      <path d="M198.12,25.23a16,16,0,0,0-17.44,3.46l-160,160A16,16,0,0,0,32,216H192a16,16,0,0,0,16-16V40A15.94,15.94,0,0,0,198.12,25.23ZM192,200H32L192,40Z" />
    </g>,
  ],
  [
    "duotone",
    <g>
      <path d="M198.12,25.23a16,16,0,0,0-17.43,3.47l-160,160A16,16,0,0,0,32,216H192a16,16,0,0,0,16-16V40A16,16,0,0,0,198.12,25.23ZM192,200H32L192,40Z" />
    </g>,
  ],
]);

/**
 * CellSignalNone icon component.
 *
 * @example
 * ```tsx
 * <CellSignalNoneIcon weight="regular" />
 * ```
 */
export function CellSignalNoneIcon(props: IconProps): JSX.Element {
  return <IconBase weights={weights} {...props} />;
}
