import {
  getEditionBreakpoint,
  getNarrowArticleBreakpoint,
  tabletWidth,
} from "@times-components-native/styleguide";
import { NativeModules } from "react-native";
import { ContextType, Orientation } from "./context";

const config = (NativeModules || {}).ReactConfig;

export const calculateResponsiveContext = (
  width: number,
  height: number,
  fontScale: number,
  contentSize?: { width: number; height: number },
): ContextType => ({
  editionBreakpoint: getEditionBreakpoint(width),
  narrowArticleBreakpoint: getNarrowArticleBreakpoint(width),
  fontScale,
  isTablet:
    (config && config.breakpoint && config.breakpoint !== "small") ||
    width >= tabletWidth,
  windowWidth: width,
  windowHeight: height,
  orientation: height > width ? Orientation.PORTRAIT : Orientation.LANDSCAPE,
  isPortrait: height > width,
  isLandscape: width > height,
  sectionContentWidth: contentSize?.width ?? 0, // todo remove `?? 0` once android also passes contentSize
  sectionContentHeight: contentSize?.height ?? 0,
});
