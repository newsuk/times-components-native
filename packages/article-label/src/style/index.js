import { StyleSheet, Platform } from "react-native";
import sharedStyles from "./shared";

const styles = StyleSheet.create({
  ...sharedStyles,
  title: {
    ...sharedStyles.title,
    lineHeight: 12,
    paddingTop: 0,
    marginTop: 0,
    letterSpacing: 1,
    includeFontPadding: false,
    marginBottom: Platform.OS === "ios" ? -3 : 1,
  },
});

export default styles;
