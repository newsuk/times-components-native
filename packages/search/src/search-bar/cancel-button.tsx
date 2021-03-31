import React, { FC } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import {
  colours,
  fontFactory,
  spacing
} from "@times-components-native/styleguide";

export interface CancelButtonProps {
  onPress: TouchableOpacityProps["onPress"];
}

const CancelButton: FC<CancelButtonProps> = ({ onPress }) => (
  <View style={styles.cancelContainer}>
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.cancel}>Cancel</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  cancelContainer: {
    justifyContent: "center",
    paddingRight: spacing(3),
  },
  cancel: {
    color: colours.functional.white,
    ...fontFactory({
      font: "supporting",
      fontSize: "body",
    }),
    marginTop: spacing(1),
  },
});

export default CancelButton;
