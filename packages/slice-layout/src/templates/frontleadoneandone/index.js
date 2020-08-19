import React from "react";
import { Dimensions, View } from "react-native";
import { ItemColSeparator } from "../shared";
import stylesFactory from "./styles";

const calculateContentWidth = (windowWidth) => {
  if (windowWidth >= 1366) return 1180;
  if (windowWidth >= 1194) return 1024;
  if (windowWidth >= 1112) return 1000;
  if (windowWidth >= 1080) return 1000;
  if (windowWidth >= 1024) return 920;

  return 1000;
};

const FrontLeadOneAndOneSlice = ({
  breakpoint,
  orientation,
  lead,
  support,
}) => {
  const styles = stylesFactory(breakpoint);

  const windowWidth = Dimensions.get("window").width;

  return (
    <View
      style={[
        styles.container,
        orientation === "landscape" && {
          width: calculateContentWidth(windowWidth),
          alignSelf: "center",
        },
      ]}
    >
      <View style={styles.leftColumn}>{lead}</View>
      <ItemColSeparator style={styles.colSeparatorStyle} />
      <View style={styles.rightColumn}>{support}</View>
    </View>
  );
};

export default FrontLeadOneAndOneSlice;
