import { colours } from "@times-components-native/styleguide";
import { ImageStyle, StyleProp, ViewStyle } from "react-native";

const imageStyle: StyleProp<ImageStyle> = {
  width: "100%",
};

const style: StyleProp<ViewStyle> = {
  backgroundColor: colours.functional.backgroundSecondary,
  overflow: "hidden",
  width: "100%",
};

export default {
  imageStyle,
  style,
};
