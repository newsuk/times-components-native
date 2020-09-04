import {
  fonts,
  spacing,
  editionBreakpoints,
  globalSpacingStyles,
} from "@times-components-native/styleguide";

const fontSizeResolver = {
  [editionBreakpoints.medium]: 20,
  [editionBreakpoints.wide]: 24,
};

const defaultStyles = {
  container: {
    flex: 1,
    flexDirection: "row",
    padding: spacing(2),
  },
  headline: {
    ...globalSpacingStyles.tabletHeadline,
    marginBottom: spacing(1),
    fontFamily: fonts.headlineRegular,
    fontWeight: "normal",
  },
  imageContainer: {
    overflow: "hidden",
    width: "30%",
  },
  summaryContainer: {
    flex: 1,
    paddingLeft: spacing(2),
    width: "70%",
    justifyContent: "center",
  },
  outerContainer: {
    flexDirection: "column",
    flex: 1,
  },
  innerContainer: {
    flexDirection: "row",
    flex: 1,
  },
  customStarPosition: {
    position: "relative",
    bottom: spacing(2),
    marginBottom: spacing(-3),
  },
};

const mediumBreakpointStyles = {
  ...defaultStyles,
  container: {
    ...defaultStyles.container,
    paddingHorizontal: spacing(2),
    paddingVertical: spacing(3),
  },
  headline: {
    ...defaultStyles.headline,
    fontSize: fontSizeResolver[editionBreakpoints.medium],
    lineHeight: fontSizeResolver[editionBreakpoints.medium],
  },
  imageContainer: {
    overflow: "hidden",
    width: 97,
  },
};

const wideBreakpointStyles = {
  ...mediumBreakpointStyles,
  container: {
    ...mediumBreakpointStyles.container,
    paddingVertical: spacing(2),
  },
  headline: {
    ...mediumBreakpointStyles.headline,
    fontSize: fontSizeResolver[editionBreakpoints.wide],
    lineHeight: fontSizeResolver[editionBreakpoints.wide],
  },
  imageContainer: {
    overflow: "hidden",
    width: 136,
  },
};

const stylesResolver = {
  [editionBreakpoints.medium]: mediumBreakpointStyles,
  [editionBreakpoints.wide]: wideBreakpointStyles,
};

export default (breakpoint) => stylesResolver[breakpoint] || {};
