import {
  fonts,
  spacing,
  globalSpacingStyles,
} from "@times-components-native/styleguide";
import { getStyleByDeviceSize } from "@times-components-native/styleguide/src/styleguide";

const summary = {
  ...globalSpacingStyles.tabletTeaser,
};

const headlineLandscape = {
  ...globalSpacingStyles.tabletHeadline,
  fontFamily: fonts.headline,
};

const headlinePortrait = {
  ...globalSpacingStyles.tabletHeadline,
  fontFamily: fonts.headline,
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
  headlineMarginBottom: spacing(2),
  bylineMarginBottom: spacing(2),
};

const sharedPortraitStyles = {
  container: {
    flex: 1,
    paddingLeft: spacing(2),
    paddingBottom: spacing(2),
  },
  imageContainer: {
    width: "100%",
    marginBottom: spacing(1),
  },
  headlineMarginBottom: spacing(3),
  bylineMarginBottom: spacing(3),
};

const portrait834 = {
  ...sharedPortraitStyles,
  summary: {
    ...summary,
    fontSize: 14,
    lineHeight: 18,
  },
};

const styles = {
  landscape: {
    "1024": {
      ...sharedLandscapeStyles,
      headline: {
        ...headlineLandscape,
        fontSize: 22,
        lineHeight: 22,
      },
      summary: {
        ...summary,
        fontSize: 14,
        lineHeight: 20,
      },
    },
    "1080": {
      ...sharedLandscapeStyles,
      headline: {
        ...headlineLandscape,
        fontSize: 25,
        lineHeight: 25,
      },
      summary: {
        ...summary,
        fontSize: 14,
        lineHeight: 20,
      },
    },
    "1366": {
      ...sharedLandscapeStyles,
      headline: {
        ...headlineLandscape,
        fontSize: 25,
        lineHeight: 25,
      },
      summary: {
        ...summary,
        fontSize: 15,
        lineHeight: 20,
      },
    },
  },
  portrait: {
    "768": {
      ...sharedPortraitStyles,
      headline: {
        ...headlinePortrait,
        fontSize: 22,
        lineHeight: 22,
      },
      summary: {
        ...summary,
        fontSize: 14,
        lineHeight: 18,
      },
    },
    "834": {
      ratios: {
        0: {
          ...portrait834,
          headline: {
            ...headlinePortrait,
            fontSize: 24,
            lineHeight: 24,
          },
        },
        0.75: {
          ...portrait834,
          headline: {
            ...headlinePortrait,
            fontSize: 22,
            lineHeight: 22,
          },
        },
      },
    },
    "1024": {
      ...sharedPortraitStyles,
      imageContainer: {
        ...sharedPortraitStyles.imageContainer,
        marginBottom: spacing(2),
      },
      headline: {
        ...headlinePortrait,
        fontSize: 26,
        lineHeight: 26,
      },
      summary: {
        fontSize: 15,
        lineHeight: 18,
      },
    },
  },
};

export const getStyle = (orientation, windowWidth, windowHeight) =>
  getStyleByDeviceSize(styles[orientation], windowWidth, windowHeight);
