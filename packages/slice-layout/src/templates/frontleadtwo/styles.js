import {
  columnToPercentage,
  colours,
  getStyleByDeviceSize,
  spacing,
} from "@times-components-native/styleguide";

const calculateStyles = (orientation, windowWidth) => {
  const columnToPercentageWithOrientation = columnToPercentage(
    orientation,
    windowWidth,
  );

  const container = {
    flex: 1,
    flexDirection: "column",
  };

  const inTodaysEditionContainerPortrait = {
    width: "100%",
    marginTop: spacing(4),
  };

  const sharedStyles = {
    colSeparatorStyle: {
      marginVertical: 0,
      borderColor: colours.functional.keyline,
    },
    horizontalContainer: {
      flex: 1,
      flexDirection: "row",
    },
  };

  const sharedLandscapeStyles = {
    ...sharedStyles,
    lead1Container: {
      width: columnToPercentageWithOrientation({ numberOfColumns: 4 }),
    },
    lead2Container: {
      width: columnToPercentageWithOrientation({
        numberOfColumns: 5,
        numberOfMargins: 2,
      }),
    },
    inTodaysEditionContainer: {
      width: columnToPercentageWithOrientation({ numberOfColumns: 3 }),
      paddingLeft: spacing(2),
    },
  };

  const sharedPortraitStyles = {
    ...sharedStyles,
    container: {
      ...container,
      paddingTop: spacing(3),
    },
    lead1Container: {
      width: columnToPercentageWithOrientation({ numberOfColumns: 5 }),
    },
    lead2Container: {
      width: columnToPercentageWithOrientation({ numberOfColumns: 7 }),
    },
  };

  const styles = {
    landscape: {
      "1024": {
        ...sharedLandscapeStyles,
        container: {
          ...container,
          paddingVertical: spacing(2),
        },
      },
      "1080": {
        ...sharedLandscapeStyles,
        container: {
          ...container,
          paddingTop: spacing(2),
          paddingBottom: spacing(3),
        },
      },
      "1112": {
        ...sharedLandscapeStyles,
        container: {
          ...container,
          paddingTop: spacing(4),
          paddingBottom: spacing(3),
        },
      },
      "1194": {
        ...sharedLandscapeStyles,
        container: {
          ...container,
          paddingTop: spacing(2),
          paddingBottom: spacing(2) - 1,
        },
      },
      "1366": {
        ...sharedLandscapeStyles,
        container: {
          ...container,
          paddingVertical: spacing(4),
        },
        lead1Container: {
          width: columnToPercentageWithOrientation({
            numberOfColumns: 4,
            totalColumns: 11,
          }),
        },
        lead2Container: {
          width: columnToPercentageWithOrientation({
            numberOfColumns: 5,
            totalColumns: 11,
            numberOfMargins: 2,
          }),
        },
        inTodaysEditionContainer: {
          width: columnToPercentageWithOrientation({
            numberOfColumns: 2,
            totalColumns: 11,
          }),
          paddingLeft: spacing(2),
        },
      },
    },
    portrait: {
      "768": {
        ...sharedPortraitStyles,
        container: {
          ...sharedPortraitStyles.container,
          paddingBottom: spacing(4),
        },
        inTodaysEditionContainer: {
          ...inTodaysEditionContainerPortrait,
          height: 133,
        },
      },
      "810": {
        ...sharedPortraitStyles,
        container: {
          ...sharedPortraitStyles.container,
          paddingBottom: spacing(3),
        },
        inTodaysEditionContainer: {
          ...inTodaysEditionContainerPortrait,
          marginTop: spacing(3),
          height: 148,
        },
      },
      "834": {
        ratios: {
          0: {
            ...sharedPortraitStyles,
            container: {
              ...sharedPortraitStyles.container,
              paddingBottom: spacing(4),
            },
            inTodaysEditionContainer: {
              ...inTodaysEditionContainerPortrait,
              marginTop: spacing(4),
              height: 148,
            },
          },
          0.75: {
            ...sharedPortraitStyles,
            container: {
              ...sharedPortraitStyles.container,
              paddingBottom: spacing(4),
            },
            inTodaysEditionContainer: {
              ...inTodaysEditionContainerPortrait,
              marginTop: spacing(7),
              height: 148,
            },
          },
        },
      },
      "1024": {
        ...sharedPortraitStyles,
        container: {
          ...sharedPortraitStyles.container,
          paddingVertical: spacing(4),
        },
        inTodaysEditionContainer: {
          ...inTodaysEditionContainerPortrait,
          height: 174,
        },
      },
    },
  };

  return styles[orientation];
};

export const getStyles = (orientation, windowWidth, windowHeight) =>
  getStyleByDeviceSize(
    calculateStyles(orientation, windowWidth),
    windowWidth,
    windowHeight,
  );
