import { spacing, colours } from "@times-components-native/styleguide";

const mediumBreakpointStyles = {
  container: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: spacing(4),
  },
  leadItem: {
    width: "75%",
  },
  keyline: {
    backgroundColor: colours.functional.keyline,
    height: 1,
  },
  supportItem: {
    width: "25%",
  },
  colSeparatorStyle: {
    marginVertical: spacing(3),
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
  ...mediumBreakpointStyles,
  container: {
    ...mediumBreakpointStyles.container,
    marginHorizontal: spacing(2),
  },
};

const stylesToReturn = {
  smallTablet: smallTabletBreakpointStyles,
  medium: mediumBreakpointStyles,
  huge: wideBreakpointStyles,
  wide: wideBreakpointStyles,
};

export default (breakpoint) =>
  stylesToReturn[breakpoint] || mediumBreakpointStyles;
