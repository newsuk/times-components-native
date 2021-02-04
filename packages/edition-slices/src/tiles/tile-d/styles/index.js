import {
  fonts,
  spacing,
  editionBreakpoints,
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
    flex: 1,
    paddingLeft: spacing(2),
  },
};

const smallBreakpointStyles = {
  ...sharedStyles,
  container: {
    ...sharedStyles.container,
    paddingBottom: spacing(2),
  },
};

export default (breakpoint) =>
  breakpoint === editionBreakpoints.small
    ? smallBreakpointStyles
    : sharedStyles;
