import {
  fonts,
  spacing,
  editionBreakpoints,
  globalSpacingStyles,
} from "@times-components-native/styleguide";

const fontSizePortraitResolver = {
  [editionBreakpoints.medium]: 32,
  [editionBreakpoints.wide]: 35,
  [editionBreakpoints.huge]: 35,
};

export default (breakpoint) => ({
  container: {
    flex: 1,
    padding: spacing(2),
    paddingLeft: 0,
  },
  headlinePortrait: {
    ...globalSpacingStyles.tabletHeadline,
    fontFamily: fonts.headline,
    fontSize: fontSizePortraitResolver[breakpoint],
    lineHeight: fontSizePortraitResolver[breakpoint],
  },
  headlineLandscape: {
    ...globalSpacingStyles.tabletHeadline,
    fontFamily: fonts.headline,
    fontSize: 32,
    lineHeight: 32,
  },
  summary: {
    ...globalSpacingStyles.tabletTeaser,
    textAlign: "justify",
  },
});
