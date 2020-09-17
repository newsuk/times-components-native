import stylesFactory from "./styles.js";
import { getAndroidNavHeight } from "@times-components-native/utils";

const bottomNavBarHeight = getAndroidNavHeight();
export default (breakpoint) => {
  let styles = stylesFactory(breakpoint);
  return {
    ...styles,
    containerLandscape: {
      ...styles.containerLandscape,
      paddingBottom: bottomNavBarHeight,
    },
    containerPortrait: {
      ...styles.containerPortrait,
      paddingBottom: bottomNavBarHeight,
    },
  };
};
