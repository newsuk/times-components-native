import { StyleSheet } from "react-native";
import styleguideFactory from "@tcn/styleguide";
import sharedStyles from "./shared";

const { spacing, colours } = styleguideFactory();

const styles = StyleSheet.create({
  ...sharedStyles,
  headline: {
    ...sharedStyles.headline,
    color: colours.functional.black
  },
  title: {
    ...sharedStyles.title,
    paddingVertical: spacing(1)
  }
});

export default styles;
