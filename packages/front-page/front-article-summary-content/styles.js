import styleguide, {
  editionBreakpoints,
} from "@times-components-native/styleguide";

const { colours, fonts, spacing } = styleguide();

const fontSizeResolver = {
  [editionBreakpoints.medium]: {
    landscape: 14,
    portrait: 14,
  },
  [editionBreakpoints.wide]: {
    landscape: 14,
    portrait: 16,
  },
  [editionBreakpoints.huge]: {
    landscape: 16,
    portrait: 16,
  },
};

const lineHeightResolver = {
  [editionBreakpoints.medium]: {
    landscape: 18,
    portrait: 18,
  },
  [editionBreakpoints.wide]: {
    landscape: 18,
    portrait: 20,
  },
  [editionBreakpoints.huge]: {
    landscape: 20,
    portrait: 20,
  },
};

const textStyle = {
  color: colours.functional.primary,
  marginBottom: spacing(2),
  fontFamily: fonts.body,
};
export default (breakpoint) => ({
  textLandscape: {
    ...textStyle,
    fontSize: fontSizeResolver[breakpoint].landscape,
    lineHeight: lineHeightResolver[breakpoint].landscape,
  },
  textPortrait: {
    ...textStyle,
    fontSize: fontSizeResolver[breakpoint].portrait,
    lineHeight: lineHeightResolver[breakpoint].portrait,
  },
  bylineContainer: { marginBottom: spacing(1) },
});
