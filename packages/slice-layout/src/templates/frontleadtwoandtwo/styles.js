import {
  colours,
  editionBreakpoints,
  spacing,
} from "@times-components-native/styleguide";

const sharedStyles = {
  colSeparatorStyle: {
    borderColor: colours.functional.darkGrey,
  },
  rowSeparatorStyle: {
    borderColor: colours.functional.darkGrey,
  },
};

export const portraitStyles = {
  ...sharedStyles,
  container: {
    ...sharedStyles.container,
    marginHorizontal: spacing(4),
  },
  leftColumn: {
    width: "42%",
  },
  rightColumn: {
    width: "58%",
  },
  column: {
    width: "42%",
  },
};

export const landscapeStyles = {
  ...sharedStyles,
  container: {
    ...sharedStyles.container,
    marginHorizontal: spacing(2),
  },
  column: {
    width: "42%",
  },
  middleTile: {
    width: "16%",
  },
};

const mediumBreakpointStyles = {
  ...sharedStyles,
  containerLandscape: {
    flex: 1,
    flexDirection: "row",
    marginVertical: spacing(2),
    marginHorizontal: spacing(2),
  },
  containerPortrait: {
    flex: 1,
    flexDirection: "row",
    marginVertical: spacing(2),
    marginHorizontal: spacing(4),
  },
  leftColumnPortrait: {
    width: "42%",
  },
  rightColumnPortrait: {
    width: "58%",
  },
  leftColumnLandscape: {
    width: "42%",
  },
  rightColumnLandscape: {
    width: "42%",
  },
  middleTileLandscape: {
    width: "16%",
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
