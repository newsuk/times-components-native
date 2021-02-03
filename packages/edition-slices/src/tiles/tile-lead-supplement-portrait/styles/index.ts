import {
  colours,
  fonts,
  spacing,
  editionBreakpoints,
} from "@times-components-native/styleguide";
import { StyleSheet } from "react-native";

const fontSizeResolver: Record<string, number> = {
  [editionBreakpoints.medium]: 40,
  [editionBreakpoints.wide]: 45,
};

const horizontalPaddingResolver: Record<string, number> = {
  [editionBreakpoints.medium]: spacing(10),
  [editionBreakpoints.wide]: spacing(28),
};

export default (breakpoint: string, summaryHeight: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      borderBottomWidth: 1,
      borderBottomColor: colours.functional.keyline,
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
      paddingHorizontal: horizontalPaddingResolver[breakpoint],
      paddingVertical: spacing(4),
      height: summaryHeight,
    },
  });
