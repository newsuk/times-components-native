import { fonts, spacing, colours } from "@times-components-native/styleguide";

import { getStyleByDeviceSize } from "@times-components-native/styleguide/src/styleguide";

const sharedStyles = {
  container: {
    padding: spacing(3),
    backgroundColor: colours.functional.buff,
    flex: 1,
  },
  titleContainer: {
    marginBottom: spacing(2),
    borderBottomWidth: 1,
    borderBottomColor: colours.functional.keyline,
    paddingBottom: 2,
  },
  heading: {
    fontSize: 13,
    fontFamily: fonts.bodyRegular,
    letterSpacing: 1,
    color: colours.functional.brandColour,
  },
  itemsContainer: {
    flex: 1,
  },
  item: {
    flex: 1,
    marginRight: spacing(2),
  },
  itemTitle: {
    fontSize: 16,
    fontFamily: fonts.headline,
    color: colours.functional.brandColour,
    marginBottom: spacing(1),
  },
  itemStrapline: {
    fontSize: 13,
    lineHeight: 16,
    fontFamily: fonts.bodyRegular,
    color: colours.functional.brandColour,
    marginBottom: spacing(2),
  },
  itemCTA: {
    flexDirection: "row",
  },
  itemCTAText: {
    fontSize: 14,
    fontFamily: fonts.supporting,
    color: colours.functional.red,
    textDecorationLine: "none",
    marginBottom: spacing(3),
  },
  itemCTAIconContainer: {
    marginLeft: spacing(1),
    marginTop: 2,
  },
};

const sharedPortraitStyles = {
  ...sharedStyles,
  itemsContainer: {
    ...sharedStyles.itemsContainer,
    flexDirection: "row",
  },
  divider: {
    paddingLeft: spacing(2),
    borderColor: colours.functional.keyline,
    borderLeftWidth: 1,
    marginHorizontal: spacing(1),
  },
};

const sharedLandscapeStyles = {
  ...sharedStyles,
  divider: {
    borderBottomWidth: 1,
    borderColor: colours.functional.keyline,
    marginBottom: spacing(4),
  },
};

const styles = {
  portrait: {
    "768": {
      ...sharedPortraitStyles,
      itemCTAText: {
        display: "none",
      },
    },
    "810": {
      ...sharedPortraitStyles,
      container: {
        ...sharedPortraitStyles.container,
        paddingLeft: spacing(4),
        paddingRight: spacing(4),
      },
    },
    "1024": {
      ...sharedPortraitStyles,
      container: {
        ...sharedPortraitStyles.container,
        paddingVertical: spacing(4),
        paddingLeft: spacing(5),
        paddingRight: spacing(5),
      },
      heading: {
        ...sharedPortraitStyles.heading,
        fontSize: 16,
      },
      itemsContainer: {
        ...sharedPortraitStyles.itemsContainer,
        marginTop: spacing(2),
      },
      itemTitle: {
        ...sharedPortraitStyles.itemTitle,
        fontSize: 20,
      },
      itemStrapline: {
        ...sharedPortraitStyles.itemStrapline,
        fontSize: 15,
        lineHeight: 20,
      },
    },
  },
  landscape: {
    "768": {
      ...sharedLandscapeStyles,
    },
    "810": {
      ...sharedLandscapeStyles,
    },
    "834": {
      ...sharedLandscapeStyles,
    },
    "1024": {
      ...sharedLandscapeStyles,
    },
  },
};

export const getStyles = (orientation, windowWidth) =>
  getStyleByDeviceSize(styles[orientation], windowWidth);
