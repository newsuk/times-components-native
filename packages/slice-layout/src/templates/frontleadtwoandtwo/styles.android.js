import { spacing } from "@times-components-native/styleguide";

import stylesFactory from "./styles.js";

export default (breakpoint) => {
  let styles = stylesFactory(breakpoint);
  return {
    ...styles,
    containerLandscape: {
      ...styles.containerLandscape,
      paddingBottom: spacing(10), // ensures content sits on top of bottom-nav bar
    },
  };
};
