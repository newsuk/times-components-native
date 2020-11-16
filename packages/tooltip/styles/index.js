import { StyleSheet } from "react-native";
import { fonts, spacing, colours } from "@times-components-native/styleguide";

export const defaults = {
  arrowWidth: 12,
  offsetY: spacing(1),
  width: 256,
  leftAlignedArrowLeft: spacing(4),
};

export const calculateArrowPosition = (alignment, width) =>
  alignment === "left"
    ? defaults.leftAlignedArrowLeft
    : width / 2 - defaults.arrowWidth / 2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.functional.tooltip,
    borderRadius: 3,
    shadowColor: colours.functional.black,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    position: "absolute",
  },
  left: {
    left: 0,
  },
  center: {
    left: -defaults.width / 2,
  },
  text: {
    paddingHorizontal: spacing(6),
    paddingVertical: spacing(4),
    color: colours.functional.white,
    fontFamily: fonts.supporting,
    fontSize: 16,
    lineHeight: 18,
    textAlign: "center",
  },
  textLeft: {
    textAlign: "left",
    paddingRight: spacing(7),
  },
  close: {
    position: "absolute",
    height: 16,
    width: 16,
    top: 10,
    right: 5,
    zIndex: 1,
  },
  arrow: {
    position: "absolute",
    bottom: -7,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderColor: colours.functional.tooltip,
    borderLeftWidth: defaults.arrowWidth,
    borderRightWidth: defaults.arrowWidth,
    borderBottomWidth: 8,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    transform: [{ rotate: "180deg" }],
    borderRadius: 3,
    shadowColor: colours.functional.black,
    shadowOffset: {
      width: -3,
      height: -3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  crossDiagonal1: {
    backgroundColor: colours.functional.white,
    height: 16,
    width: 1,
    top: -2,
    left: 5,
    transform: [{ rotate: "45deg" }],
  },
  crossDiagonal2: {
    backgroundColor: colours.functional.white,
    height: 16,
    width: 1,
    top: -2,
    left: 5,
    position: "absolute",
    transform: [{ rotate: "-45deg" }],
  },
});

export default styles;
