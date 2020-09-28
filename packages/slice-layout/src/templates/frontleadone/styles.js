import { spacing } from "@times-components-native/styleguide";
import {
  columnToPercentage,
  getStyleByDeviceSize,
} from "@times-components-native/styleguide/src/styleguide";

const containerPortrait = { flex: 1, flexDirection: "column" };
const containerLandscape = { flex: 1, flexDirection: "row" };

const sharedLandscapeStyles = {
  colSeparatorStyle: { marginVertical: 0 },
  inTodaysEditionContainer: {
    width: columnToPercentage({ numberOfColumns: 3 }),
    marginLeft: spacing(2),
    backgroundColor: "#f0eedf", // REMOVE BEFORE COMMITTING
  },
  leadContainer: {
    width: columnToPercentage({ numberOfColumns: 9 }),
  },
};

const styles = {
  landscape: {
    "1024": {
      ...sharedLandscapeStyles,
      container: {
        ...containerLandscape,
        paddingVertical: spacing(2),
      },
    },
    "1080": {
      ...sharedLandscapeStyles,
      container: {
        ...containerLandscape,
        paddingVertical: spacing(3),
      },
    },
    "1366": {
      ...sharedLandscapeStyles,
      container: {
        ...containerLandscape,
        paddingTop: spacing(6),
        paddingBottom: spacing(7),
      },
      inTodaysEditionContainer: {
        width: columnToPercentage({ numberOfColumns: 2, totalColumns: 11 }),
        marginLeft: spacing(2),
        backgroundColor: "#f0eedf", // REMOVE BEFORE COMMITTING
      },
      leadContainer: {
        width: columnToPercentage({ numberOfColumns: 9, totalColumns: 11 }),
      },
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
