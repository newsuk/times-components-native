import { createContext } from "react";
import { getDimensions } from "@times-components-native/utils";
import { calculateResponsiveContext } from "./calculateResponsiveContext";

export enum Orientation {
  PORTRAIT = "portrait",
  LANDSCAPE = "landscape",
}

export type ContextType = {
  editionBreakpoint: string;
  narrowArticleBreakpoint: string;
  fontScale: number;
  isTablet: boolean;
  windowWidth: number;
  windowHeight: number;
  orientation: Orientation;
  isPortrait: boolean;
  isLandscape: boolean;
};

const { width, height, fontScale } = getDimensions();

export default createContext<ContextType>(
  calculateResponsiveContext(width, height, fontScale),
);
