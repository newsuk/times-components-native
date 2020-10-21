import {
  columnToPercentage,
  getStyleByDeviceSize,
  spacing,
} from "@times-components-native/styleguide";

const calculateStyles = (orientation) => {
  const columnToPercentageWithOrientation = columnToPercentage(orientation);

  const containerPortrait = { flex: 1, flexDirection: "column" };
  const inTodaysEditionContainerPortrait = {
    marginTop: spacing(2),
  };

  const containerLandscape = { flex: 1 };

  const sharedLandscapeStyles = {
    row: { flex: 1, flexDirection: "row" },
    colSeparatorStyle: { marginVertical: 0 },
    inTodaysEditionContainer: {
      width: columnToPercentageWithOrientation({ numberOfColumns: 3 }),
      marginLeft: spacing(2),
    },
    leadContainer: {
      width: columnToPercentageWithOrientation({ numberOfColumns: 9 }),
    },
  };

  const sharedPortraitStyles = {
    leadContainer: {
      flex: 1,
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
      "1194": {
        ...sharedLandscapeStyles,
        container: {
          ...containerLandscape,
          paddingTop: spacing(2),
          paddingBottom: spacing(3),
        },
      },
      "1366": {
        ...sharedLandscapeStyles,
        container: {
          ...containerLandscape,
          paddingTop: spacing(4),
          paddingBottom: spacing(5),
        },
        inTodaysEditionContainer: {
          width: columnToPercentageWithOrientation({
            numberOfColumns: 2,
            totalColumns: 11,
          }),
          marginLeft: spacing(2),
        },
        leadContainer: {
          width: columnToPercentageWithOrientation({
            numberOfColumns: 9,
            totalColumns: 11,
          }),
        },
      },
    },
    portrait: {
      "768": {
        ...sharedPortraitStyles,
        container: {
          ...containerPortrait,
          paddingTop: spacing(2),
          paddingBottom: spacing(3),
        },
        inTodaysEditionContainer: {
          ...inTodaysEditionContainerPortrait,
          height: 133,
        },
      },
      "810": {
        ...sharedPortraitStyles,
        container: {
          ...containerPortrait,
          paddingVertical: spacing(3),
        },
        inTodaysEditionContainer: {
          ...inTodaysEditionContainerPortrait,
          height: 148,
        },
      },
      "834": {
        ...sharedPortraitStyles,
        container: {
          ...containerPortrait,
          paddingTop: spacing(3),
          paddingBottom: spacing(4),
        },
        inTodaysEditionContainer: {
          ...inTodaysEditionContainerPortrait,
          height: 148,
        },
      },
      1024: {
        ...sharedPortraitStyles,
        container: {
          ...containerPortrait,
          paddingTop: spacing(4),
          paddingBottom: spacing(4),
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
