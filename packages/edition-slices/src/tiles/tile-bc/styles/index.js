import {
  fonts,
  spacing,
  editionBreakpoints,
} from "@times-components-native/styleguide";

const fontSizeResolver = {
  [editionBreakpoints.medium]: 28,
  [editionBreakpoints.wide]: 30,
  [editionBreakpoints.huge]: 35,
};

export default (breakpoint) => ({
  container: {
    paddingHorizontal: spacing(2),
    paddingTop: spacing(2),
    flex: 1,
  },
  headline: {
    fontFamily: fonts.headlineRegular,
    fontWeight: "normal",
    fontSize: fontSizeResolver[breakpoint],
    lineHeight: fontSizeResolver[breakpoint],
  },
  summaryContainer: {
    flex: 1,
  },
  imageContainer: {
    marginBottom: spacing(2),
    width: "100%",
  },
});
