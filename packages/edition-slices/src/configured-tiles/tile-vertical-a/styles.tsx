import {
  fonts,
  spacing,
  globalSpacingStyles,
} from "@times-components-native/styleguide";

export default ({
  headline: { fontSize },
}: {
  headline: { fontSize: number };
}) => ({
  container: {
    flex: 1,
    paddingVertical: spacing(2),
    paddingHorizontal: spacing(2),
  },
  imageContainer: {
    marginBottom: spacing(2),
  },
  headline: {
    ...globalSpacingStyles.tabletHeadline,
    fontFamily: fonts.headline,
    fontSize: fontSize,
    lineHeight: fontSize,
  },
  summary: {
    ...globalSpacingStyles.tabletTeaser,
  },
});
