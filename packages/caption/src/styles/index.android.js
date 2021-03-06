import { StyleSheet } from "react-native";
import { spacing } from "@times-components-native/styleguide";
import sharedStyles from "./shared";

const styles = StyleSheet.create({
  ...sharedStyles,
  container: {
    ...sharedStyles.container,
    paddingTop: spacing(1),
  },
  credits: {
    ...sharedStyles.credits,
    lineHeight: spacing(4),
    marginTop: 0,
  },
  text: {
    ...sharedStyles.text,
    lineHeight: spacing(4),
  },
});

export default styles;
