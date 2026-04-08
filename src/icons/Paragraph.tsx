/* GENERATED FILE */
import { type JSX, splitProps } from "solid-js";
import type { IconProps } from "../lib/types.ts";

const weights = new Map<IconProps["weight"], JSX.Element>([
  [
    "thin",
    <g>
      <path d="M208,44H96a60,60,0,0,0,0,120h44v44a4,4,0,0,0,8,0V52h32V208a4,4,0,0,0,8,0V52h20a4,4,0,0,0,0-8ZM140,156H96A52,52,0,0,1,96,52h44Z" />
    </g>,
  ],
  [
    "light",
    <g>
      <path d="M208,42H96a62,62,0,0,0,0,124h42v42a6,6,0,0,0,12,0V54h28V208a6,6,0,0,0,12,0V54h18a6,6,0,0,0,0-12ZM138,154H96A50,50,0,0,1,96,54h42Z" />
    </g>,
  ],
  [
    "regular",
    <g>
      <path d="M208,40H96a64,64,0,0,0,0,128h40v40a8,8,0,0,0,16,0V56h24V208a8,8,0,0,0,16,0V56h16a8,8,0,0,0,0-16ZM136,152H96a48,48,0,0,1,0-96h40Z" />
    </g>,
  ],
  [
    "bold",
    <g>
      <path d="M208,36H96a68,68,0,0,0,0,136h36v36a12,12,0,0,0,24,0V60h16V208a12,12,0,0,0,24,0V60h12a12,12,0,0,0,0-24ZM132,148H96a44,44,0,0,1,0-88h36Z" />
    </g>,
  ],
  [
    "fill",
    <g>
      <path d="M216,48a8,8,0,0,1-8,8H192V208a8,8,0,0,1-16,0V56H152V208a8,8,0,0,1-16,0V168H96A64,64,0,0,1,96,40H208A8,8,0,0,1,216,48Z" />
    </g>,
  ],
  [
    "duotone",
    <g>
      <path d="M144,48V160H96A56,56,0,0,1,96,48Z" opacity="0.2" />
      <path d="M208,40H96a64,64,0,0,0,0,128h40v40a8,8,0,0,0,16,0V56h24V208a8,8,0,0,0,16,0V56h16a8,8,0,0,0,0-16ZM136,152H96a48,48,0,0,1,0-96h40Z" />
    </g>,
  ],
]);

/**
 * Paragraph icon component.
 *
 * @example
 * ```tsx
 * <ParagraphIcon weight="regular" />
 * ```
 */
export function ParagraphIcon(rawProps: IconProps): JSX.Element {
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
