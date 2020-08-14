import React from "react";
import { View } from "react-native";
import { ItemColSeparator } from "../shared";
import VerticalLayout from "../verticallayout";
import styles from "./styles";

const TopSecondarySlice = ({ lead, support1, support2, support3 }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leadContainer}>{lead}</View>
      <ItemColSeparator />
      <VerticalLayout
        style={styles.supportContainer}
        tiles={[support1, support2, support3]}
      />
    </View>
  );
};

export default TopSecondarySlice;
