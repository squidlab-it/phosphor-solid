import { createContext } from "solid-js";
import type { IconWeight } from "./types.ts";

export interface IconContextValue {
  color?: string;
  size?: string | number;
  weight?: IconWeight;
  mirrored?: boolean;
}

export const IconContext = createContext<IconContextValue>({});
