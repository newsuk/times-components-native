import React from "react";
import { GlassMagnifierIcon } from "@times-components-native/icons/src/icons";
import { View } from "react-native";
import { styles } from "./styles/magnifierStyles";

interface MagnifierProps {
  color?: string;
}

const Magnifier: React.FC<MagnifierProps> = ({ color }) => (
  <View style={styles.container}>
    <GlassMagnifierIcon color={color} />
  </View>
);

export default Magnifier;
