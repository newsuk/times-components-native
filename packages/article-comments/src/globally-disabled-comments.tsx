import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styleguide from "@times-components-native/styleguide";

const GloballyDisabledComments = () => (
  <View style={styles.container}>
    <Text style={styles.headline}>Comments are currently unavailable</Text>
  </View>
);

const { colours, fontFactory, spacing } = styleguide();
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderTopColor: colours.functional.keyline,
    borderTopWidth: 1,
    width: "100%",
  },
  headline: {
    color: colours.functional.primary,
    ...fontFactory({
      font: "headline",
      fontSize: "commentsHeadline",
    }),
    marginVertical: spacing(10),
    maxWidth: 315,
    textAlign: "center",
  },
});

export default GloballyDisabledComments;
