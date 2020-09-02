import {
  editionBreakpoints,
  fonts,
  spacing,
} from "@times-components-native/styleguide";

const fontSizeResolver = {
  [editionBreakpoints.medium]: 19,
  [editionBreakpoints.wide]: 22,
};

export default (breakpoint) => ({
  container: {
    paddingTop: spacing(3),
    paddingHorizontal: spacing(2),
    paddingBottom: spacing(3),
  },
  headline: {
    fontFamily: fonts.headlineRegular,
    fontWeight: "normal",
    fontSize: fontSizeResolver[breakpoint],
    lineHeight: fontSizeResolver[breakpoint],
  },
  imageContainer: {
    flex: 1,
  },
  summaryContainer: {
    flex: 1,
    paddingTop: spacing(2),
  },
});
