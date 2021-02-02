import {
  colours,
  fonts,
  spacing,
  editionBreakpoints,
} from "@times-components-native/styleguide";
import { TextStyle } from "react-native";

const fontSizeResolver: Record<string, number> = {
  [editionBreakpoints.medium]: 38,
  [editionBreakpoints.wide]: 38,
  [editionBreakpoints.huge]: 40,
};

export default (breakpoint: string) => ({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colours.functional.border,
  },
  headline: {
    color: colours.functional.brandColour,
    fontFamily: fonts.headlineRegular,
    fontWeight: "normal",
    fontSize: fontSizeResolver[breakpoint],
    lineHeight: fontSizeResolver[breakpoint],
  } as TextStyle,
  teaserText: {
    fontSize: 15,
    lineHeight: 22,
    color: colours.functional.brandColour,
    fontFamily: fonts.bodyRegular,
  },
  summaryContainer: {
    flex: 1,
    backgroundColor: colours.functional.whriteGrey,
    padding: spacing(6),
  },
});
