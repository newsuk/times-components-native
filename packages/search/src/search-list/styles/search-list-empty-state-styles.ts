import { StyleSheet } from "react-native";
import {
  colours,
  fontFactory,
  spacing,
} from "@times-components-native/styleguide";

export const styles = StyleSheet.create({
  listEmptyTitle: {
    marginVertical: 29,
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
    width: "90%",
    textAlign: "center",
    alignSelf: "center",
  },
  listEmptyStateContainer: {
    flex: 1,
    paddingTop: spacing(12),
  },
});
