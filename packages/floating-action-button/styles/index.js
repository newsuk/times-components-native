import { StyleSheet } from "react-native";
import { fonts, spacing, colours } from "@times-components-native/styleguide";

export const buttonHeight = 54;
const iconWidth = 22;

const styles = StyleSheet.create({
  wrapper: {
    height: buttonHeight,
    position: "absolute",
    bottom: spacing(5),
    right: spacing(5),
    backgroundColor: colours.functional.white,
    borderRadius: buttonHeight / 2,
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
  container: {
    justifyContent: "flex-start",
    flexDirection: "row",
    overflow: "hidden",
  },
  icon: {
    paddingTop: spacing(3),
    paddingLeft: (buttonHeight - iconWidth) / 2,
  },
  text: {
    paddingTop: 22,
    color: colours.functional.secondary,
    fontSize: 15,
    fontFamily: fonts.supporting,
    marginLeft: spacing(3),
  },
});

export default styles;
