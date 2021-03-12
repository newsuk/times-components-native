import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { colours, spacing } from "@times-components-native/styleguide";

const SearchListLoader = () => (
  <ActivityIndicator
    style={styles.loader}
    color={colours.functional.secondary}
    size="large"
  />
);

const styles = StyleSheet.create({
  loader: {
    padding: spacing(4),
  },
});

export default SearchListLoader;
