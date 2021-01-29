import styleguide from "@times-components-native/styleguide";
import sharedStylesFactory from "./shared";

export default (scale) => {
  const { spacing } = styleguide({ scale });
  const sharedStyles = sharedStylesFactory(scale);

  return {
    ...sharedStyles,
    articleTextElement: {
      marginBottom: spacing(4),
    },
  };
};
