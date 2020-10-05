import {
  fonts,
  spacing,
  globalSpacingStyles,
  colours,
} from "@times-components-native/styleguide";
import { getStyleByDeviceSize } from "@times-components-native/styleguide/src/styleguide";

const summary = {
  ...globalSpacingStyles.tabletTeaser,
  textAlign: "justify",
};

const strapline = {
  fontFamily: fonts.headlineRegular,
  color: colours.functional.primary,
  fontSize: 24,
  lineHeight: 26,
};

const sharedPortraitStyles = {
  container: {
    paddingBottom: spacing(2),
    paddingRight: spacing(2),
    flex: 1,
  },
  imageContainer: {
    width: "100%",
    marginBottom: spacing(2),
  },
};

const styles = {
  portrait: {
    768: {
      ...sharedPortraitStyles,
      headline: {
        ...globalSpacingStyles.tabletHeadline,
        fontFamily: fonts.headline,
        fontSize: 42,
        lineHeight: 42,
        marginBottom: spacing(1),
      },
      strapline: {
        ...strapline,
      },
      summary: {
        ...summary,
        fontSize: 14,
        lineHeight: 18,
      },
    },
    810: {
      ...sharedPortraitStyles,
      headline: {
        ...globalSpacingStyles.tabletHeadline,
        fontFamily: fonts.headline,
        fontSize: 45,
        lineHeight: 45,
        marginBottom: spacing(1),
      },
      strapline: {
        ...strapline,
      },
      summary: {
        ...summary,
        fontSize: 14,
        lineHeight: 8,
      },
    },
    1024: {
      ...sharedPortraitStyles,
      imageContainer: {
        ...sharedPortraitStyles.imageContainer,
        marginBottom: spacing(3),
      },
      headline: {
        ...globalSpacingStyles.tabletHeadline,
        fontFamily: fonts.headline,
        fontSize: 55,
        lineHeight: 55,
        marginBottom: spacing(4),
      },
      strapline: {
        ...strapline,
      },
      summary: {
        ...summary,
        fontSize: 15,
        lineHeight: 18,
      },
    },
  },
};

export const getStyle = (orientation, windowWidth) =>
  getStyleByDeviceSize(styles[orientation], windowWidth);
