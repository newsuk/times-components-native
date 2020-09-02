import {
  colours,
  fonts,
  spacing,
  editionBreakpoints,
} from "@times-components-native/styleguide";

const fontSizeResolver = {
  [editionBreakpoints.medium]: 30,
  [editionBreakpoints.wide]: 35,
  [editionBreakpoints.huge]: 45,
};

export default (breakpoint) => ({
  container: {
    flex: 1,
    paddingRight: spacing(2),
    paddingBottom: spacing(2),
  },
  headline: {
    color: colours.functional.brandColour,
    fontFamily: fonts.headlineRegular,
    fontWeight: "normal",
    fontSize: fontSizeResolver[breakpoint],
    lineHeight: fontSizeResolver[breakpoint],
    textAlign: "center",
  },
  imageContainer: {
    width: "100%",
  },
  summaryContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colours.functional.border,
    paddingHorizontal: spacing(12),
    paddingTop: spacing(6),
    paddingBottom: spacing(2),
  },
});
