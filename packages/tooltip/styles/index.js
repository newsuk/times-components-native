import { StyleSheet } from "react-native";
import { fonts, spacing, colours } from "@times-components-native/styleguide";

const arrow = {
  height: 8,
  width: 12,
};

const shadowOpacity = 0.3;

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 9999,
  },
  wrapperTop: {
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
    shadowOpacity: shadowOpacity,
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
    borderLeftWidth: arrow.width,
    borderRightWidth: arrow.width,
    borderBottomWidth: arrow.height,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderRadius: 3,
    shadowColor: colours.functional.black,
    shadowOffset: {
      width: -3,
      height: -3,
    },
    shadowOpacity: 0,
    shadowRadius: 4,
  },
  arrowBottom: {
    bottom: -7,
    top: "auto",
    transform: [{ rotate: "180deg" }],
    shadowOpacity: shadowOpacity,
  },
  arrowRight: {
    transform: [{ rotate: "90deg" }],
    shadowOffset: {
      width: 3,
      height: -3,
    },
    shadowOpacity: shadowOpacity,
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

  switch (options.placement) {
    case "top":
      arrowPlacementStyles = [
        styles.arrowBottom,
        { left: options.arrowOffset },
      ];
      wrapperPlacementStyles = styles.wrapperTop;
      containerPlacementStyles = { bottom: options.offsetY };
      break;
    case "left":
      arrowPlacementStyles = [
        styles.arrowRight,
        { left: options.width - arrow.height },
        { top: options.arrowOffset },
      ];
      wrapperPlacementStyles = styles.wrapperLeft;
      containerPlacementStyles = [
        { left: -options.width - options.offsetX },
        { top: options.offsetY },
      ];
      break;
    default:
      arrowPlacementStyles = { left: options.arrowOffset };
      containerPlacementStyles = { top: options.offsetY };
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
    arrow: [styles.arrow, arrowPlacementStyles],
  };
};

export default generateStyles;
