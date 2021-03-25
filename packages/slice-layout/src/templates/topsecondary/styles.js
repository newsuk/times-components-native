import {
  editionBreakpoints,
  spacing,
} from "@times-components-native/styleguide";

const defaultBreakpointStyles = {
  container: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: spacing(4),
    paddingVertical: spacing(1),
  },
  leadContainer: {
    width: "66.6%",
  },
  supportContainer: {
    width: "33.3%",
  },
};

const smallTabletBreakpointStyles = {
  ...defaultBreakpointStyles,
  container: {
    ...defaultBreakpointStyles.container,
    marginHorizontal: spacing(1),
  },
};

const styleResolver = {
  [editionBreakpoints.small]: defaultBreakpointStyles,
  [editionBreakpoints.smallTablet]: smallTabletBreakpointStyles,
  [editionBreakpoints.medium]: defaultBreakpointStyles,
  [editionBreakpoints.wide]: defaultBreakpointStyles,
  [editionBreakpoints.huge]: defaultBreakpointStyles,
};

export default (breakpoint) => styleResolver[breakpoint];
