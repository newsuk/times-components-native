import { fonts, spacing, colours } from "@times-components-native/styleguide";
import { getStyleByDeviceSize } from "@times-components-native/styleguide/src/styleguide";

const sharedStyles = {
  container: {
    paddingVertical: spacing(3),
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
    fontSize: 13,
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
  container: {
    ...sharedStyles.container,
    paddingHorizontal: spacing(4),
  },
  itemsContainer: {
    flex: 1,
    flexDirection: "row",
  },
  item: {
    flex: 1,
    marginRight: spacing(2),
  },
  itemLast: {
    marginRight: 0,
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
  container: {
    ...sharedStyles.container,
    paddingHorizontal: spacing(3),
  },
  titleContainer: {
    ...sharedStyles.titleContainer,
    paddingBottom: spacing(3),
  },
  heading: {
    ...sharedStyles.heading,
    fontSize: 14,
  },
  item: {
    ...sharedStyles.item,
    marginBottom: spacing(0),
  },
  itemTitle: {
    ...sharedStyles.itemTitle,
    fontSize: 18,
  },
  itemStrapline: {
    ...sharedStyles.itemStrapline,
    fontSize: 14,
    lineHeight: 18,
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: colours.functional.keyline,
    marginBottom: spacing(4),
  },
};

const landscape1080Styles = {
  ...sharedLandscapeStyles,
  container: {
    ...sharedLandscapeStyles.container,
    paddingVertical: spacing(4),
    paddingHorizontal: spacing(6),
  },
  itemsContainer: {
    ...sharedLandscapeStyles.itemsContainer,
    marginTop: spacing(2),
  },
  itemCTAText: {
    ...sharedLandscapeStyles.itemCTAText,
    fontSize: 14,
  },
};

const styles = {
  portrait: {
    768: {
      ...sharedPortraitStyles,
      itemCTA: {
        display: "none",
      },
    },
    810: {
      ...sharedPortraitStyles,
      container: {
        ...sharedPortraitStyles.container,
        paddingHorizontal: spacing(4),
      },
    },
    1024: {
      ...sharedPortraitStyles,
      container: {
        ...sharedPortraitStyles.container,
        paddingVertical: spacing(4),
        paddingHorizontal: spacing(5),
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
      itemCTAText: {
        ...sharedPortraitStyles.itemCTAText,
        fontSize: 14,
      },
      divider: {
        ...sharedPortraitStyles.divider,
        paddingLeft: spacing(2),
        marginRight: 0,
      },
      item: {
        ...sharedPortraitStyles.item,
        marginRight: spacing(1),
      },
    },
  },
  landscape: {
    1024: sharedLandscapeStyles,
    1080: landscape1080Styles,
    1112: {
      ...landscape1080Styles,
      item: {
        ...landscape1080Styles.item,
        marginBottom: spacing(1),
      },
    },
    1366: {
      ...landscape1080Styles,
      container: {
        ...landscape1080Styles.container,
        paddingHorizontal: spacing(4),
      },
      heading: {
        ...landscape1080Styles.heading,
        fontSize: 15,
        lineHeight: 15,
      },
      item: {
        ...landscape1080Styles.item,
        paddingVertical: spacing(2),
      },
      itemTitle: {
        ...landscape1080Styles.itemTitle,
        fontSize: 20,
      },
      itemStrapline: {
        ...landscape1080Styles.itemStrapline,
        fontSize: 15,
        lineHeight: 20,
      },
    },
  },
};

export const getStyles = (orientation, windowWidth) =>
  getStyleByDeviceSize(styles[orientation], windowWidth);
