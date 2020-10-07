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

const styles = {
  landscape: {
    1024: {
      ...sharedStyles,
      headline: {
        ...headline,
        fontSize: 42,
        lineHeight: 42,
        marginBottom: spacing(1),
      },
    },
    1080: {
      ...sharedStyles,
      headline: {
        ...headline,
        fontSize: 45,
        lineHeight: 45,
        marginBottom: spacing(2),
      },
    },
    1112: {
      ...sharedStyles,
      headline: {
        ...headline,
        fontSize: 45,
        lineHeight: 45,
        marginBottom: spacing(1),
      },
    },
    1366: {
      ...sharedStyles,
      headline: {
        ...headline,
        fontSize: 55,
        lineHeight: 55,
        marginBottom: spacing(1),
      },
    },
  },
  portrait: {
    768: {
      ...sharedStyles,
      headline: {
        ...headline,
        fontSize: 42,
        lineHeight: 42,
        marginBottom: spacing(1),
      },
      summary: {
        ...summary,
        fontSize: 14,
        lineHeight: 18,
      },
    },
    810: {
      ...sharedStyles,
      headline: {
        ...headline,
        fontSize: 14,
        lineHeight: 18,
        marginBottom: spacing(1),
      },
      summary: {
        ...summary,
        fontSize: 14,
        lineHeight: 18,
      },
    },
    1024: {
      ...sharedStyles,
      imageContainer: {
        ...sharedStyles.imageContainer,
        marginBottom: spacing(3),
      },
      headline: {
        ...headline,
        fontSize: 55,
        lineHeight: 55,
        marginBottom: spacing(4),
      },
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
