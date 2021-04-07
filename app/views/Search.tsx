import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GillSansMTStdMedium } from "../utils/fonts";
import { NavigationComponentProps } from "react-native-navigation";

export const SearchView: FC<NavigationComponentProps> = () => (
  <View style={styles.container}>
    <Text style={styles.title} testID="ViewTitle">
      Search View
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
