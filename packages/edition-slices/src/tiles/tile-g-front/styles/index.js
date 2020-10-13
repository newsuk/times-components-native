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
  bylineContainerStyle: { marginBottom: spacing(3) },
};

const sharedLandscapeStyles = {
  ...sharedStyles,
  container: {
    paddingBottom: spacing(2),
    paddingLeft: spacing(2),
    paddingRight: spacing(2),
    flex: 1,
  },
};

const sharedPortraitStyles = {
  ...sharedStyles,
  container: {
    paddingBottom: spacing(2),
    paddingLeft: spacing(2),
    flex: 1,
  },
};

const styles = {
  landscape: {
    "1024": {
      ...sharedLandscapeStyles,
      headline: {
        ...sharedHeadline,
        fontSize: 22,
        lineHeight: 22,
        marginBottom: spacing(1),
      },
    },
    "1080": {
      ...sharedLandscapeStyles,
      headline: {
        ...sharedHeadline,
        fontSize: 25,
        lineHeight: 25,
        marginBottom: spacing(1),
      },
    },
    "1112": {
      ...sharedLandscapeStyles,
      headline: {
        ...sharedHeadline,
        fontSize: 25,
        lineHeight: 25,
        marginBottom: spacing(1),
      },
    },
    "1194": {
      ...sharedLandscapeStyles,
      headline: {
        ...sharedHeadline,
        fontSize: 25,
        lineHeight: 25,
        marginBottom: spacing(1),
      },
    },
    "1366": {
      ...sharedLandscapeStyles,
      headline: {
        ...sharedHeadline,
        fontSize: 35,
        lineHeight: 35,
        marginBottom: spacing(3),
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
        marginBottom: spacing(2),
      },
    },
    "810": {
      ...sharedPortraitStyles,
      headline: {
        ...sharedHeadline,
        fontSize: 28,
        lineHeight: 28,
        marginBottom: spacing(2),
      },
    },
    "834": {
      ...sharedPortraitStyles,
      headline: {
        ...sharedHeadline,
        fontSize: 30,
        lineHeight: 30,
        marginBottom: spacing(2),
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
        marginBottom: spacing(3),
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
