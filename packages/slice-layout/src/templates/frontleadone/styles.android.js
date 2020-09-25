import { getStyles as getStylesIos } from "./styles.js";
import { getAndroidNavHeight } from "@times-components-native/utils";

export const getStyles = (orientation, windowSize) => {
  const styles = getStylesIos(orientation, windowSize);
  return {
    ...styles,
    container: {
      ...styles.container,
      paddingBottom: getAndroidNavHeight(),
    },
  };
};
