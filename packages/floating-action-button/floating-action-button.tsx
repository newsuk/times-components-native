import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface Props {
  icon?: string;
  text: string;
  onPress: <T = unknown, R = unknown>(args?: T) => R;
}

const FloatingActionButton: React.FC<Props> = ({ icon, text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.icon}>{icon}</View>
      <Text style={styles.text} allowFontScaling={false}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default FloatingActionButton;
