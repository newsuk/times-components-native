import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { spacing } from "@times-components-native/styleguide";

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
    color: "#696969",
  },
  text: {
    textAlign: "center",
    color: "#696969",
  },
});

export default EmptySearchMessage;
