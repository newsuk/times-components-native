import { spacing } from "@times-components-native/styleguide";

const sharedStyles = {
  container: {
    flex: 1,
    flexDirection: "row",
  },
};

const mediumBreakpointStyles = {
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
  colSeparatorStyle: {
    marginVertical: spacing(3),
  },
};

const wideBreakpointStyles = {
  ...mediumBreakpointStyles,
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
  colSeparatorStyle: {
    marginVertical: spacing(3),
  },
};

const stylesResolver = {
  medium: mediumBreakpointStyles,
  wide: wideBreakpointStyles,
  huge: wideBreakpointStyles,
};

export default (breakpoint) => stylesResolver[breakpoint] || {};
