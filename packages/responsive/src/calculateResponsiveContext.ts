import {
  getEditionBreakpoint,
  getNarrowArticleBreakpoint,
  tabletWidth,
} from "@times-components-native/styleguide";
import { NativeModules } from "react-native";
import { Orientation } from "./context";

const config = (NativeModules || {}).ReactConfig;

export const calculateResponsiveContext = (
  width: number,
  height: number,
  fontScale: number,
) => ({
  editionBreakpoint: getEditionBreakpoint(width),
  narrowArticleBreakpoint: getNarrowArticleBreakpoint(width),
  fontScale,
  isTablet:
    (config && config.breakpoint && config.breakpoint !== "small") ||
    width >= tabletWidth,
  windowWidth: width,
  windowHeight: height,
  orientation: height > width ? Orientation.PORTRAIT : Orientation.LANDSCAPE,
});
