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
    flexDirection: "row",
  },
  portraitLeadContainer: {
    width: "100%",
  },
  landscapeLeadContainer: {
    width: "66.667%",
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
};

const stylesResolver = {
  [editionBreakpoints.small]: {},
  [editionBreakpoints.medium]: mediumBreakpointStyles,
  [editionBreakpoints.wide]: wideBreakpointStyles,
  [editionBreakpoints.huge]: wideBreakpointStyles,
};
export default (breakpoint) => stylesResolver[breakpoint];
