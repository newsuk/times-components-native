import React, { FC } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import CloseRoundIcon from "@times-components-native/icons/src/icons/close-round";

export interface XButtonProps {
  onPress: TouchableOpacityProps["onPress"];
}

const XButton: FC<XButtonProps> = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.closeIconContainer}>
    <CloseRoundIcon />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  closeIconContainer: {
    position: "absolute",
    right: 10,
    top: 5,
  },
});

export default XButton;
