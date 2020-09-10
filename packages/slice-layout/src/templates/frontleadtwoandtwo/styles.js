import {
  columnToPercentage,
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
  containerPortrait: {
    marginTop: spacing(4),
    marginHorizontal: spacing(4),
  },
  leftColumnPortrait: {
    width: columnToPercentage({ numberOfColumns: 5 }),
  },
  rightColumnPortrait: {
    width: columnToPercentage({ numberOfColumns: 7 }),
  },
  leftColumnLandscape: {
    width: columnToPercentage({ numberOfColumns: 5 }),
  },
  rightColumnLandscape: {
    width: columnToPercentage({ numberOfColumns: 5 }),
  },
  middleTileLandscape: {
    width: columnToPercentage({ numberOfColumns: 2, numberOfMargins: 2 }),
  },
};

const hugeBreakpointStyles = {
  ...mediumBreakpointStyles,
  leftColumnLandscape: {
    width: columnToPercentage({
      numberOfColumns: 4,
      totalColumns: 11,
    }),
  },
  rightColumnLandscape: {
    width: columnToPercentage({
      numberOfColumns: 5,
      totalColumns: 11,
    }),
  },
  middleTileLandscape: {
    width: columnToPercentage({
      numberOfColumns: 2,
      numberOfMargins: 2,
      totalColumns: 11,
    }),
  },
};

const stylesResolver = {
  [editionBreakpoints.small]: {},
  [editionBreakpoints.medium]: mediumBreakpointStyles,
  [editionBreakpoints.wide]: mediumBreakpointStyles,
  [editionBreakpoints.huge]: hugeBreakpointStyles,
};

export default (breakpoint) => stylesResolver[breakpoint];
