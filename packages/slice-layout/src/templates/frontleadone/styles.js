import {
  colours,
  spacing,
  editionBreakpoints,
} from "@times-components-native/styleguide";

const sharedStyles = {
  colSeparatorStyle: {
    borderColor: colours.functional.darkGrey,
    marginTop: 0,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    paddingTop: spacing(4),
    marginHorizontal: spacing(6),
  },
  leftColumn: {
    width: "75%",
  },
  rightColumn: {
    width: "25%",
  },
};

const stylesResolver = {
  [editionBreakpoints.small]: {},
  [editionBreakpoints.medium]: sharedStyles,
  [editionBreakpoints.wide]: sharedStyles,
  [editionBreakpoints.huge]: sharedStyles,
};

export default (breakpoint) => stylesResolver[breakpoint];
