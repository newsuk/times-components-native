import {
  fonts,
  spacing,
  globalSpacingStyles,
} from "@times-components-native/styleguide";

export default {
  container: {
    flex: 1,
    paddingHorizontal: spacing(2),
    paddingVertical: spacing(3),
  },
  headline: {
    ...globalSpacingStyles.tabletHeadline,
    fontFamily: fonts.headline,
    fontSize: 30,
    lineHeight: 30,
  },
  imageContainer: {
    width: "100%",
    marginBottom: spacing(2),
  },
  summary: {
    ...globalSpacingStyles.tabletTeaser,
  },
};
