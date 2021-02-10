import { StyleSheet } from "react-native";
import styleguide from "@times-components-native/styleguide";
import sharedStylesFactory from "./shared";
import globalStyle from "../shared";

const androidStyles = (options) => {
  const { spacing } = styleguide({ scale: options.scale });
  const sharedStyles = sharedStylesFactory(options);

  return {
    ...sharedStyles,
    articleTextElement: {
      ...sharedStyles.articleTextElement,
      fontStyle: "normal",
      marginBottom: spacing(4),
    },
    leadAsset: {
      marginBottom: 6,
    },
  };
};

const styles = (options) =>
  StyleSheet.create({
    ...globalStyle,
    ...androidStyles(options),
  });

export default styles;
