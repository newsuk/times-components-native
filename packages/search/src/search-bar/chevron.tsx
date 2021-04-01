import React, { FC } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { LeftChevron } from "@times-components-native/icons/src/icons";
import { styles } from "./styles/chevron-styles";

export interface ChevronProps {
  onPress: TouchableOpacityProps["onPress"];
  color?: string;
}

const Chevron: FC<ChevronProps> = ({ onPress, color }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <LeftChevron color={color} />
  </TouchableOpacity>
);

export default Chevron;
