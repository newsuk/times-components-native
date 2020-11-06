import { StyleSheet, ViewStyle } from "react-native";

import { spacing, tabletWidth } from "@times-components-native/styleguide";

interface Styles {
  container: ViewStyle;
  inlineItemContainer: ViewStyle;
  inlineItemNarrowContainer: ViewStyle;
}

const styles: Styles = {
  container: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    width: tabletWidth,
  },
  inlineItemContainer: {
    marginLeft: spacing(2),
    marginBottom: spacing(2),
  },
  inlineItemNarrowContainer: {
    marginLeft: spacing(4),
    marginBottom: spacing(2),
  },
};

export default StyleSheet.create<Styles>(styles);
