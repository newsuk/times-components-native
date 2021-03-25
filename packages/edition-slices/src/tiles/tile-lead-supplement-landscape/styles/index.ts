import {
  colours,
  fonts,
  spacing,
  editionBreakpoints,
} from "@times-components-native/styleguide";
import { StyleSheet } from "react-native";

const fontSizeResolver: Record<string, number> = {
  [editionBreakpoints.smallTablet]: 38,
  [editionBreakpoints.medium]: 38,
  [editionBreakpoints.wide]: 38,
  [editionBreakpoints.huge]: 40,
};

export default (breakpoint: string) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      backgroundColor: colours.functional.whiteGrey,
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
      backgroundColor: colours.functional.whiteGrey,
      padding: spacing(6),
    },
  });
