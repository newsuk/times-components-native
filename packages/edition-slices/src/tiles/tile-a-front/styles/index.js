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

const styles = {
  portrait: {
    "768": {
      container: {
        paddingRight: spacing(2),
        paddingBottom: spacing(2),
        flex: 1,
      },
      headline: {
        ...globalSpacingStyles.tabletHeadline,
        fontFamily: fonts.headline,
        fontSize: 42,
        lineHeight: 42,
      },
      strapline: {
        fontFamily: fonts.headlineRegular,
        color: colours.functional.primary,
        fontSize: 24,
        lineHeight: 26,
      },
      imageContainer: {
        width: "100%",
        marginBottom: spacing(2),
      },
      summary: {
        ...summary,
        fontSize: 14,
        lineHeight: 28,
      },
    },
  },
};

export const getStyle = (orientation, windowWidth) =>
  getStyleByDeviceSize(styles[orientation], windowWidth);
