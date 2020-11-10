import { StyleSheet } from "react-native";
import { fonts, spacing, colours } from "@times-components-native/styleguide";

const styles = StyleSheet.create({
  container: {
    padding: spacing(3),
    width: 256,
    backgroundColor: colours.functional.tooltip,
    position: "absolute",
    bottom: 0,
    left: -128,
    borderRadius: 3,
    shadowColor: colours.functional.black,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  body: {},
  text: {
    paddingHorizontal: spacing(3),
    paddingVertical: spacing(2),
    color: colours.functional.white,
    fontFamily: fonts.supporting,
    fontSize: 16,
  },
  close: {
    position: "absolute",
    top: spacing(-2),
    right: spacing(-2),
  },
});

export default styles;
