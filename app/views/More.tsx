import * as React from "react";
import { NavigationComponentProps } from "react-native-navigation";
import { StyleSheet, Text, View } from "react-native";

import { GillSansMTStdMedium } from "../utils/fonts";

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

export const MoreView: React.FC<NavigationComponentProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} testID="ViewTitle">
        More
      </Text>
    </View>
  );
};
