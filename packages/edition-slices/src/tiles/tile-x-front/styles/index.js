import {
  colours,
  fonts,
  spacing,
  editionBreakpoints,
  globalSpacingStyles,
} from "@times-components-native/styleguide";

const fontSizeLandscapeResolver = {
  [editionBreakpoints.medium]: 40,
  [editionBreakpoints.wide]: 40,
  [editionBreakpoints.huge]: 50,
};

const fontSizePortraitResolver = {
  [editionBreakpoints.medium]: 40,
  [editionBreakpoints.wide]: 50,
  [editionBreakpoints.huge]: 50,
};

export default (breakpoint) => ({
  container: {
    flex: 1,
    padding: spacing(2),
    paddingTop: spacing(3),
  },
  headlineLandscape: {
    ...globalSpacingStyles.tabletHeadline,
    fontFamily: fonts.headline,
    fontSize: fontSizeLandscapeResolver[breakpoint],
    lineHeight: fontSizeLandscapeResolver[breakpoint],
  },
  headlinePortrait: {
    ...globalSpacingStyles.tabletHeadline,
    fontFamily: fonts.headline,
    fontSize: fontSizePortraitResolver[breakpoint],
    lineHeight: fontSizePortraitResolver[breakpoint],
  },
  strapline: {
    fontFamily: fonts.headlineRegular,
    color: colours.functional.primary,
    fontSize: 24,
    lineHeight: 26,
  },
  summary: {
    ...globalSpacingStyles.tabletTeaser,
    textAlign: "justify",
  },
});
