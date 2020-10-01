import {
  columnToPercentage,
  colours,
  editionBreakpoints,
  getStyleByDeviceSize,
  spacing,
} from "@times-components-native/styleguide";

const container = {
  flex: 1,
  flexDirection: "column",
};

const sharedStyles = {
  colSeparatorStyle: {
    marginVertical: 0,
    borderColor: colours.functional.darkGrey,
  },
  horizontalContainer: { flex: 1, flexDirection: "row" },
};

const sharedLandscapeStyles = {
  ...sharedStyles,
  lead1Container: {
    width: columnToPercentage({ numberOfColumns: 4 }),
  },
  lead2Container: {
    width: columnToPercentage({ numberOfColumns: 5 }),
  },
  inTodaysEditionContainer: {
    width: columnToPercentage({ numberOfColumns: 3 }),
    marginLeft: spacing(2),
    backgroundColor: "#f0eedf", // REMOVE BEFORE COMMITTING
  },
};

const sharedPortraitStyles = {
  ...sharedStyles,
  lead1Container: {
    width: columnToPercentage({ numberOfColumns: 4 }),
  },
  lead2Container: {
    width: columnToPercentage({ numberOfColumns: 8 }),
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
        width: columnToPercentage({ numberOfColumns: 2, totalColumns: 11 }),
        marginLeft: spacing(2),
        backgroundColor: "#f0eedf", // REMOVE BEFORE COMMITTING
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
        height: 133,
        width: "100%",
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
        height: 148,
        width: "100%",
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
        height: 148,
        width: "100%",
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
        height: 174,
        width: "100%",
      },
    },
  },
};

export default (breakpoint) => stylesResolver[breakpoint];

export const getStyles = (orientation, windowWidth) =>
  getStyleByDeviceSize(styles[orientation], windowWidth);
