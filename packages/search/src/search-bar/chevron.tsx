import React, { FC } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { LeftChevron } from "@times-components-native/icons/src/icons";

export interface ChevronProps {
  onPress: TouchableOpacityProps["onPress"];
}

const Chevron: FC<ChevronProps> = ({ onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <LeftChevron />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 6,
    left: 0,
    zIndex: 1,
  },
});

export default Chevron;
