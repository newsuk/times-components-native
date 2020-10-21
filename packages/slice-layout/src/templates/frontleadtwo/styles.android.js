import { getStyles as getStylesIos } from "./styles.js";
import { getAndroidNavHeight } from "@times-components-native/utils";

export const getStyles = (orientation, windowWidth, windowHeight) => {
  const styles = getStylesIos(orientation, windowWidth, windowHeight);
  return {
    ...styles,
    container: {
      ...styles.container,
      marginBottom: getAndroidNavHeight(),
    },
  };
};
