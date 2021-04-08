import React from "react";
import { RightOrientedGlassMagnifier } from "@times-components-native/icons/src/icons";
import { ViewStyle, View } from "react-native";

interface MagnifierProps {
  color?: string;
  style?: ViewStyle;
}

const Magnifier: React.FC<MagnifierProps> = ({ color, style }) => (
  <View style={style}>
    <RightOrientedGlassMagnifier color={color} />
  </View>
);

export default Magnifier;
