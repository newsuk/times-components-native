import {
  fonts,
  fontFactory,
  spacing,
  editionBreakpoints,
} from "@times-components-native/styleguide";

const smallBreakpointStyles = {
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
    paddingBottom: 0,
    flexDirection: "column-reverse",
  },
  headline: {
    fontFamily: fonts.headline,
    fontSize: 20,
    lineHeight: 20,
  },
  imageContainer: {
    width: "100%",
    marginTop: spacing(1),
    marginBottom: spacing(2),
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
    fontSize: 28,
    lineHeight: 28,
  },
};

const stylesResolver = {
  [editionBreakpoints.small]: {
    portrait: smallBreakpointStyles,
    landscape: smallBreakpointStyles,
  },
  [editionBreakpoints.smallTablet]: {
    portrait: mediumBreakpointStyles,
    landscape: mediumBreakpointStyles,
  },
  [editionBreakpoints.medium]: {
    portrait: mediumBreakpointStyles,
    landscape: mediumBreakpointStyles,
  },
  [editionBreakpoints.wide]: {
    portrait: {
      ...wideBreakpointStyles,
      headline: {
        ...wideBreakpointStyles.headline,
        fontSize: 28,
        lineHeight: 28,
      },
    },
    landscape: wideBreakpointStyles,
  },
  [editionBreakpoints.huge]: {
    portrait: hugeBreakpointStyles,
    landscape: hugeBreakpointStyles,
  },
};

export default (breakpoint, orientation) =>
  stylesResolver[breakpoint][orientation];
