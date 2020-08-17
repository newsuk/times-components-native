import {
  fonts,
  spacing,
  editionBreakpoints,
} from "@times-components-native/styleguide";

const mediumBreakpointStyles = {
  container: {
    paddingRight: spacing(2),
    flex: 1,
  },
  headlinePortrait: {
    fontFamily: fonts.headline,
    fontSize: 40,
    lineHeight: 40,
  },
  headlineLandscape: {
    fontFamily: fonts.headline,
    fontSize: 40,
    lineHeight: 40,
  },
  imageContainer: {
    width: "100%",
    marginBottom: spacing(2) - 1, // this is to make a 2-line headline fit on an iPad mini
  },
  summary: {
    textAlign: "justify",
  },
};

const wideBreakpointStyles = {
  ...mediumBreakpointStyles,
  headlinePortrait: {
    fontFamily: fonts.headline,
    fontSize: 50,
    lineHeight: 50,
  },
  headlineLandscape: {
    fontFamily: fonts.headline,
    fontSize: 45,
    lineHeight: 45,
    marginBottom: 0,
  },
};

const hugeBreakpointStyles = {
  ...wideBreakpointStyles,
  headlineLandscape: {
    fontFamily: fonts.headline,
    fontSize: 50,
    lineHeight: 50,
  },
};

const stylesResolver = {
  [editionBreakpoints.small]: {},
  [editionBreakpoints.medium]: mediumBreakpointStyles,
  [editionBreakpoints.wide]: wideBreakpointStyles,
  [editionBreakpoints.huge]: hugeBreakpointStyles,
};

export default (breakpoint) => stylesResolver[breakpoint];
