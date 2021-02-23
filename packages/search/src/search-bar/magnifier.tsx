import React from "react";
import { GlassMagnifierIcon } from "@times-components-native/icons/src/icons";
import { StyleSheet, View } from "react-native";

const Magnifier = () => {
  return (
    <View style={styles.container}>
      <GlassMagnifierIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 8,
    left: 4,
  },
});

export default Magnifier;
