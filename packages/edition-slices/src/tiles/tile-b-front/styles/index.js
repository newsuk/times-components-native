import {
  fonts,
  spacing,
  globalSpacingStyles,
} from "@times-components-native/styleguide";
import { getStyleByDeviceSize } from "@times-components-native/styleguide/src/styleguide";

const styles = {
  portrait: {
    "768": {
      container: {
        flex: 1,
        padding: spacing(2),
        paddingTop: 0,
      },
      headlinePortrait: {
        fontFamily: fonts.headline,
        fontSize: 11,
        lineHeight: 11,
      },

      imageContainer: {
        width: "100%",
        marginBottom: spacing(2),
      },
      commentSummary: {
        ...globalSpacingStyles.tabletTeaser,
        textAlign: "left",
      },
      summary: {
        ...globalSpacingStyles.tabletTeaser,
        textAlign: "justify",
      },
    },
  },
};

export const getStyle = (orientation, windowWidth) =>
  getStyleByDeviceSize(styles[orientation], windowWidth);
