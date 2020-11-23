import { StyleSheet, ViewStyle } from "react-native";

import { spacing, tabletWidth } from "@times-components-native/styleguide";

interface Styles {
  container: ViewStyle;
  inlineAdContainer: ViewStyle;
}

const styles: Styles = {
  container: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    width: tabletWidth,
  },
  inlineAdContainer: {
    marginRight: spacing(2),
  },
};

export default StyleSheet.create<Styles>(styles);
