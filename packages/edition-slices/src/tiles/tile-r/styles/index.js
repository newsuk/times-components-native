import {
  fonts,
  spacing,
  editionBreakpoints,
} from "@times-components-native/styleguide";

const mediumBreakpointStyles = {
  container: {
    flex: 1,
    paddingVertical: spacing(3),
    paddingHorizontal: spacing(6),
  },
  headline: {
    fontFamily: fonts.headline,
    fontSize: 40,
    lineHeight: 40,
  },
  imageContainer: {
    width: "100%",
    marginBottom: spacing(2),
  },
};

const smallTabletBreakpointStyles = {
  ...mediumBreakpointStyles,
  container: {
    ...mediumBreakpointStyles.container,
    paddingHorizontal: spacing(3),
  },
};

const wideBreakpointStyles = {
  ...mediumBreakpointStyles,
  container: {
    flex: 1,
    paddingVertical: spacing(3),
    paddingHorizontal: spacing(4),
  },
  imageContainer: {
    width: "100%",
    marginBottom: spacing(3),
  },
};

const hugeBreakpointStyles = {
  ...wideBreakpointStyles,
  headline: {
    fontFamily: fonts.headline,
    fontSize: 45,
    lineHeight: 45,
    marginBottom: 0,
  },
};

const stylesResolver = {
  [editionBreakpoints.smallTablet]: smallTabletBreakpointStyles,
  [editionBreakpoints.medium]: mediumBreakpointStyles,
  [editionBreakpoints.wide]: wideBreakpointStyles,
  [editionBreakpoints.huge]: hugeBreakpointStyles,
};

export default (breakpoint) => stylesResolver[breakpoint];
