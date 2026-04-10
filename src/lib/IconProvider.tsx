import type { JSX } from "solid-js";
import { IconContext, type IconContextValue } from "./context";
import type { IconWeight } from "./types";

interface IconProviderProps {
  color?: string;
  size?: string | number;
  weight?: IconWeight;
  mirrored?: boolean;
  children: JSX.Element;
}

/**
 * Provides default icon props to all descendant Phosphor icons.
 *
 * @example
 * ```tsx
 * import { IconProvider, HouseIcon } from "@squidlab/phosphor-solid";
 *
 * <IconProvider color="red" size={32} weight="bold">
 *   <HouseIcon />
 * </IconProvider>
 * ```
 */
export function IconProvider(props: IconProviderProps): JSX.Element {
  const value: IconContextValue = {
    get color() {
      return props.color;
    },
    get size() {
      return props.size;
    },
    get weight() {
      return props.weight;
    },
    get mirrored() {
      return props.mirrored;
    },
  };

  return (
    <IconContext.Provider value={value}>{props.children}</IconContext.Provider>
  );
}
