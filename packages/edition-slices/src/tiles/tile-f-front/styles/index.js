import {
  fonts,
  spacing,
  globalSpacingStyles,
  colours,
} from "@times-components-native/styleguide";
import { getStyleByDeviceSize } from "@times-components-native/styleguide/src/styleguide";

const headline = {
  ...globalSpacingStyles.tabletHeadline,
  fontFamily: fonts.headline,
};

const summary = {
  ...globalSpacingStyles.tabletTeaser,
  textAlign: "justify",
};

const strapline = {
  fontFamily: fonts.headlineRegular,
  color: colours.functional.primary,
};

const sharedLandscapeStyles = {
  container: {
    paddingBottom: spacing(2),
    paddingRight: spacing(2),
    flex: 1,
  },
  imageContainer: {
    width: "100%",
    marginBottom: spacing(1),
  },
  summary: {
    ...summary,
    fontSize: 14,
    lineHeight: 18,
  },
  straplineMarginBottom: spacing(3),
  headlineMarginBottom: spacing(2),
  bylineMarginBottom: spacing(3),
};

const sharedPortraitStyles = {
  container: {
    paddingBottom: 0,
    flex: 1,
    flexDirection: "column",
  },
  headlineMarginBottom: spacing(1),
  straplineMarginBottom: spacing(3),
  bylineMarginBottom: 0,
};

const styles = {
  landscape: {
    "1024": {
      ...sharedLandscapeStyles,
      headline: {
        ...headline,
        fontSize: 40,
        lineHeight: 40,
      },
      strapline: {
        ...strapline,
        fontSize: 24,
        lineHeight: 24,
      },
    },
    "1080": {
      ...sharedLandscapeStyles,
      headline: {
        ...headline,
        fontSize: 45,
        lineHeight: 45,
      },
      strapline: {
        ...strapline,
        fontSize: 24,
        lineHeight: 24,
      },
    },
    "1194": {
      ...sharedLandscapeStyles,
      headline: {
        ...headline,
        fontSize: 50,
        lineHeight: 50,
      },
      strapline: {
        ...strapline,
        fontSize: 24,
        lineHeight: 24,
      },
    },
    "1366": {
      ...sharedLandscapeStyles,
      imageContainer: {
        width: "100%",
        marginBottom: spacing(3),
      },
      headline: {
        ...headline,
        fontSize: 55,
        lineHeight: 55,
      },
      strapline: {
        ...strapline,
        fontSize: 26,
        lineHeight: 26,
      },
    },
  },
  portrait: {
    "768": {
      ...sharedPortraitStyles,
      headline: {
        ...headline,
        fontSize: 42,
        lineHeight: 42,
      },
      imageContainer: {
        width: "100%",
        marginBottom: spacing(1),
      },
      strapline: {
        ...strapline,
        fontSize: 24,
        lineHeight: 24,
      },
      straplineMarginBottom: spacing(2),
      summary: {
        ...summary,
        fontSize: 14,
        lineHeight: 18,
      },
    },
    "810": {
      ...sharedPortraitStyles,
      headline: {
        ...headline,
        fontSize: 45,
        lineHeight: 45,
      },
      imageContainer: {
        width: "100%",
        marginBottom: spacing(2),
      },
      strapline: {
        ...strapline,
        fontSize: 24,
        lineHeight: 24,
      },
      straplineMarginBottom: spacing(3),
      summary: {
        ...summary,
        fontSize: 14,
        lineHeight: 18,
      },
    },
    "834": {
      ...sharedPortraitStyles,
      headline: {
        ...headline,
        fontSize: 45,
        lineHeight: 45,
      },
      imageContainer: {
        width: "100%",
        marginBottom: spacing(2),
      },
      strapline: {
        ...strapline,
        fontSize: 24,
        lineHeight: 24,
      },
      straplineMarginBottom: spacing(3),
      summary: {
        ...summary,
        fontSize: 14,
        lineHeight: 18,
      },
    },
    "1024": {
      ...sharedPortraitStyles,
      headline: {
        ...headline,
        fontSize: 55,
        lineHeight: 55,
      },
      imageContainer: {
        width: "100%",
        marginBottom: spacing(2),
      },
      strapline: {
        ...strapline,
        fontSize: 30,
        lineHeight: 30,
      },
      straplineMarginBottom: spacing(5),
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
