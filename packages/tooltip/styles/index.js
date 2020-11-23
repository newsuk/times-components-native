import { StyleSheet } from "react-native";
import { fonts, spacing, colours } from "@times-components-native/styleguide";

const arrowWidth = 12;

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 88888,
  },
  wrapperPlacementStyles: {
    flexDirection: "column",
  },
  container: {
    backgroundColor: colours.functional.action,
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
  text: {
    paddingHorizontal: spacing(6),
    paddingVertical: spacing(4),
    color: colours.functional.white,
    fontFamily: fonts.supporting,
    fontSize: 16,
    lineHeight: 18,
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
    top: -7,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderColor: colours.functional.action,
    borderLeftWidth: arrowWidth,
    borderRightWidth: arrowWidth,
    borderBottomWidth: 8,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    transform: [{ rotate: "0deg" }],
    borderRadius: 3,
    shadowColor: colours.functional.black,
    shadowOffset: {
      width: -3,
      height: -3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  arrowBottom: {
    bottom: -7,
    top: "auto",
    transform: [{ rotate: "180deg" }],
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

const generateStyles = (options) => {
  let arrowPlacementStyles, wrapperPlacementStyles, containerPlacementStyles;
  if (options.placement === "top") {
    arrowPlacementStyles = styles.arrowBottom;
    wrapperPlacementStyles = styles.wrapperTop;
    containerPlacementStyles = { bottom: options.offsetY };
  }

  return {
    ...styles,
    wrapper: [styles.wrapper, wrapperPlacementStyles],
    container: [
      styles.container,
      { width: options.width },
      { left: options.offsetX },
      containerPlacementStyles,
    ],
    arrow: [styles.arrow, { left: options.arrowOffsetX }, arrowPlacementStyles],
  };
};

export default generateStyles;
