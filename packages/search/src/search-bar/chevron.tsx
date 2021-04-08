import React, { FC } from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { LeftChevron } from "@times-components-native/icons/src/icons";
import { colours } from "@times-components-native/styleguide";

export interface ChevronProps {
  onPress: TouchableOpacityProps["onPress"];
  color?: string;
  style?: ViewStyle;
}

const Chevron: FC<ChevronProps> = ({
  onPress,
  color = colours.functional.black,
  style,
}) => (
  <TouchableOpacity style={style} onPress={onPress}>
    <LeftChevron color={color} />
  </TouchableOpacity>
);

export default Chevron;
