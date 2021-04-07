import { StyleSheet } from "react-native";
import { tabletWidth } from "@times-components-native/styleguide";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  subContainer: {
    flexGrow: 1,
    maxWidth: tabletWidth,
  },
});
