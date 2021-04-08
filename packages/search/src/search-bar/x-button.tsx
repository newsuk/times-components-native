import React, { FC } from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { colours } from "@times-components-native/styleguide";
import { CloseIcon } from "@times-components-native/icons";

export interface XButtonProps {
  onPress: TouchableOpacityProps["onPress"];
  style?: ViewStyle;
}

const XButton: FC<XButtonProps> = ({ onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <CloseIcon width={24} height={24} fillColour={colours.functional.black} />
  </TouchableOpacity>
);

export default XButton;
