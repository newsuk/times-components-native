import {
  fonts,
  spacing,
  editionBreakpoints,
  globalSpacingStyles,
} from "@times-components-native/styleguide";

const fontSizeResolver = {
  [editionBreakpoints.medium]: {
    portrait: 22,
    landscape: 22,
  },
  [editionBreakpoints.wide]: {
    landscape: 22,
    portrait: 26,
  },
  [editionBreakpoints.huge]: {
    portrait: 26,
    landscape: 26,
  },
};

export default (breakpoint) => ({
  container: {
    flex: 1,
    padding: spacing(2),
    paddingTop: 0,
  },
  headlinePortrait: {
    fontFamily: fonts.headline,
    fontSize: fontSizeResolver[breakpoint].portrait,
    lineHeight: fontSizeResolver[breakpoint].portrait,
  },
  headlineLandscape: {
    fontFamily: fonts.headline,
    fontSize: fontSizeResolver[breakpoint].landscape,
    lineHeight: fontSizeResolver[breakpoint].landscape,
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
