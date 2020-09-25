import React from "react";
import { View } from "react-native";
import styleFactory from "./styles";

export const ItemsContainer: React.FC = (props) => {
  const styles = styleFactory();
  return <View style={styles.itemsContainer}>{props.children}</View>;
};
