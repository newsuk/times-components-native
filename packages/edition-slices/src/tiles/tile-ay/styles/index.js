import {
  fonts,
  spacing,
  editionBreakpoints,
  globalSpacingStyles,
} from "@times-components-native/styleguide";

const fontSizeResolver = {
  [editionBreakpoints.medium]: 19,
  [editionBreakpoints.wide]: 22,
  [editionBreakpoints.huge]: 27,
};

export default (breakpoint) => ({
  container: {
    flex: 1,
    paddingVertical: spacing(3),
    paddingHorizontal: spacing(2),
  },
  headline: {
    ...globalSpacingStyles.tabletHeadline,
    fontFamily: fonts.headlineRegular,
    fontSize: fontSizeResolver[breakpoint],
    lineHeight: fontSizeResolver[breakpoint],
    fontWeight: "normal",
  },
  imageContainer: {
    marginBottom: spacing(2),
    width: "100%",
  },
});
