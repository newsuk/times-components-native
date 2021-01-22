import { spacing } from "@times-components-native/styleguide";

const sharedStyles = {
  container: {
    flex: 1,
    flexDirection: "row",
  },
};

const portraitStyles = {
  container: {
    ...sharedStyles.container,
    marginHorizontal: spacing(4),
  },

  column: {
    width: "41%",
  },
  secondColumn: {
    width: "59%",
  },
  colSeparatorStyle: {
    marginVertical: spacing(3),
  },
};

const landscapeStyles = {
  container: {
    ...sharedStyles.container,
    marginHorizontal: spacing(2),
  },
  column: {
    width: "34%",
  },
  secondColumn: {
    width: "41%",
  },
  thirdColumn: {
    width: "25%",
  },
  colSeparatorStyle: {
    marginVertical: spacing(2),
  },
};

const stylesResolver = {
  portrait: portraitStyles,
  landscape: landscapeStyles,
};

export default (orientation) => stylesResolver[orientation] || {};
