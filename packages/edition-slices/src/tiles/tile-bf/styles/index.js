import {
  colours,
  spacing,
  fonts,
  globalSpacingStyles,
} from "@times-components-native/styleguide";

const mediumBreakpointStyles = {
  container: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: spacing(4),
    padding: spacing(2),
  },
  headline: {
    ...globalSpacingStyles.tabletHeadline,
    fontFamily: fonts.headlineRegular,
    fontWeight: "normal",
    fontSize: 25,
    lineHeight: 25,
  },
  summaryContainer: {
    flex: 1,
    padding: spacing(3),
    backgroundColor: colours.functional.whiteGrey,
  },
  imageContainer: {
    flex: 2,
  },
};

const wideBreakpointStyles = {
  ...mediumBreakpointStyles,
  container: {
    ...mediumBreakpointStyles.container,
    marginHorizontal: spacing(2),
  },
  headline: {
    ...mediumBreakpointStyles.headline,
    fontSize: 32,
    lineHeight: 32,
  },
};

const hugeBreakpointStyles = {
  ...wideBreakpointStyles,
  headline: {
    ...wideBreakpointStyles.headline,
    fontSize: 35,
    lineHeight: 35,
  },
  summaryContainer: {
    ...wideBreakpointStyles.summaryContainer,
    padding: spacing(4),
  },
};

const stylesResolver = {
  medium: mediumBreakpointStyles,
  wide: wideBreakpointStyles,
  huge: hugeBreakpointStyles,
};

export default (breakpoint) => stylesResolver[breakpoint];
