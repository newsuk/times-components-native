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
    paddingHorizontal: spacing(2),
    paddingTop: spacing(2),
    paddingBottom: spacing(4),
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
