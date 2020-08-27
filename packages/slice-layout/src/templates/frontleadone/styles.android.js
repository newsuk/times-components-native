import { spacing } from "@times-components-native/styleguide";

import stylesFactory from "./styles.js";

export default (breakpoint) => {
  let styles = stylesFactory(breakpoint);
  return {
    ...styles,
    container: {
      ...styles.container,
      paddingBottom: spacing(20), // ensures content sits on top of bottom-nav bar
    },
  };
};
