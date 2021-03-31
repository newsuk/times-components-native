import {
  spacing,
  editionBreakpoints,
} from "@times-components-native/styleguide";

const sharedBreakpointStyles = {
  secondaryColSeparator: {
    marginVertical: spacing(3),
  },
};

const mediumBreakpointStyles = {
  ...sharedBreakpointStyles,
  container: {
    flex: 1,
    marginHorizontal: spacing(4),
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
  },
  item: {
    flex: 1,
  },
  supportColSeparator: {
    marginBottom: spacing(3),
  },
};

const smallTabletBreakpointStyles = {
  ...mediumBreakpointStyles,
  container: {
    ...mediumBreakpointStyles.container,
    marginHorizontal: spacing(1),
  },
};

const wideBreakpointStyles = {
  ...sharedBreakpointStyles,
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: spacing(2),
  },
  secondaryContainer: {
    width: "66.6%",
    flexDirection: "row",
  },
  supportContainer: {
    flex: 1,
    marginVertical: spacing(1),
  },
  item: {
    width: "50%",
  },
};

const stylesResolver = {
  [editionBreakpoints.smallTablet]: smallTabletBreakpointStyles,
  [editionBreakpoints.medium]: mediumBreakpointStyles,
  [editionBreakpoints.wide]: wideBreakpointStyles,
  [editionBreakpoints.huge]: wideBreakpointStyles,
};

export default (breakpoint) => stylesResolver[breakpoint];
