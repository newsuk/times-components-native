import styleguide from "@times-components-native/styleguide/src/styleguide";
import { StyleSheet } from "react-native";

const { spacing } = styleguide();

export const styles = StyleSheet.create({
  byLineContainer: {
    marginBottom: spacing(2),
  },
});
