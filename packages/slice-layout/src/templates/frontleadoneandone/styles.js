import {
  colours,
  getStyleByDeviceSize,
  spacing,
} from "@times-components-native/styleguide";

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
  inTodaysEditionContainer: {
    width: "100%",
  },
};

const sharedLandscapeStyles = {

};

const styles = {
  portrait: {
    768: {
      ...sharedPortraitStyles,
      inTodaysEditionContainer: {
        ...sharedPortraitStyles.inTodaysEditionContainer,
        height: 133,
        marginBottom: spacing(4),
      },
    },
    810: {
      ...sharedPortraitStyles,
      inTodaysEditionContainer: {
        ...sharedPortraitStyles.inTodaysEditionContainer,
        height: 148,
        marginBottom: spacing(3),
      },
    },
    834: {
      ...sharedPortraitStyles,
      inTodaysEditionContainer: {
        ...sharedPortraitStyles.inTodaysEditionContainer,
        height: 148,
        marginBottom: spacing(4),
      },
    },
    1024: {
      ...sharedPortraitStyles,
      inTodaysEditionContainer: {
        ...sharedPortraitStyles.inTodaysEditionContainer,
        height: 174,
        marginBottom: spacing(6),
      },
    },
  },
  landscape: {
    "1024": {
      ...sharedLandscapeStyles,
    },
    "1080": {
      ...sharedLandscapeStyles,
    },
    "1366": {
      ...sharedLandscapeStyles,
    },
  },
};

export const getStyles = (orientation, windowWidth) =>
  getStyleByDeviceSize(styles[orientation], windowWidth);
