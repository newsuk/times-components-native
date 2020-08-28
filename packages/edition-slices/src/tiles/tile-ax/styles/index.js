import {
  fonts,
  spacing,
  globalSpacingStyles,
  editionBreakpoints,
} from "@times-components-native/styleguide";

const fontSizeResolver = {
  [editionBreakpoints.medium]: 24,
  [editionBreakpoints.wide]: 30,
  [editionBreakpoints.huge]: 30,
};

export default (breakpoint) => ({
  container: {
    flex: 1,
    paddingHorizontal: spacing(2),
    paddingVertical: spacing(3),
  },
  headline: {
    ...globalSpacingStyles.tabletHeadline,
    fontFamily: fonts.headlineRegular,
    fontSize: fontSizeResolver[breakpoint],
    lineHeight: fontSizeResolver[breakpoint],
    marginTop: spacing(1),
  },
  imageContainer: {
    width: "100%",
    marginBottom: spacing(2),
  },
});
