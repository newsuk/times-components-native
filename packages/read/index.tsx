import React from "react";
import { View, ViewStyle } from "react-native";
import { colours } from "@times-components-native/styleguide";
import { StyleSheet } from "react-native";
import { spacing } from "@times-components-native/styleguide";
import { IconCheckmark } from "@times-components-native/icons";
import Label from "@times-components-native/label";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: spacing(1),
    marginTop: spacing(0),
  },
});

interface ReadProps {
  containerStyle?: ViewStyle;
}

const Read = ({ containerStyle = {} }: ReadProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <IconCheckmark />
      <Label testID={"read-label"} color={colours.functional.transparentBlack}>
        Read
      </Label>
    </View>
  );
};

export default Read;
