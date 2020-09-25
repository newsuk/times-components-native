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

const styles = {
  landscape: {
    "768": {
      ...sharedStyles,
    },
  },
  portrait: {
    "768": {
      ...sharedStyles,
      inTheNewsContainer: {
        height: 133,
        width: "100%",
      },
    },
    "810": {
      ...sharedStyles,
      inTheNewsContainer: {
        height: 148,
        width: "100%",
      },
    },
  },
};

export default (breakpoint) => stylesResolver[breakpoint];

export const getStyles = (orientation, windowWidth) => {
  if (windowWidth >= 768) {
    return styles[orientation]["768"];
  }

  if (windowWidth >= 810) {
    return styles[orientation]["810"];
  }

  return styles[orientation]["768"];
};
