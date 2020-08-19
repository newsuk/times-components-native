import {
  fonts,
  spacing,
  editionBreakpoints,
  globalSpacingStyles,
  colours,
} from "@times-components-native/styleguide";

const fontSizeResolver = {
  [editionBreakpoints.medium]: {
    landscape: 40,
    portrait: 40,
  },
  [editionBreakpoints.wide]: {
    landscape: 40,
    portrait: 50,
  },
  [editionBreakpoints.huge]: {
    landscape: 50,
    portrait: 50,
  },
};

export default (breakpoint) => ({
  container: {
    paddingRight: spacing(2),
    paddingBottom: spacing(2),
    flex: 1,
  },
  headlineLandscape: {
    ...globalSpacingStyles.tabletHeadline,
    fontFamily: fonts.headline,
    fontSize: fontSizeResolver[breakpoint].landscape,
    lineHeight: fontSizeResolver[breakpoint].landscape,
  },
  headlinePortrait: {
    ...globalSpacingStyles.tabletHeadline,
    fontFamily: fonts.headline,
    fontSize: fontSizeResolver[breakpoint].portrait,
    lineHeight: fontSizeResolver[breakpoint].portrait,
  },
  strapline: {
    fontFamily: fonts.headlineRegular,
    color: colours.functional.primary,
    fontSize: 24,
    lineHeight: 26,
  },
  imageContainer: {
    width: "100%",
    marginBottom: spacing(2),
  },
  summary: {
    ...globalSpacingStyles.tabletTeaser,
    textAlign: "justify",
  },
});