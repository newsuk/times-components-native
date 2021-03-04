import React from "react";
import { GlassMagnifierIcon } from "@times-components-native/icons/src/icons";
import { StyleSheet, View } from "react-native";

const Magnifier = () => (
  <View style={styles.container}>
    <GlassMagnifierIcon />
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 6,
    left: 4,
  },
});

export default Magnifier;
