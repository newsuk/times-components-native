import {
  colours,
  fonts,
  spacing,
  editionBreakpoints,
} from "@times-components-native/styleguide";

const fontSizeResolver = {
  [editionBreakpoints.medium]: 38,
  [editionBreakpoints.wide]: 38,
  [editionBreakpoints.huge]: 38,
};

export default (breakpoint) => ({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingRight: spacing(2),
    paddingBottom: spacing(2),
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colours.functional.whriteGrey,
    padding: spacing(6),
  },
});
