import {
  fonts,
  spacing,
  editionBreakpoints,
} from "@times-components-native/styleguide";

const mediumBreakpointStyles = {
  container: {
    padding: spacing(2),
    paddingTop: spacing(3),
    flex: 1,
  },
  headlinePortrait: {
    fontFamily: fonts.headline,
    fontSize: 24,
    lineHeight: 24,
  },
  headlineLandscape: {
    fontFamily: fonts.headline,
    fontSize: 24,
    lineHeight: 24,
  },
  imageContainer: {
    width: "100%",
    marginBottom: spacing(2),
  },
  summary: {
    textAlign: "justify",
  },
};

const wideBreakpointStyles = {
  ...mediumBreakpointStyles,
  container: {
    flex: 1,
    paddingHorizontal: spacing(2),
    paddingVertical: spacing(3),
  },
  headlinePortrait: {
    fontFamily: fonts.headline,
    fontSize: 30,
    lineHeight: 30,
  },
  headlineLandscape: {
    fontFamily: fonts.headline,
    fontSize: 20,
    lineHeight: 20,
  },
};

const hugeBreakpointStyles = {
  ...wideBreakpointStyles,
  headlineLandscape: {
    fontFamily: fonts.headline,
    fontSize: 26,
    lineHeight: 26,
  },
};

const stylesResolver = {
  [editionBreakpoints.small]: {},
  [editionBreakpoints.medium]: mediumBreakpointStyles,
  [editionBreakpoints.wide]: wideBreakpointStyles,
  [editionBreakpoints.huge]: hugeBreakpointStyles,
};

export default (breakpoint) => stylesResolver[breakpoint];
