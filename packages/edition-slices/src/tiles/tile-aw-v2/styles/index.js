import {
  colours,
  fonts,
  spacing,
  editionBreakpoints,
} from "@times-components-native/styleguide";

const fontSizeResolver = {
  [editionBreakpoints.medium]: 38,
  [editionBreakpoints.wide]: 38,
  [editionBreakpoints.huge]: 40,
};

export default (breakpoint) => ({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  headline: {
    color: colours.functional.brandColour,
    fontFamily: fonts.headlineRegular,
    fontWeight: "normal",
    fontSize: fontSizeResolver[breakpoint],
    lineHeight: fontSizeResolver[breakpoint],
  },
  teaserText: {
    fontSize: 15,
    lineHeight: 22,
    color: colours.functional.brandColour,
    fontFamily: fonts.bodyRegular,
  },
  summaryContainer: {
    flex: 1,
    flexGrow: 1,
    justifyContent: "center",
    backgroundColor: colours.functional.whriteGrey,
    padding: spacing(6),
  },
});
