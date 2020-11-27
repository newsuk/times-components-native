import { StyleSheet } from "react-native";
import { fonts, spacing, colours } from "@times-components-native/styleguide";

const height = 56;

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: height,
    padding: spacing(4),
    position: "absolute",
    bottom: 40,
    right: 30,
    backgroundColor: colours.functional.white,
    justifyContent: "flex-start",
    borderRadius: height / 2,
    shadowColor: colours.functional.black,
    shadowOffset: {
      width: 2,
      height: 6,
    },
    shadowOpacity: 0.46,
    shadowRadius: 6,
    zIndex: 9999,
    flexDirection: "row",
  },
  text: {
    color: colours.functional.secondary,
    fontSize: 15,
    fontFamily: fonts.supporting,
    marginLeft: spacing(3),
  },
});

export default styles;
