import stylesFactory from "./styles.js";
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
