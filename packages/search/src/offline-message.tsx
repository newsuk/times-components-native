import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles/offline-message-styles";

export const OfflineMessage: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Search is an online only feature</Text>
  </View>
);
