import {
  spacing,
  editionBreakpoints,
} from "@times-components-native/styleguide";

const sharedStyles = {
  container: {
    flex: 1,
    flexDirection: "row",
    paddingTop: spacing(4),
    marginHorizontal: spacing(6),
  },
};

const stylesResolver = {
  [editionBreakpoints.small]: {},
  [editionBreakpoints.medium]: sharedStyles,
  [editionBreakpoints.wide]: sharedStyles,
  [editionBreakpoints.huge]: sharedStyles,
};

export default (breakpoint) => stylesResolver[breakpoint];
