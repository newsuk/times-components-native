import {
  colours,
  fonts,
  spacing,
  globalSpacingStyles,
} from "@times-components-native/styleguide";
import { getStyleByDeviceSize } from "@times-components-native/styleguide/src/styleguide";

const sharedHeadline = {
  ...globalSpacingStyles.tabletHeadline,
  fontFamily: fonts.headline,
};

const sharedStrapline = {
  fontFamily: fonts.headlineRegular,
  color: colours.functional.primary,
};

const sharedSummary = {
  ...globalSpacingStyles.tabletTeaser,
  fontSize: 14,
  lineHeight: 20,
};

const sharedStyles = {
  summary: { ...sharedSummary },
  bylineMarginBottom: spacing(3),
  headlineMarginBottom: spacing(2),
  straplineMarginBottom: spacing(3),
};

const sharedLandscapeStyles = {
  ...sharedStyles,
  container: {
    paddingBottom: 0,
    paddingRight: spacing(2),
    flex: 1,
  },
};

const sharedPortraitStyles = {
  ...sharedStyles,
  container: {
    paddingBottom: 0,
    paddingRight: spacing(2),
    flex: 1,
  },
};

const styles = {
  landscape: {
    "1024": {
      ...sharedLandscapeStyles,
      headline: {
        ...sharedHeadline,
        fontSize: 42,
        lineHeight: 42,
      },
      strapline: {
        ...sharedStrapline,
        fontSize: 20,
        lineHeight: 20,
      },
    },
    "1080": {
      ...sharedLandscapeStyles,
      headline: {
        ...sharedHeadline,
        fontSize: 45,
        lineHeight: 45,
      },
      strapline: {
        ...sharedStrapline,
        fontSize: 22,
        lineHeight: 22,
      },
    },
    "1112": {
      ...sharedLandscapeStyles,
      headline: {
        ...sharedHeadline,
        fontSize: 45,
        lineHeight: 45,
      },
      strapline: {
        ...sharedStrapline,
        fontSize: 22,
        lineHeight: 22,
      },
    },
    "1194": {
      ...sharedLandscapeStyles,
      headline: {
        ...sharedHeadline,
        fontSize: 48,
        lineHeight: 48,
      },
      strapline: {
        ...sharedStrapline,
        fontSize: 22,
        lineHeight: 22,
      },
    },
    "1366": {
      ...sharedLandscapeStyles,
      headline: {
        ...sharedHeadline,
        fontSize: 55,
        lineHeight: 55,
      },
      headlineMarginBottom: spacing(3),
      strapline: {
        ...sharedStrapline,
        fontSize: 24,
        lineHeight: 24,
      },
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
      strapline: {
        ...sharedStrapline,
        fontSize: 20,
        lineHeight: 20,
      },
    },
    "810": {
      ...sharedPortraitStyles,
      headline: {
        ...sharedHeadline,
        fontSize: 28,
        lineHeight: 28,
      },
      strapline: {
        ...sharedStrapline,
        fontSize: 22,
        lineHeight: 22,
      },
    },
    "834": {
      ...sharedPortraitStyles,
      container: {
        ...sharedPortraitStyles.container,
        paddingBottom: spacing(1),
      },
      headline: {
        ...sharedHeadline,
        fontSize: 30,
        lineHeight: 30,
      },
      strapline: {
        ...sharedStrapline,
        fontSize: 22,
        lineHeight: 22,
      },
    },
    "1024": {
      ...sharedPortraitStyles,
      container: {
        ...sharedPortraitStyles.container,
        paddingBottom: spacing(1),
      },
      headline: {
        ...sharedHeadline,
        fontSize: 40,
        lineHeight: 40,
      },
      strapline: {
        ...sharedStrapline,
        fontSize: 24,
        lineHeight: 24,
      },
      summary: {
        ...sharedSummary,
        fontSize: 15,
      },
    },
  },
};

export const getStyle = (orientation, windowWidth) =>
  getStyleByDeviceSize(styles[orientation], windowWidth);
