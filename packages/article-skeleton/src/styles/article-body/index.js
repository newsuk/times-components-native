import { StyleSheet } from "react-native";
import { spacing } from "@times-components-native/styleguide";
import sharedStylesFactory from "./shared";
import globalStyle from "../shared";

const nativeStyles = (options) => {
  const sharedStyles = sharedStylesFactory(options);
  return {
    ...sharedStyles,
    articleTextElement: {
      ...sharedStyles.articleTextElement,
      marginBottom: spacing(4),
    },
  };
};

const styles = (options) =>
  StyleSheet.create({
    ...globalStyle,
    ...nativeStyles(options),
  });

export default styles;
