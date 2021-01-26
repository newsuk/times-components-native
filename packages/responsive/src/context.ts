import { createContext } from "react";
import { getDimensions } from "@times-components-native/utils";
import { calculateResponsiveContext } from "./calculateResponsiveContext";
import { Orientation } from "@times-components-native/types";

export type ContextType = {
  editionBreakpoint: string;
  narrowArticleBreakpoint: string;
  fontScale: number;
  isTablet: boolean;
  windowWidth: number;
  windowHeight: number;
  orientation: Orientation;
};

const { width, height, fontScale } = getDimensions();

export default createContext<ContextType>(
  calculateResponsiveContext(width, height, fontScale),
);
