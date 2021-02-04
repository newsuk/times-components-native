import {
  fonts,
  fontFactory,
  spacing,
  editionBreakpoints,
} from "@times-components-native/styleguide";

const smallBreakpointStyles = {
  container: {
    flexDirection: "row",
    padding: spacing(2),
  },
  headline: {
    ...fontFactory({
      font: "headline",
      fontSize: "infoTitle",
    }),
    marginBottom: spacing(1),
  },
  imageContainer: {
    width: "50%",
  },
  summaryContainer: {
    width: "50%",
    paddingLeft: spacing(2),
    paddingBottom: spacing(1),
  },
};

const mediumWideBreakpointStyles = {
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
    flex: 1,
    paddingLeft: spacing(2),
    width: "100%",
  },
};

const stylesResolver = {
  [editionBreakpoints.small]: mediumWideBreakpointStyles,
  [editionBreakpoints.medium]: mediumWideBreakpointStyles,
  [editionBreakpoints.wide]: mediumWideBreakpointStyles,
};

export default (breakpoint) => stylesResolver[breakpoint];
