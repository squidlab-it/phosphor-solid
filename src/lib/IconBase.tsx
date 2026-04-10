import { type JSX, mergeProps, splitProps, useContext } from "solid-js";
import { IconContext } from "./context";
import type { IconProps, IconWeight } from "./types";

interface IconBaseProps extends IconProps {
  weights: Map<IconWeight, () => JSX.Element>;
}

export function IconBase(rawProps: IconBaseProps): JSX.Element {
  const context = useContext(IconContext);

  const merged = mergeProps(
    {
      color: context.color ?? "currentColor",
      size: context.size,
      weight: (context.weight ?? "regular") as IconWeight,
      mirrored: context.mirrored ?? false,
    },
    rawProps,
  );

  const [local, others] = splitProps(merged, [
    "alt",
    "color",
    "size",
    "weight",
    "mirrored",
    "weights",
    "children",
  ]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={local.size}
      height={local.size}
      fill={local.color}
      viewBox="0 0 256 256"
      style={local.mirrored ? { transform: "scaleX(-1)" } : undefined}
      {...others}
    >
      {local.alt && <title>{local.alt}</title>}
      {local.children}
      {local.weights.get(local.weight)?.()}
    </svg>
  );
}
