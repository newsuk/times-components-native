import {
  fonts,
  spacing,
  editionBreakpoints,
  globalSpacingStyles,
} from "@times-components-native/styleguide";

const fontSizeResolver: Record<string, number> = {
  [editionBreakpoints.medium]: 20,
  [editionBreakpoints.wide]: 20,
  [editionBreakpoints.huge]: 22,
};

export default (breakpoint: string) => ({
  container: {
    flex: 1,
    paddingVertical: spacing(3),
    paddingHorizontal: spacing(2),
  },
  imageContainer: {
    marginBottom: spacing(2),
  },
  headline: {
    ...globalSpacingStyles.tabletHeadline,
    fontFamily: fonts.headline,
    fontSize: fontSizeResolver[breakpoint],
    lineHeight: fontSizeResolver[breakpoint],
  },
  summary: {
    ...globalSpacingStyles.tabletTeaser,
  },
});