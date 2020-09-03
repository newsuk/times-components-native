import { spacing } from "@times-components-native/styleguide";

const mediumBreakpointStyles = {
  container: {
    flex: 1,
    marginHorizontal: spacing(4),
  },
  item: {
    width: "50%",
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    paddingBottom: spacing(1),
  },
};

const hugeBreakpointStyles = {
  container: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: spacing(2),
  },
  secondaryItemContainer: {
    width: "33.4%",
  },
  supportItemContainer: {
    width: "16.6%",
  },
};

const stylesToReturn = {
  medium: mediumBreakpointStyles,
  wide: mediumBreakpointStyles,
  huge: hugeBreakpointStyles,
};

export default (breakpoint) =>
  stylesToReturn[breakpoint] || mediumBreakpointStyles;
