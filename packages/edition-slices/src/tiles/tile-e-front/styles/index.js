import {
  fonts,
  spacing,
  editionBreakpoints,
} from "@times-components-native/styleguide";

const mediumBreakpointStyles = {
  container: {
    padding: spacing(2),
    paddingRight: 0,
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
    marginBottom: 0,
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
  headlinePortrait: {
    fontFamily: fonts.headline,
    fontSize: 30,
    lineHeight: 30,
  },
  headlineLandscape: {
    fontFamily: fonts.headline,
    fontSize: 20,
    lineHeight: 20,
    marginBottom: 0,
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
