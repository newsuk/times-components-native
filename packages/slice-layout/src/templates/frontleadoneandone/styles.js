import {
  colours,
  columnToPercentage,
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
    width: columnToPercentage({ numberOfColumns: 9 }),
  },
  rightColumn: {
    width: columnToPercentage({ numberOfColumns: 3 }),
  },
  inTodaysEditionContainer: {
    width: "100%",
  },
};

const sharedLandscapeStyles = {
  row: { flex: 1, flexDirection: "row" },
  colSeparatorStyle: {
    borderColor: colours.functional.keyline,
    marginTop: 0,
  },
  container: {
    paddingTop: spacing(4),
  },
  leadContainer: {
    width: columnToPercentage({ numberOfColumns: 6 }),
  },
  supportContainer: {
    width: columnToPercentage({ numberOfColumns: 3 }),
  },
  inTodaysEditionContainer: {
    marginLeft: spacing(2),
    marginBottom: spacing(2),
    width: columnToPercentage({ numberOfColumns: 3 }),
  },
};

const styles = {
  landscape: {
    "1024": {
      ...sharedLandscapeStyles,
      inTodaysEditionContainer: {
        ...sharedLandscapeStyles.inTodaysEditionContainer,
      },
    },
    "1080": {
      ...sharedLandscapeStyles,
    },
    "1366": {
      ...sharedLandscapeStyles,
    },
  },
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
        marginBottom: spacing(5),
        marginTop: spacing(2),
      },
    },
  },
};

export const getStyles = (orientation, windowWidth) =>
  getStyleByDeviceSize(styles[orientation], windowWidth);
