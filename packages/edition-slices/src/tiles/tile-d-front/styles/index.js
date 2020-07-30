import {
  fonts,
  fontFactory,
  spacing,
  editionBreakpoints,
} from "@times-components-native/styleguide";

const styles = {
  container: {
    flexDirection: "row",
    padding: spacing(2),
    flex: 1,
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

const mediumBreakpointStyles = {
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

export default (breakpoint) =>
  breakpoint === editionBreakpoints.medium ? mediumBreakpointStyles : styles;
