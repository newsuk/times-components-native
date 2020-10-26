import {
  columnToPercentage,
  colours,
  getStyleByDeviceSize,
  spacing,
} from "@times-components-native/styleguide";

const calculateStyles = (orientation) => {
  const columnToPercentageWithOrientation = columnToPercentage(orientation);

  const sharedPortraitStyles = {
    colSeparatorStyle: {
      borderColor: colours.functional.keyline,
      marginTop: 0,
    },
    container: {
      flex: 1,
      flexDirection: "column",
      marginHorizontal: spacing(6),
      marginTop: spacing(3),
      marginBottom: spacing(4),
    },
    row: {
      flex: 1,
      flexDirection: "row",
    },
    leadContainer: {
      width: columnToPercentageWithOrientation({ numberOfColumns: 9 }),
    },
    supportContainer: {
      width: columnToPercentageWithOrientation({ numberOfColumns: 3 }),
    },
    inTodaysEditionContainer: {
      width: "100%",
      marginTop: spacing(3),
    },
  };

  const sharedLandscapeStyles = {
    row: {
      flex: 1,
      flexDirection: "row",
    },
    colSeparatorStyle: {
      borderColor: colours.functional.keyline,
      marginVertical: 0,
    },
    container: {
      marginTop: spacing(3),
      marginBottom: spacing(3),
    },
    leadContainer: {
      width: columnToPercentageWithOrientation({ numberOfColumns: 6 }),
    },
    supportContainer: {
      width: columnToPercentageWithOrientation({ numberOfColumns: 3 }),
    },
    inTodaysEditionContainer: {
      marginLeft: spacing(2),
      width: columnToPercentageWithOrientation({ numberOfColumns: 3 }),
    },
  };

  const styles = {
    landscape: {
      "1024": {
        ...sharedLandscapeStyles,
      },
      "1080": {
        ...sharedLandscapeStyles,
        container: {
          ...sharedLandscapeStyles.container,
          marginBottom: spacing(4),
        },
      },
      "1112": {
        ...sharedLandscapeStyles,
      },
      "1194": {
        ...sharedLandscapeStyles,
        container: {
          ...sharedLandscapeStyles.container,
          marginBottom: spacing(4),
        },
      },
      "1366": {
        ...sharedLandscapeStyles,
        container: {
          marginTop: spacing(4),
          marginBottom: spacing(4),
        },
        leadContainer: {
          width: columnToPercentageWithOrientation({
            numberOfColumns: 7,
            totalColumns: 11,
          }),
        },
        supportContainer: {
          width: columnToPercentageWithOrientation({
            numberOfColumns: 2,
            totalColumns: 11,
          }),
        },
        inTodaysEditionContainer: {
          ...sharedLandscapeStyles.inTodaysEditionContainer,
          width: columnToPercentageWithOrientation({
            numberOfColumns: 2,
            totalColumns: 11,
          }),
        },
      },
    },
    portrait: {
      "768": {
        ...sharedPortraitStyles,
        inTodaysEditionContainer: {
          ...sharedPortraitStyles.inTodaysEditionContainer,
          height: 133,
        },
      },
      "810": {
        ...sharedPortraitStyles,
        container: {
          ...sharedPortraitStyles.container,
          marginBottom: spacing(3),
        },
        inTodaysEditionContainer: {
          ...sharedPortraitStyles.inTodaysEditionContainer,
          height: 148,
          marginTop: spacing(4),
        },
      },
      "834": {
        ...sharedPortraitStyles,
        container: {
          ...sharedPortraitStyles.container,
          marginBottom: spacing(3),
        },
        inTodaysEditionContainer: {
          ...sharedPortraitStyles.inTodaysEditionContainer,
          height: 148,
        },
      },
      "1024": {
        ...sharedPortraitStyles,
        container: {
          ...sharedPortraitStyles.container,
          marginTop: spacing(4),
        },
        inTodaysEditionContainer: {
          ...sharedPortraitStyles.inTodaysEditionContainer,
          height: 174,
        },
      },
    },
  };

  return styles[orientation];
};

export const getStyles = (orientation, windowWidth) =>
  getStyleByDeviceSize(calculateStyles(orientation), windowWidth);
