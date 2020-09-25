import {
  spacing,
  editionBreakpoints,
} from "@times-components-native/styleguide";
import { getStyleByDeviceSize } from "@times-components-native/styleguide/src/styleguide";

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
  return getStyleByDeviceSize(styles[orientation], windowWidth);
};
