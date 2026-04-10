/* GENERATED FILE */
import type { JSX } from "solid-js";
import { IconBase } from "../lib/IconBase";
import type { IconProps, IconWeight } from "../lib/types";

const weights = new Map<IconWeight, () => JSX.Element>([
  [
    "thin",
    () => (
      <g>
        <path d="M204,56V200a4,4,0,0,1-8,0V132H60v68a4,4,0,0,1-8,0V56a4,4,0,0,1,8,0v68H196V56a4,4,0,0,1,8,0Z" />
      </g>
    ),
  ],
  [
    "light",
    () => (
      <g>
        <path d="M206,56V200a6,6,0,0,1-12,0V134H62v66a6,6,0,0,1-12,0V56a6,6,0,0,1,12,0v66H194V56a6,6,0,0,1,12,0Z" />
      </g>
    ),
  ],
  [
    "regular",
    () => (
      <g>
        <path d="M208,56V200a8,8,0,0,1-16,0V136H64v64a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v64H192V56a8,8,0,0,1,16,0Z" />
      </g>
    ),
  ],
  [
    "bold",
    () => (
      <g>
        <path d="M212,56V200a12,12,0,0,1-24,0V140H68v60a12,12,0,0,1-24,0V56a12,12,0,0,1,24,0v60H188V56a12,12,0,0,1,24,0Z" />
      </g>
    ),
  ],
  [
    "fill",
    () => (
      <g>
        <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,176a8,8,0,0,1-16,0V136H88v40a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0v40h80V80a8,8,0,0,1,16,0Z" />
      </g>
    ),
  ],
  [
    "duotone",
    () => (
      <g>
        <path d="M200,56V200H56V56Z" opacity="0.2" />
        <path d="M208,56V200a8,8,0,0,1-16,0V136H64v64a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v64H192V56a8,8,0,0,1,16,0Z" />
      </g>
    ),
  ],
]);

/**
 * TextH icon component.
 *
 * @example
 * ```tsx
 * <TextHIcon weight="regular" />
 * ```
 */
export function TextHIcon(props: IconProps): JSX.Element {
  return <IconBase weights={weights} {...props} />;
}
