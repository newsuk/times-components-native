import {
  fonts,
  spacing,
  editionBreakpoints,
  globalSpacingStyles,
} from "@times-components-native/styleguide";

const fontSizeResolver = {
  [editionBreakpoints.wide]: 20,
  [editionBreakpoints.huge]: 22,
};

export default (breakpoint) => ({
  container: {
    flex: 1,
    padding: spacing(2),
    paddingTop: 0,
  },
  headline: {
    ...globalSpacingStyles.tabletHeadline,
    fontFamily: fonts.headline,
    fontSize: fontSizeResolver[breakpoint],
    lineHeight: fontSizeResolver[breakpoint],
  },
  imageContainer: {
    width: "100%",
    marginBottom: spacing(2),
  },
  summary: {
    ...globalSpacingStyles.tabletTeaser,
    textAlign: "justify",
  },
});
