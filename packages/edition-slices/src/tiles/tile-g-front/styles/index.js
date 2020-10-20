import {
  fonts,
  spacing,
  globalSpacingStyles,
} from "@times-components-native/styleguide";
import { getStyleByDeviceSize } from "@times-components-native/styleguide/src/styleguide";

const sharedHeadline = {
  ...globalSpacingStyles.tabletHeadline,
  fontFamily: fonts.headline,
};

const sharedSummary = {
  ...globalSpacingStyles.tabletTeaser,
  fontSize: 14,
  lineHeight: 20,
};

const sharedStyles = {
  imageContainer: {
    width: "100%",
    marginBottom: spacing(1),
  },
  summary: { ...sharedSummary },
  bylineMarginBottom: spacing(3),
};

const sharedLandscapeStyles = {
  ...sharedStyles,
  container: {
    paddingLeft: spacing(2),
    paddingRight: spacing(2),
    flex: 1,
  },
  headlineMarginBottom: spacing(1),
};

const sharedPortraitStyles = {
  ...sharedStyles,
  container: {
    paddingLeft: spacing(2),
    flex: 1,
  },
  headlineMarginBottom: spacing(2),
};

const styles = {
  landscape: {
    "1024": {
      ...sharedLandscapeStyles,
      headline: {
        ...sharedHeadline,
        fontSize: 22,
        lineHeight: 22,
      },
    },
    "1080": {
      ...sharedLandscapeStyles,
      headline: {
        ...sharedHeadline,
        fontSize: 25,
        lineHeight: 25,
      },
    },
    "1112": {
      ...sharedLandscapeStyles,
      headline: {
        ...sharedHeadline,
        fontSize: 25,
        lineHeight: 25,
      },
    },
    "1194": {
      ...sharedLandscapeStyles,
      headline: {
        ...sharedHeadline,
        fontSize: 24,
        lineHeight: 24,
      },
    },
    "1366": {
      ...sharedLandscapeStyles,
      headline: {
        ...sharedHeadline,
        fontSize: 35,
        lineHeight: 35,
      },
      headlineMarginBottom: spacing(2),
      summary: {
        ...sharedSummary,
        fontSize: 15,
      },
    },
  },
  portrait: {
    "768": {
      ...sharedPortraitStyles,
      headline: {
        ...sharedHeadline,
        fontSize: 28,
        lineHeight: 28,
      },
    },
    "810": {
      ...sharedPortraitStyles,
      headline: {
        ...sharedHeadline,
        fontSize: 28,
        lineHeight: 28,
      },
    },
    "834": {
      ratios: {
        0: {
          ...sharedPortraitStyles,
          headline: {
            ...sharedHeadline,
            fontSize: 30,
            lineHeight: 30,
          },
          imageContainer: {
            width: "100%",
            marginBottom: spacing(2),
          },
          headlineMarginBottom: spacing(3),
        },
        0.75: {
          ...sharedPortraitStyles,
          headline: {
            ...sharedHeadline,
            fontSize: 30,
            lineHeight: 30,
          },
        },
      },
    },
    "1024": {
      ...sharedPortraitStyles,
      imageContainer: {
        width: "100%",
        marginBottom: spacing(2),
      },
      headline: {
        ...sharedHeadline,
        fontSize: 40,
        lineHeight: 40,
      },
      headlineMarginBottom: spacing(3),
      summary: {
        ...sharedSummary,
        fontSize: 15,
      },
    },
  },
};

export const getStyle = (orientation, windowWidth, windowHeight) =>
  getStyleByDeviceSize(styles[orientation], windowWidth, windowHeight);
