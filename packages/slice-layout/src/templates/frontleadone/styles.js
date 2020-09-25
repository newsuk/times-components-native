import { spacing } from "@times-components-native/styleguide";
import { getStyleByDeviceSize } from "@times-components-native/styleguide/src/styleguide";

const containerPortrait = { flex: 1, flexDirection: "column" };
const sharedStyles = {
  container: {
    flex: 1,
    flexDirection: "column",
    paddingVertical: spacing(2),
    marginHorizontal: spacing(6),
  },
};

const styles = {
  landscape: {
    "768": {
      ...sharedStyles,
    },
  },
  portrait: {
    "768": {
      container: {
        ...containerPortrait,
        paddingTop: spacing(2),
        paddingBottom: spacing(3),
      },
      inTodaysEditionContainer: {
        height: 133,
        width: "100%",
      },
    },
    "810": {
      container: {
        ...containerPortrait,
        paddingVertical: spacing(3),
      },
      inTodaysEditionContainer: {
        height: 148,
        width: "100%",
      },
    },
    "834": {
      container: {
        ...containerPortrait,
        paddingTop: spacing(3),
        paddingBottom: spacing(4),
      },
      inTodaysEditionContainer: {
        height: 148,
        width: "100%",
      },
    },
    "1024": {
      container: {
        ...containerPortrait,
        paddingTop: spacing(3),
        paddingBottom: spacing(4),
      },
      inTodaysEditionContainer: {
        height: 174,
        width: "100%",
      },
    },
  },
};

export const getStyles = (orientation, windowWidth) =>
  getStyleByDeviceSize(styles[orientation], windowWidth);
