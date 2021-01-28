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
  landscapeSupportContainer: {
    marginHorizontal: spacing(2),
  },
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
  portraitSupportContainer: {
    marginHorizontal: spacing(2),
  },
};

const stylesResolver = {
  [editionBreakpoints.small]: {},
  [editionBreakpoints.medium]: mediumBreakpointStyles,
  [editionBreakpoints.wide]: wideBreakpointStyles,
  [editionBreakpoints.huge]: wideBreakpointStyles,
};
export default (breakpoint) => stylesResolver[breakpoint];
