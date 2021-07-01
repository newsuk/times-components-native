import sectionColours, { secondarySectionColours } from "./colours/section";
import functionalColours from "./colours/functional";
import themeFactory from "./theme/theme-factory";
import columnToPercentage from "./grid/columnToPercentage";

import FadeIn from "./animations";
import breakpoints, {
  editionBreakpoints,
  editionBreakpointWidths,
  editionMaxWidth,
  sliceContentMaxWidth,
  getEditionBreakpoint,
  getNarrowArticleBreakpoint,
  getStyleByDeviceSize,
} from "./breakpoints";
import timesLineHeightsFactory from "./line-heights";
import timesFonts from "./fonts/fonts";
import timesFontSizes from "./fonts/font-sizes";

import scales from "./scales";
import spacing, { globalSpacingStyles } from "./spacing";
import { ARTICLE_READ_ANIMATION } from "./articleRead";

const {
  nativeTablet: tabletWidth,
  nativeTabletWide: tabletWidthMax,
} = breakpoints;
const tabletRowPadding = 20;

const colours = {
  functional: functionalColours,
  secondarySectionColours,
  section: sectionColours,
};

const Animations = {
  FadeIn,
};

const fonts = timesFonts;
const fontSizes = timesFontSizes();
const lineHeight = timesLineHeightsFactory();

const timesFontFactory = (scale = scales.medium) => ({ font, fontSize }) => ({
  fontFamily: fonts[font],
  fontSize: timesFontSizes(scale)[fontSize],
  lineHeight: timesLineHeightsFactory(scale)({ fontSize, font }),
});

const fontFactory = timesFontFactory();

export {
  fontFactory,
  tabletWidth,
  tabletWidthMax,
  tabletRowPadding,
  columnToPercentage,
  scales,
  colours,
  Animations,
  globalSpacingStyles,
  fonts,
  fontSizes,
  lineHeight,
  ARTICLE_READ_ANIMATION,
  themeFactory,
  breakpoints,
  editionBreakpoints,
  editionBreakpointWidths,
  editionMaxWidth,
  sliceContentMaxWidth,
  getEditionBreakpoint,
  getNarrowArticleBreakpoint,
  getStyleByDeviceSize,
  spacing,
};

const styleguide = ({ scale = scales.medium } = {}) => ({
  Animations,
  colours,
  fontFactory: timesFontFactory(scale),
  fonts,
  fontSizes: timesFontSizes(scale),
  lineHeight: timesLineHeightsFactory(scale),
  spacing,
});

export default styleguide;
