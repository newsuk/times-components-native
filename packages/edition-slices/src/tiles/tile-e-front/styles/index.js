import {
  fonts,
  fontFactory,
  spacing,
  editionBreakpoints,
} from "@times-components-native/styleguide";

const styles = {
  container: {
    flexDirection: "row-reverse",
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
    paddingLeft: spacing(2),
    paddingBottom: spacing(1),
  },
};

const mediumBreakpointStyles = {
  container: {
    padding: spacing(2),
    paddingTop: spacing(3),
  },
  headline: {
    fontFamily: fonts.headline,
    fontSize: 20,
    lineHeight: 20,
  },
  imageContainer: {
    width: "100%",
    marginTop: spacing(2),
  },
};

const wideBreakpointStyles = {
  ...mediumBreakpointStyles,
  container: {
    flex: 1,
    paddingHorizontal: spacing(2),
    paddingVertical: spacing(3),
  },
};

const hugeBreakpointStyles = {
  ...wideBreakpointStyles,
  headline: {
    ...wideBreakpointStyles.headline,
    fontSize: 20,
    lineHeight: 20,
  },
};

const stylesResolver = {
  [editionBreakpoints.small]: styles,
  [editionBreakpoints.medium]: mediumBreakpointStyles,
  [editionBreakpoints.wide]: wideBreakpointStyles,
  [editionBreakpoints.huge]: hugeBreakpointStyles,
};

export default (breakpoint) => stylesResolver[breakpoint];
