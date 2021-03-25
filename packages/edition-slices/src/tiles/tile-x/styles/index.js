import {
  colours,
  fonts,
  spacing,
  editionBreakpoints,
  globalSpacingStyles,
} from "@times-components-native/styleguide";

const fontSizeResolver = {
  [editionBreakpoints.smallTablet]: {
    portrait: 40,
    landscape: 40,
  },
  [editionBreakpoints.medium]: {
    portrait: 40,
    landscape: 40,
  },
  [editionBreakpoints.wide]: {
    portrait: 50,
    landscape: 40,
  },
  [editionBreakpoints.huge]: {
    portrait: 45,
    landscape: 45,
  },
};

export default (breakpoint, orientation) => ({
  container: {
    flex: 1,
    padding: spacing(2),
    paddingTop: spacing(3),
  },
  headline: {
    ...globalSpacingStyles.tabletHeadline,
    fontFamily: fonts.headline,
    fontSize: fontSizeResolver[breakpoint][orientation],
    lineHeight: fontSizeResolver[breakpoint][orientation],
  },
  strapline: {
    fontFamily: fonts.headlineRegular,
    color: colours.functional.primary,
    fontSize: 24,
    lineHeight: 26,
  },
  summary: {
    ...globalSpacingStyles.tabletTeaser,
  },
});
