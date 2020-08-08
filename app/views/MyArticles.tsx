import React from "react";
import { NavigationComponentProps } from "react-native-navigation";
import { StyleSheet, Text, View } from "react-native";

import { GillSansMTStdMedium } from "../utils/fonts";

export const MyArticlesView: React.FC<NavigationComponentProps> = () => (
  <View style={styles.container}>
    <Text style={styles.title} accessibilityLabel="My Articles Placeholder">
      My Articles
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontFamily: GillSansMTStdMedium,
    fontSize: 20,
  },
});
