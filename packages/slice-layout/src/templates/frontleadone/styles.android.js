import stylesFactory, { getStyles as getStylesIos } from "./styles.js";
import { getAndroidNavHeight } from "@times-components-native/utils";

export default (breakpoint) => {
  let styles = stylesFactory(breakpoint);
  return {
    ...styles,
    container: {
      ...styles.container,
      paddingBottom: getAndroidNavHeight(),
    },
  };
};

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
