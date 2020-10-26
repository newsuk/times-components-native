import {
  fonts,
  spacing,
  globalSpacingStyles,
  colours,
} from "@times-components-native/styleguide";
import { getStyleByDeviceSize } from "@times-components-native/styleguide/src/styleguide";

const summary = {
  ...globalSpacingStyles.tabletTeaser,
};

const headline = {
  ...globalSpacingStyles.tabletHeadline,
  fontFamily: fonts.headline,
};

const strapline = {
  fontFamily: fonts.headlineRegular,
  color: colours.functional.primary,
  fontSize: 24,
  lineHeight: 24,
};

const sharedStyles = {
  container: {
    paddingBottom: spacing(0),
    paddingRight: spacing(2),
    flex: 1,
  },
  summary: {
    ...summary,
    fontSize: 14,
    lineHeight: 18,
  },
  strapline,
};

const sharedLandscapeStyles = {
  ...sharedStyles,
  summaryContainer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: colours.functional.white,
    width: "100%",
    paddingTop: spacing(2),
  },
  headlineMarginBottom: spacing(2),
  straplineMarginTop: spacing(2),
  straplineMarginBottom: spacing(3),
  bylineMarginBottom: spacing(3),
  imageContainer: {
    width: "100%",
    marginBottom: 0,
  },
  summary: {
    ...summary,
    fontSize: 14,
    lineHeight: 20,
  },
};

const sharedPortraitStyles = {
  ...sharedStyles,
  headlineMarginBottom: spacing(4),
  straplineMarginTop: spacing(2),
  straplineMarginBottom: spacing(3),
  bylineMarginBottom: 0,
  imageContainer: {
    width: "100%",
    marginBottom: spacing(2),
  },
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
      headlineMarginBottom: spacing(2),
      straplineMarginTop: spacing(2),
      straplineMarginBottom: spacing(3),
      headline: {
        ...headline,
        fontSize: 42,
        lineHeight: 42,
      },
    },
    "1080": {
      ...sharedLandscapeStyles,
      headlineMarginBottom: spacing(3),
      straplineMarginTop: spacing(2),
      straplineMarginBottom: spacing(3),
      headline: {
        ...headline,
        fontSize: 45,
        lineHeight: 45,
      },
    },
    "1112": {
      ...sharedLandscapeStyles,
      headlineMarginBottom: spacing(3),
      straplineMarginTop: spacing(2),
      straplineMarginBottom: spacing(3),
      headline: {
        ...headline,
        fontSize: 45,
        lineHeight: 45,
      },
    },
    "1366": {
      ...sharedLandscapeStyles,
      headlineMarginBottom: spacing(3),
      straplineMarginTop: spacing(2),
      straplineMarginBottom: spacing(3),
      headline: {
        ...headline,
        fontSize: 55,
        lineHeight: 55,
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
        ...headline,
        fontSize: 42,
        lineHeight: 42,
      },
    },
    "810": {
      ...sharedPortraitStyles,
      headline: {
        ...headline,
        fontSize: 45,
        lineHeight: 45,
      },
    },
    "834": {
      ratios: {
        0: {
          ...portrait834,
          headline: {
            ...headline,
            fontSize: 48,
            lineHeight: 48,
          },
        },
        0.75: {
          ...portrait834,
          headline: {
            ...headline,
            fontSize: 45,
            lineHeight: 45,
          },
        },
      },
    },
    "1024": {
      ...sharedPortraitStyles,
      imageContainer: {
        ...sharedPortraitStyles.imageContainer,
        marginBottom: spacing(3),
      },
      headline: {
        ...headline,
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
