import React from "react";
import { ActivityIndicator } from "react-native";
import { colours } from "@times-components-native/styleguide";
import { styles } from "./styles/searchListLoaderStyles";

const SearchListLoader = () => (
  <ActivityIndicator
    style={styles.loader}
    color={colours.functional.secondary}
    size="large"
  />
);

export default SearchListLoader;
