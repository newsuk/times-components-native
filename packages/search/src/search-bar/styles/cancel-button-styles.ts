import { StyleSheet } from "react-native";
import { fontFactory } from "@times-components-native/styleguide";

export const styles = StyleSheet.create({
  cancelContainer: {
    justifyContent: "center",
    marginLeft: 8,
    paddingRight: 16,
  },
  cancel: {
    ...fontFactory({
      font: "supporting",
      fontSize: "body",
    }),
    marginTop: 5,
  },
  androidContainer: {
    position: "absolute",
    zIndex: 1,
    top: 15,
    right: 10,
  },
});
