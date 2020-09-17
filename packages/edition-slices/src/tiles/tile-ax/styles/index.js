import {
  fonts,
  spacing,
  colours,
  globalSpacingStyles,
  editionBreakpoints,
} from "@times-components-native/styleguide";

const fontSizeResolver = {
  [editionBreakpoints.medium]: {
    portrait: 24,
    landscape: 28,
  },
  [editionBreakpoints.wide]: {
    portrait: 28,
    landscape: 30,
  },
  [editionBreakpoints.huge]: {
    portrait: 28,
    landscape: 30,
  },
};

const sharedHeadlineStyle = {
  ...globalSpacingStyles.tabletHeadline,
  fontFamily: fonts.headlineRegular,
  fontWeight: "normal",
  color: colours.functional.brandColour,
};

export default (breakpoint) => ({
  container: {
    flex: 1,
    paddingHorizontal: spacing(2),
    paddingVertical: spacing(3),
  },
  headlineLandscape: {
    ...sharedHeadlineStyle,
    fontSize: fontSizeResolver[breakpoint].landscape,
    lineHeight: fontSizeResolver[breakpoint].landscape,
  },
  headlinePortrait: {
    ...sharedHeadlineStyle,
    fontSize: fontSizeResolver[breakpoint].portrait,
    lineHeight: fontSizeResolver[breakpoint].portrait,
  },
  imageContainer: {
    width: "100%",
    marginBottom: spacing(2),
  },
});
