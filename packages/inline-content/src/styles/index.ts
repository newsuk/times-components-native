import { StyleSheet, ViewStyle } from "react-native";

import { spacing, tabletWidth } from "@times-components-native/styleguide";

interface Styles {
  container: ViewStyle;
  inlineItemContainer: ViewStyle;
}

const styles: Styles = {
  container: {
    flex: 1,
    flexDirection: "row",
    width: tabletWidth,
  },
  inlineItemContainer: {
    marginLeft: spacing(2),
    marginBottom: spacing(2),
  },
};

export default StyleSheet.create<Styles>(styles);
