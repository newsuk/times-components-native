import React, { FC } from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { DeleteIcon } from "@times-components-native/icons";

export interface XButtonProps {
  onPress: TouchableOpacityProps["onPress"];
  style?: ViewStyle;
}

const XButton: FC<XButtonProps> = ({ onPress, style }) => (
  <TouchableOpacity
    onPress={onPress}
    style={style}
    hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
  >
    <DeleteIcon width={16} height={16} />
  </TouchableOpacity>
);

export default XButton;
