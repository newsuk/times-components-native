import styleguide, {
  editionBreakpoints,
} from "@times-components-native/styleguide";

const { colours, fonts, spacing } = styleguide();

const fontSizeLandscapeResolver = {
  [editionBreakpoints.medium]: 14,
  [editionBreakpoints.wide]: 14,
  [editionBreakpoints.huge]: 16,
};

const fontSizePortraitResolver = {
  [editionBreakpoints.medium]: 14,
  [editionBreakpoints.wide]: 16,
  [editionBreakpoints.huge]: 16,
};

const lineHeightLandscapeResolver = {
  [editionBreakpoints.medium]: 18,
  [editionBreakpoints.wide]: 18,
  [editionBreakpoints.huge]: 20,
};

const lineHeightPortraitResolver = {
  [editionBreakpoints.medium]: 18,
  [editionBreakpoints.wide]: 20,
  [editionBreakpoints.huge]: 20,
};

const textStyle = {
  color: colours.functional.primary,
  marginBottom: spacing(2),
  fontFamily: fonts.body,
};
export default (breakpoint) => ({
  textLandscape: {
    ...textStyle,
    fontSize: fontSizeLandscapeResolver[breakpoint],
    lineHeight: lineHeightLandscapeResolver[breakpoint],
  },
  textPortrait: {
    ...textStyle,
    fontSize: fontSizePortraitResolver[breakpoint],
    lineHeight: lineHeightPortraitResolver[breakpoint],
  },
  bylineContainer: { marginBottom: spacing(1) },
  container: { flex: 1 },
  bylineStyle: { lineHeight: 13 },
});
