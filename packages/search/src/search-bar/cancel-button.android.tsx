import React, { FC } from "react";
import IconClose from "@times-components-native/icons/src/icons/close";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

export interface CancelButtonProps {
  onPress: TouchableOpacityProps["onPress"];
}

const CancelButton: FC<CancelButtonProps> = ({ onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <IconClose fillColour="#fff" height={24} width={24} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 1,
    top: 15,
    right: 10,
  },
});

export default CancelButton;
