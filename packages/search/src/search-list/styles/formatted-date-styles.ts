import styleguide from "@times-components-native/styleguide/src/styleguide";
import { StyleSheet } from "react-native";

const { colours, fontFactory, spacing } = styleguide();
export const styles = StyleSheet.create({
  metaText: {
    color: colours.functional.secondary,
    ...fontFactory({
      font: "supporting",
      fontSize: "cardMeta",
    }),
    marginVertical: spacing(2),
  },
});
