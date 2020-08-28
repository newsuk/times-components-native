import React from "react";
import { View } from "react-native";
import { ItemColSeparator } from "../shared";
import HorizontalLayout from "../horizontallayout";
import VerticalLayout from "../verticallayout";
import stylesFactory from "./styles";

const SupplementLeadOneAndFourSlice = ({
  breakpoint,
  orientation,
  lead,
  support1,
  support2,
  support3,
  support4,
}) => {
  const styles = stylesFactory(breakpoint);

  if (orientation === "landscape") {
    return (
      <View style={styles.landscapeContainer}>
        <View style={styles.landscapeLeadContainer}>{lead}</View>
        <ItemColSeparator />
        <VerticalLayout
          style={styles.verticalSupportContainer}
          tiles={[support1, support2, support3, support4]}
        />
      </View>
    );
  }

  return (
    <View style={styles.portraitContainer}>
      <View style={styles.portraitLeadContainer}>{lead}</View>
      <ItemColSeparator />
      <HorizontalLayout
        containerStyle={styles.horizontalSupportContainer}
        tiles={[
          { style: styles.supportItem, tile: support1 },
          { style: styles.supportItem, tile: support2 },
          { style: styles.supportItem, tile: support3 },
          { style: styles.supportItem, tile: support4 },
        ]}
      />
    </View>
  );
};

export default SupplementLeadOneAndFourSlice;
