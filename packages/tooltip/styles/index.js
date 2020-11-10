import { StyleSheet } from "react-native";
import { fonts, spacing, colours } from "@times-components-native/styleguide";

const styles = StyleSheet.create({
  container: {
    padding: spacing(3),
    width: 256,
    backgroundColor: colours.functional.tooltip,
    position: "absolute",
    bottom: -5,
    left: -128,
    borderRadius: 3,
    shadowColor: colours.functional.black,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  body: {},
  text: {
    paddingHorizontal: spacing(3),
    paddingVertical: spacing(2),
    color: colours.functional.white,
    fontFamily: fonts.supporting,
    fontSize: 16,
    lineHeight: 18,
    textAlign: "center",
  },
  close: {
    position: "absolute",
    top: spacing(-1),
    right: spacing(-1),
  },
  arrow: {
    position: "absolute",
    bottom: -23,
    left: 100,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderColor: colours.functional.tooltip,
    borderLeftWidth: 12,
    borderRightWidth: 12,
    borderBottomWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    transform: [
      {rotate: '180deg'}
    ],
    borderRadius: 3,
    shadowColor: colours.functional.black,
    shadowOffset: {
      width: -3,
      height: -3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});

export default styles;
