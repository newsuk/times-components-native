import React from "react";
import { Dimensions, View } from "react-native";
import { useResponsiveContext } from "@times-components-native/responsive";
import { getStyles } from "./styles";

export const ItemsContainer: React.FC = (props) => {
  const { orientation } = useResponsiveContext();
  const windowWidth = Dimensions.get("window").width;
  const styles = getStyles(orientation, windowWidth);
  return <View style={styles.itemsContainer}>{props.children}</View>;
};
