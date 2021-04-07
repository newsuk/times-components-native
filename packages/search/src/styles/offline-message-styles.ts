import { StyleSheet } from "react-native";
import { colours, spacing } from "@times-components-native/styleguide";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    marginBottom: spacing(5),
    color: colours.functional.secondary,
  },
});
