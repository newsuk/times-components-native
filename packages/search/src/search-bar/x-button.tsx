import React, { FC } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import CloseRoundIcon from "@times-components-native/icons/src/icons/close-round";
import { styles } from "./styles/x-button-styles";

export interface XButtonProps {
  onPress: TouchableOpacityProps["onPress"];
}

const XButton: FC<XButtonProps> = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.closeIconContainer}>
    <CloseRoundIcon />
  </TouchableOpacity>
);

export default XButton;
