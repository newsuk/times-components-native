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
    width: "50%",
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
    width: "42%",
  },
  middleTile: {
    width: "16%",
  },
  colSeparatorStyle: {
    marginVertical: spacing(3),
  },
};

const stylesResolver = {
  portrait: portraitStyles,
  landscape: landscapeStyles,
};

export default (orientation) => stylesResolver[orientation] || {};
