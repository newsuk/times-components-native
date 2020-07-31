import React from "react";
import { View } from "react-native";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { ItemColSeparator } from "../shared";
import styleFactory from "./styles";
import VerticalLayout from "../verticallayout";

const FrontLeadTwoNoPicAndTwoSlice = ({
  breakpoint,
  orientation,
  lead1,
  lead2,
  support1,
  support2,
}) => {
  const styles = styleFactory(breakpoint);

  // TODO check what we want to do about small breakpoints?
  if (breakpoint === editionBreakpoints.small) {
    return <VerticalLayout tiles={[lead1, lead2, support1, support2]} />;
  }

  if (orientation === "landscape") {
    return (
      <View style={styles.container}>
        <VerticalLayout style={styles.column} tiles={[lead1, lead2]} />
        <ItemColSeparator style={styles.colSeparatorStyle} />
        <View style={styles.middleTile}>{support1}</View>
        <ItemColSeparator style={styles.colSeparatorStyle} />
        <View style={styles.column}>{support2}</View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <VerticalLayout style={styles.leftColumn} tiles={[lead1, lead2]} />
      <ItemColSeparator style={styles.colSeparatorStyle} />
      <VerticalLayout style={styles.rightColumn} tiles={[support1, support2]} />
    </View>
  );
};

export default FrontLeadTwoNoPicAndTwoSlice;
