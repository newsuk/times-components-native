import {
  editionBreakpoints,
  spacing,
} from "@times-components-native/styleguide";

const mediumBreakpointStyles = {
  portraitContainer: {
    flex: 1,
    marginHorizontal: spacing(4),
  },
  landscapeContainer: {
    marginHorizontal: spacing(4),
  },
  portraitLeadContainer: {
    width: "100%",
  },
  landscapeLeadContainer: {
    width: "100%",
  },
  supportTilesContainer: {},
  landscapeSupportContainer: {
    marginHorizontal: spacing(4),
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
  portraitContainer: {
    ...mediumBreakpointStyles.container,
    marginHorizontal: spacing(2),
  },
  supportTilesContainer: {
    marginHorizontal: spacing(4),
  },
};

const stylesResolver = {
  [editionBreakpoints.small]: {},
  [editionBreakpoints.medium]: mediumBreakpointStyles,
  [editionBreakpoints.wide]: wideBreakpointStyles,
  [editionBreakpoints.huge]: wideBreakpointStyles,
};
export default (breakpoint) => stylesResolver[breakpoint];
