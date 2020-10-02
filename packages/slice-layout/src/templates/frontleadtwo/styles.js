import {
  columnToPercentage,
  colours,
  getStyleByDeviceSize,
  spacing,
} from "@times-components-native/styleguide";

const calculateStyles = (orientation) => {
  const columnToPercentageWithOrientation = columnToPercentage(orientation);

  const container = {
    flex: 1,
    flexDirection: "column",
  };

  const inTodaysEditionContainerPortrait = {
    width: "100%",
    marginTop: spacing(2),
  };

  const sharedStyles = {
    colSeparatorStyle: {
      marginVertical: 0,
      borderColor: colours.functional.darkGrey,
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
    lead1Container: {
      width: columnToPercentageWithOrientation({ numberOfColumns: 4 }),
    },
    lead2Container: {
      width: columnToPercentageWithOrientation({ numberOfColumns: 8 }),
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
          paddingBottom: spacing(6),
        },
      },
      "1194": {
        ...sharedLandscapeStyles,
        container: {
          ...container,
          paddingTop: spacing(3),
          paddingBottom: spacing(3),
        },
      },
      "1366": {
        ...sharedLandscapeStyles,
        container: {
          ...container,
          paddingTop: spacing(4),
          paddingBottom: spacing(5),
        },
        inTodaysEditionContainer: {
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
        container: {
          ...container,
          paddingTop: spacing(2),
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
          ...container,
          paddingTop: spacing(2),
          paddingBottom: spacing(3),
        },
        inTodaysEditionContainer: {
          ...inTodaysEditionContainerPortrait,
          height: 148,
        },
      },
      "834": {
        ...sharedPortraitStyles,
        container: {
          ...container,
          paddingTop: spacing(3),
          paddingBottom: spacing(4),
        },
        inTodaysEditionContainer: {
          ...inTodaysEditionContainerPortrait,
          height: 148,
        },
      },
      "1024": {
        ...sharedPortraitStyles,
        container: {
          ...container,
          paddingTop: spacing(6),
          paddingBottom: spacing(6),
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

export const getStyles = (orientation, windowWidth) =>
  getStyleByDeviceSize(calculateStyles(orientation), windowWidth);
