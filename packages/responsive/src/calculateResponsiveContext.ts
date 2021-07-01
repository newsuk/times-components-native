import {
  getEditionBreakpoint,
  getNarrowArticleBreakpoint,
} from "@times-components-native/styleguide";
import { NativeModules } from "react-native";
import { isTablet } from "react-native-device-info";
import { initialWindowMetrics } from "react-native-safe-area-context";

import { ContextType, Orientation } from "./types";

const config = (NativeModules || {}).ReactConfig;

const minTabletWidth = 768;
const approximateNavHeightOnTablet = 200;

const calculateSectionContentHeightTablet = (height: number) =>
  height -
  ((initialWindowMetrics?.insets.bottom ?? 0) +
    (initialWindowMetrics?.insets.top ?? 0)) -
  approximateNavHeightOnTablet;

export const calculateResponsiveContext = (
  width: number,
  height: number,
  fontScale: number,
): ContextType => ({
  editionBreakpoint: getEditionBreakpoint(width),
  narrowArticleBreakpoint: getNarrowArticleBreakpoint(width),
  fontScale,
  isTablet: isTablet ? isTablet() : false,
  isArticleTablet:
    (config && config.breakpoint && config.breakpoint !== "small") ||
    width >= minTabletWidth,
  windowWidth: width,
  windowHeight: height,
  orientation: height > width ? Orientation.PORTRAIT : Orientation.LANDSCAPE,
  isPortrait: height > width,
  isLandscape: width > height,
  sectionContentWidth: width,
  sectionContentHeightTablet: calculateSectionContentHeightTablet(height),
});
