import { StyleSheet } from "react-native";
import sharedStyles from "./shared";

const styles = StyleSheet.create({
  ...sharedStyles,
  headline: {
    ...sharedStyles.headline,
    includeFontPadding: false,
  },
  labelWrapper: {
    ...sharedStyles.labelWrapper,
  },
  text: {
    ...sharedStyles.text,
    marginBottom: 0,
  },
  metaText: {
    ...sharedStyles.metaText,
    marginTop: 0,
    marginBottom: 0,
  },
  strapline: {
    ...sharedStyles.strapline,
    includeFontPadding: false,
  },
});

export default styles;
