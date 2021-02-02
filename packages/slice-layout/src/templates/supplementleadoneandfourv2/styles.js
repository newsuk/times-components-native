import {
  editionBreakpoints,
  spacing,
} from "@times-components-native/styleguide";

const mediumBreakpointStyles = {
  leadContainer: {
    width: "100%",
  },
  portraitSupportContainer: {
    marginHorizontal: spacing(4),
  },
  landscapeSupportContainer: {},
  horizontalSupportContainer: {
    flex: 1,
    flexDirection: "row",
  },
  verticalSupportContainer: {
    flexDirection: "column",
    width: "33.333%",
  },
  supportItem: {
    flex: 1,
  },
  colSeparatorStyle: {
    marginHorizontal: spacing(2),
  },
};

const wideBreakpointStyles = {
  ...mediumBreakpointStyles,
  landscapeSupportContainer: {
    marginHorizontal: spacing(4),
  },
  portraitSupportContainer: {
    marginHorizontal: spacing(2),
  },
};

const hugeBreakpointStyles = {
  ...wideBreakpointStyles,
  landscapeSupportContainer: {
    marginHorizontal: spacing(2),
  },
};

const stylesResolver = {
  [editionBreakpoints.small]: {},
  [editionBreakpoints.medium]: mediumBreakpointStyles,
  [editionBreakpoints.wide]: wideBreakpointStyles,
  [editionBreakpoints.huge]: hugeBreakpointStyles,
};
export default (breakpoint) => stylesResolver[breakpoint];
