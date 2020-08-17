import React from "react";
import { View } from "react-native";
import { ItemColSeparator } from "../shared";
import stylesFactory from "./styles";

const FrontLeadOneAndOneSlice = ({ breakpoint, lead, support }) => {
  const styles = stylesFactory(breakpoint);

  return (
    <View style={[styles.container]}>
      <View style={styles.leftColumn}>{lead}</View>
      <ItemColSeparator style={styles.colSeparatorStyle} />
      <View style={styles.rightColumn}>{support}</View>
    </View>
  );
};

export default FrontLeadOneAndOneSlice;
