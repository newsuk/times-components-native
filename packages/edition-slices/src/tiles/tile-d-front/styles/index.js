import {
  editionBreakpoints,
  fonts,
  spacing,
} from "@times-components-native/styleguide";

const sharedStyles = {
  container: {
    flexDirection: "row",
    padding: spacing(2),
    paddingBottom: spacing(3),
  },
  headline: {
    fontFamily: fonts.headline,
    fontSize: 20,
    lineHeight: 20,
  },
  imageContainer: {
    flex: 1,
  },
  summaryContainer: {
    paddingLeft: spacing(2),
  },
  summary: {
    textAlign: "justify",
  },
};

const wideBreakpointStyles = {
  ...sharedStyles,
  headline: {
    fontFamily: fonts.headline,
    fontSize: 24,
    lineHeight: 24,
  },
};

const hugeBreakpointStyles = {
  ...wideBreakpointStyles,
};

const stylesResolver = {
  [editionBreakpoints.small]: sharedStyles,
  [editionBreakpoints.medium]: sharedStyles,
  [editionBreakpoints.wide]: wideBreakpointStyles,
  [editionBreakpoints.huge]: hugeBreakpointStyles,
};

export default (breakpoint) => stylesResolver[breakpoint];
