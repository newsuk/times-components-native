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

const headline = {
  ...globalSpacingStyles.tabletHeadline,
  fontFamily: fonts.headline,
  marginBottom: spacing(2),
};

const headlinePortrait = {
  ...headline,
  marginBottom: spacing(4),
};

const sharedStyles = {
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

const portrait834 = {
  ...sharedStyles,
  summary: {
    ...summary,
    fontSize: 14,
    lineHeight: 18,
  },
};

const styles = {
  landscape: {
    "1024": {
      ...sharedStyles,
      headline: {
        ...headline,
        fontSize: 42,
        lineHeight: 42,
      },
    },
    "1080": {
      ...sharedStyles,
      headline: {
        ...headline,
        fontSize: 45,
        lineHeight: 45,
      },
    },
    "1112": {
      ...sharedStyles,
      headline: {
        ...headline,
        fontSize: 45,
        lineHeight: 45,
        marginBottom: spacing(3),
      },
    },
    "1366": {
      ...sharedStyles,
      headline: {
        ...headline,
        fontSize: 55,
        lineHeight: 55,
        marginBottom: spacing(3),
      },
    },
  },
  portrait: {
    "768": {
      ...sharedStyles,
      headline: {
        ...headlinePortrait,
        fontSize: 42,
        lineHeight: 42,
      },
      summary: {
        ...summary,
        fontSize: 14,
        lineHeight: 18,
      },
    },
    "810": {
      ...sharedStyles,
      headline: {
        ...headlinePortrait,
        fontSize: 45,
        lineHeight: 45,
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
            fontSize: 48,
            lineHeight: 48,
          },
        },
        0.75: {
          ...portrait834,
          headline: {
            ...headlinePortrait,
            fontSize: 45,
            lineHeight: 45,
          },
        },
      },
    },
    "1024": {
      ...sharedStyles,
      imageContainer: {
        ...sharedStyles.imageContainer,
        marginBottom: spacing(3),
      },
      headline: {
        ...headlinePortrait,
        fontSize: 55,
        lineHeight: 55,
      },
      summary: {
        ...summary,
        fontSize: 15,
        lineHeight: 18,
      },
    },
  },
};

export const getStyle = (orientation, windowWidth, windowHeight) =>
  getStyleByDeviceSize(styles[orientation], windowWidth, windowHeight);
