import { spacing, tabletWidth } from "@times-components-native/styleguide";
import { StyleSheet } from "react-native";

const styles = {
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

export default StyleSheet.create(styles);
