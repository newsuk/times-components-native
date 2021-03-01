import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colours } from "@times-components-native/styleguide";

const EmptySearchMessage = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Search for articles, topics, journalists</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    color: colours.functional.secondary,
  },
});

export default EmptySearchMessage;
