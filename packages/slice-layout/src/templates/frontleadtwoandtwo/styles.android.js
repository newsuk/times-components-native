import { spacing } from "@times-components-native/styleguide";

import stylesFactory from "./styles.js";

const bottomNavBarHeight = spacing(20); // ensures content sits on top of bottom-nav bar
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
      paddingBottom: bottomNavBarHeight, // ensures content sits on top of bottom-nav bar
    },
  };
};
