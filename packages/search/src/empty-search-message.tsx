import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colours, spacing } from "@times-components-native/styleguide";

const EmptySearchMessage = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Popular thing to search for:</Text>
    <Text style={styles.text}>Articles</Text>
    <Text style={styles.text}>Topics</Text>
    <Text style={styles.text}>Journalists</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    marginBottom: spacing(5),
    color: colours.functional.secondary,
  },
  text: {
    textAlign: "center",
    color: colours.functional.secondary,
  },
});

export default EmptySearchMessage;
