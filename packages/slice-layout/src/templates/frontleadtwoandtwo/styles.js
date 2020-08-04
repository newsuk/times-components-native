import {
  colours,
  editionBreakpoints,
  spacing,
} from "@times-components-native/styleguide";

const sharedStyles = {
  colSeparatorStyle: {
    borderColor: colours.functional.darkGrey,
    marginTop: 0,
  },
  rowSeparatorStyle: {
    borderColor: colours.functional.darkGrey,
  },
};

const mediumBreakpointStyles = {
  ...sharedStyles,
  containerLandscape: {
    flex: 1,
    flexDirection: "row",
  },
  containerPortrait: {
    flex: 1,
    flexDirection: "row",
    marginTop: spacing(4),
    marginHorizontal: spacing(4),
  },
  leftColumnPortrait: {
    width: "42%",
  },
  rightColumnPortrait: {
    width: "58%",
  },
  leftColumnLandscape: {
    width: "41.6%",
  },
  rightColumnLandscape: {
    width: "41.6%",
  },
  middleTileLandscape: {
    width: "16.8%",
  },
};

const hugeBreakpointStyles = {
  ...mediumBreakpointStyles,
  leftColumnLandscape: {
    width: "35%",
  },
  rightColumnLandscape: {
    width: "46%",
  },
  middleTileLandscape: {
    width: "18%",
  },
};

const stylesResolver = {
  [editionBreakpoints.small]: {},
  [editionBreakpoints.medium]: mediumBreakpointStyles,
  [editionBreakpoints.wide]: mediumBreakpointStyles,
  [editionBreakpoints.huge]: hugeBreakpointStyles,
};

export default (breakpoint) => stylesResolver[breakpoint];
