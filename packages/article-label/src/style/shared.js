import styleguide from "@times-components-native/styleguide";
import { StyleSheet } from "react-native";

const { fontFactory } = styleguide();
const styles = StyleSheet.create({
  title: {
    ...fontFactory({
      font: "supporting",
      fontSize: "cardMetaMobile",
    }),
    fontWeight: "400",
    lineHeight: 11,
    marginBottom: 0,
    marginTop: -1,
    paddingTop: 1,
  },
});

export default styles;
