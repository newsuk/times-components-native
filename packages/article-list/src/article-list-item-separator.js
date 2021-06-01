import React from "react";
import { View } from "react-native";
import styles from "./styles";

const ArticleListItemSeparator = () => (
  <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
    <View style={styles.listItemSeparator} />
  </View>
);

export default ArticleListItemSeparator;
