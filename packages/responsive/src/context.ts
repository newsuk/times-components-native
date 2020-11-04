import { createContext } from "react";
import { getDimensions } from "@times-components-native/utils";
import { calculateState } from "./calculateState";

export type ContextType = {
  editionBreakpoint: string;
  narrowArticleBreakpoint: string;
  fontScale: number;
  isTablet: boolean;
  windowWidth: number;
  windowHeight: number;
  orientation: string;
};

const { width, height, fontScale } = getDimensions();

export default createContext<ContextType>(
  calculateState(width, height, fontScale),
);
