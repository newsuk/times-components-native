import {
  columnToPercentage,
  editionBreakpoints,
  fonts,
  spacing,
} from "@times-components-native/styleguide";

const sharedStyles = {
  container: {
    flexDirection: "row",
    padding: spacing(2),
  },
  headline: {
    fontFamily: fonts.headline,
    fontSize: 20,
    lineHeight: 20,
  },
  imageContainer: {
    width: columnToPercentage({
      numberOfColumns: 3,
      numberOfMargins: 0,
      totalColumns: 7,
    }),
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
