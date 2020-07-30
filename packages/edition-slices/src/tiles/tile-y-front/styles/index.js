import {
  fonts,
  spacing,
  editionBreakpoints,
  globalSpacingStyles,
} from "@times-components-native/styleguide";

const fontSizeResolver = {
  [editionBreakpoints.medium]: 32,
  [editionBreakpoints.wide]: 32,
  [editionBreakpoints.huge]: 35,
};

export default (breakpoint) => ({
  container: {
    flex: 1,
    paddingHorizontal: spacing(2),
    paddingTop: spacing(2),
    paddingBottom: spacing(4),
  },
  headline: {
    ...globalSpacingStyles.tabletHeadline,
    fontFamily: fonts.headline,
    fontSize: fontSizeResolver[breakpoint],
    lineHeight: fontSizeResolver[breakpoint],
  },
  summary: {
    ...globalSpacingStyles.tabletTeaser,
    textAlign: "justify",
  },
});
