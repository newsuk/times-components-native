import { colours, spacing } from "@times-components-native/styleguide";
import { getStyleByDeviceSize } from "@times-components-native/styleguide/src/styleguide";

const sharedPortraitStyles = {
  colSeparatorStyle: {
    borderColor: colours.functional.keyline,
    marginTop: 0,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    marginHorizontal: spacing(6),
  },
  tilesContainer: {
    flex: 1,
    flexDirection: "row",
    paddingTop: spacing(4),
  },
  leftColumn: {
    width: "75%",
  },
  rightColumn: {
    width: "25%",
  },
};

const styles = {
  portrait: {
    768: {
      ...sharedPortraitStyles,
      inTodaysEditionContainer: {
        height: 133,
        width: "100%",
        marginBottom: spacing(4),
      },
    },
    810: {
      ...sharedPortraitStyles,
      inTodaysEditionContainer: {
        height: 148,
        width: "100%",
        marginBottom: spacing(3),
      },
    },
    834: {
      ...sharedPortraitStyles,
      inTodaysEditionContainer: {
        height: 148,
        width: "100%",
        marginBottom: spacing(4),
      },
    },
    1024: {
      ...sharedPortraitStyles,
      inTodaysEditionContainer: {
        height: 174,
        width: "100%",
        marginBottom: spacing(6),
      },
    },
  },
  landscape: {
    1024: {
      ...sharedPortraitStyles,
    },
  },
};

export const getStyles = (orientation, windowWidth) =>
  getStyleByDeviceSize(styles[orientation], windowWidth);
