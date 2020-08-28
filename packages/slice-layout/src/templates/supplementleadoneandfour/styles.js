import {
  editionBreakpoints,
  spacing,
} from "@times-components-native/styleguide";

const mediumBreakpointStyles = {
  portraitContainer: {
    flex: 1,
    marginHorizontal: spacing(4),
    paddingVertical: spacing(1),
  },
  landscapeContainer: {
    flexDirection: "row",
  },
  portraitLeadContainer: {
    width: "100%",
  },
  landscapeLeadContainer: {
    width: "60%",
    borderColor: "red",
  },
  horizontalSupportContainer: {
    flex: 1,
    flexDirection: "row",
  },
  verticalSupportContainer: {
    flexDirection: "column",
    width: "40%",
  },
  supportItem: {
    flex: 1,
  },
};

const stylesResolver = {
  [editionBreakpoints.small]: {},
  [editionBreakpoints.medium]: mediumBreakpointStyles,
  [editionBreakpoints.wide]: mediumBreakpointStyles,
};
export default (breakpoint) => stylesResolver[breakpoint];
