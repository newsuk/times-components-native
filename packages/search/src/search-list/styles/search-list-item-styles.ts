import styleguide from "@times-components-native/styleguide/src/styleguide";
import { StyleSheet } from "react-native";

const { spacing } = styleguide();

export const styles = StyleSheet.create({
  listItemContainer: {
    paddingHorizontal: spacing(2),
    paddingVertical: spacing(2),
  },
  listItemContainerTablet: {
    borderWidth: 1,
    borderColor: "red",
    paddingVertical: spacing(3),
  },
});
