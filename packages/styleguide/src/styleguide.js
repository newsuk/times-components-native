import sectionColours, { secondarySectionColours } from "./colours/section";
import functionalColours from "./colours/functional";

import FadeIn from "./animations";

import breakpoints from "./breakpoints";
import timesLineHeightsFactory from "./line-heights";
import timesFonts from "./fonts/fonts";
import timesFontSizes from "./fonts/font-sizes";
import timesFontFactory from "./fonts/font-factory";

import scales from "./scales";
import spacing from "./spacing";

export const colours = {
  functional: functionalColours,
  secondarySectionColours,
  section: sectionColours,
};

export const Animations = {
  FadeIn,
};
export const fonts = timesFonts;
export const fontFactory = timesFontFactory();
export const fontSizes = timesFontSizes();
export const lineHeight = timesLineHeightsFactory();
export const {
  nativeTablet: tabletWidth,
  nativeTabletWide: tabletWidthMax,
} = breakpoints;
export const tabletRowPadding = 20;

export {
  default as breakpoints,
  editionBreakpoints,
  editionBreakpointWidths,
  editionMaxWidth,
  sliceContentMaxWidth,
  getEditionBreakpoint,
  getNarrowArticleBreakpoint,
  getStyleByDeviceSize,
} from "./breakpoints";

export { default as scales } from "./scales";

export { default as spacing, globalSpacingStyles } from "./spacing";

export { default as themeFactory } from "./theme/theme-factory";

export { default as columnToPercentage } from "./grid/columnToPercentage";

export default ({ scale = scales.medium } = {}) => ({
  Animations,
  colours,
  fontFactory: timesFontFactory(scale),
  fonts,
  fontSizes: timesFontSizes(scale),
  lineHeight: timesLineHeightsFactory(scale),
  spacing,
});
