import {
  fonts,
  spacing,
  editionBreakpoints,
} from "@times-components-native/styleguide";

const fontSizeResolver = {
  [editionBreakpoints.medium]: 17,
  [editionBreakpoints.wide]: 17,
  [editionBreakpoints.huge]: 24,
};

export default (breakpoint) => ({
  container: {
    flexDirection: "row",
    padding: spacing(2),
  },
  headline: {
    fontFamily: fonts.headlineRegular,
    fontWeight: "normal",
    fontSize: fontSizeResolver[breakpoint],
    lineHeight: fontSizeResolver[breakpoint],
    marginBottom: spacing(1),
  },
  imageContainer: {
    width: "50%",
  },
  summaryContainer: {
    width: "50%",
    paddingHorizontal: spacing(2),
    paddingBottom: spacing(1),
  },
});
