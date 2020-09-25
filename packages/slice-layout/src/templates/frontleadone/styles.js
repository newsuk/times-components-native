import {
  spacing,
  editionBreakpoints,
} from "@times-components-native/styleguide";

const sharedStyles = {
  container: {
    flex: 1,
    flexDirection: "column",
    paddingVertical: spacing(2),
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
