import { colours, spacing } from "@times-components-native/styleguide";

const sharedStyles = {
  container: {
    flex: 1,
    flexDirection: "row",
  },
  colSeparatorStyle: {
    marginVertical: spacing(3),
    borderColor: colours.functional.darkGrey,
  },
  rowSeparatorStyle: {
    borderColor: colours.functional.darkGrey,
  },
};

export const portraitStyles = {
  ...sharedStyles,
  container: {
    ...sharedStyles.container,
    marginHorizontal: spacing(4),
  },
  leftColumn: {
    width: "42%",
  },
  rightColumn: {
    width: "58%",
  },
  column: {
    width: "42%",
  },
};

export const landscapeStyles = {
  ...sharedStyles,
  container: {
    ...sharedStyles.container,
    marginHorizontal: spacing(2),
  },
  column: {
    width: "42%",
  },
  middleTile: {
    width: "16%",
  },
};
