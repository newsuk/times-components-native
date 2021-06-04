import { StyleSheet } from "react-native";
import {
  colours,
  fontFactory,
  fonts,
  spacing,
} from "@times-components-native/styleguide";

export const styles = StyleSheet.create({
  listEmptyTitle: {
    marginVertical: spacing(6),
    color: colours.functional.black,
    fontFamily: "TimesModern-Bold",
    fontSize: 30,
    width: "75%",
    textAlign: "center",
    alignSelf: "center",
    lineHeight: 35,
  },
  listEmptyMessage: {
    color: colours.functional.secondary,
    ...fontFactory({
      font: "bodyRegular",
      fontSize: "infoTitle",
    }),
    fontFamily: fonts.supporting,
    width: "90%",
    textAlign: "center",
    alignSelf: "center",
  },
  listEmptyStateContainer: {
    flex: 1,
    paddingTop: spacing(6),
  },
});
