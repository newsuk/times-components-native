import {
  colours,
  fonts,
  spacing,
  editionBreakpoints,
} from "@times-components-native/styleguide";

const fontSizeResolver = {
  [editionBreakpoints.medium]: 40,
  [editionBreakpoints.wide]: 45,
};

const horizontalMarginResolver = {
  [editionBreakpoints.medium]: spacing(6),
  [editionBreakpoints.wide]: spacing(10),
};

const horizontalPaddingResolver = {
  [editionBreakpoints.medium]: spacing(10),
  [editionBreakpoints.wide]: spacing(28),
};

export default (breakpoint) => ({
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: colours.functional.keyline,
    marginHorizontal: -horizontalMarginResolver[breakpoint],
  },
  headline: {
    color: colours.functional.brandColour,
    fontFamily: fonts.headlineRegular,
    fontWeight: "normal",
    fontSize: fontSizeResolver[breakpoint],
    lineHeight: fontSizeResolver[breakpoint],
    textAlign: "center",
    marginHorizontal: horizontalMarginResolver[breakpoint],
  },
  imageContainer: {
    width: "100%",
  },
  summaryContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colours.functional.border,
    paddingHorizontal: horizontalPaddingResolver[breakpoint],
    paddingVertical: spacing(4),
  },
});
