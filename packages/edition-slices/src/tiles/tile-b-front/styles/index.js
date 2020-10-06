import {
  fonts,
  spacing,
  globalSpacingStyles,
} from "@times-components-native/styleguide";
import { getStyleByDeviceSize } from "@times-components-native/styleguide/src/styleguide";

const summary = {
  ...globalSpacingStyles.tabletTeaser,
  textAlign: "justify",
};

const commentSummary = {
  ...summary,
  textAlign: "left",
};

const sharedLandscapeStyles = {
  container: {
    flex: 1,
    padding: spacing(2),
    paddingTop: 0,
  },
  imageContainer: {
    width: "100%",
    marginBottom: spacing(2),
  },
};

const sharedPortraitStyles = {
  container: {
    flex: 1,
    padding: spacing(2),
    paddingTop: 0,
  },
  imageContainer: {
    width: "100%",
    marginBottom: spacing(2),
  },
};

const styles = {
  landscape: {
    1024: {
      ...sharedLandscapeStyles,
      headline: {
        ...globalSpacingStyles.tabletHeadline,
        fontFamily: fonts.headline,
        fontSize: 22,
        lineHeight: 22,
        marginBottom: spacing(2),
      },
      summary: {
        ...summary,
        fontSize: 14,
        lineHeight: 20,
      },
    },
  },
  portrait: {
    768: {
      ...sharedPortraitStyles,
      headline: {
        fontFamily: fonts.headline,
        fontSize: 22,
        lineHeight: 22,
      },
      summary: {
        ...summary,
        fontSize: 14,
        lineHeight: 18,
      },
      commentSummary: {
        ...commentSummary,
        fontSize: 14,
        lineHeight: 18,
      },
    },
    1024: {
      ...sharedPortraitStyles,
      headline: {
        fontFamily: fonts.headline,
        fontSize: 26,
        lineHeight: 26,
        marginBottom: spacing(3),
      },
      summary: {
        ...summary,
        fontSize: 15,
        lineHeight: 18,
      },
      commentSummary: {
        ...commentSummary,
        fontSize: 15,
        lineHeight: 18,
      },
    },
  },
};

export const getStyle = (orientation, windowWidth) =>
  getStyleByDeviceSize(styles[orientation], windowWidth);
