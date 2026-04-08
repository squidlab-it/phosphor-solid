/* GENERATED FILE */
import { type JSX, splitProps } from "solid-js";
import type { IconProps } from "../lib/types.ts";

const weights = new Map<IconProps["weight"], JSX.Element>([
  [
    "thin",
    <g>
      <path d="M204,120v80a4,4,0,0,1-8,0V120a68,68,0,0,0-136,0v80a4,4,0,0,1-8,0V120a76,76,0,0,1,152,0Z" />
    </g>,
  ],
  [
    "light",
    <g>
      <path d="M206,120v80a6,6,0,0,1-12,0V120a66,66,0,0,0-132,0v80a6,6,0,0,1-12,0V120a78,78,0,0,1,156,0Z" />
    </g>,
  ],
  [
    "regular",
    <g>
      <path d="M208,120v80a8,8,0,0,1-16,0V120a64,64,0,0,0-128,0v80a8,8,0,0,1-16,0V120a80,80,0,0,1,160,0Z" />
    </g>,
  ],
  [
    "bold",
    <g>
      <path d="M212,120v80a12,12,0,0,1-24,0V120a60,60,0,0,0-120,0v80a12,12,0,0,1-24,0V120a84,84,0,0,1,168,0Z" />
    </g>,
  ],
  [
    "fill",
    <g>
      <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,176a8,8,0,0,1-16,0V120a40,40,0,0,0-80,0v56a8,8,0,0,1-16,0V120a56,56,0,0,1,112,0Z" />
    </g>,
  ],
  [
    "duotone",
    <g>
      <path d="M200,120v80H56V120a72,72,0,0,1,144,0Z" opacity="0.2" />
      <path d="M208,120v80a8,8,0,0,1-16,0V120a64,64,0,0,0-128,0v80a8,8,0,0,1-16,0V120a80,80,0,0,1,160,0Z" />
    </g>,
  ],
]);

/**
 * Intersection icon component.
 *
 * @example
 * ```tsx
 * <IntersectionIcon weight="regular" />
 * ```
 */
export function IntersectionIcon(rawProps: IconProps): JSX.Element {
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
