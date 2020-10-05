import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { ItemColSeparator } from "../shared";
import styleFactory from "./styles";
import VerticalLayout from "../verticallayout";

const LeadTwoNoPicAndTwoSlice = ({
  breakpoint,
  orientation,
  lead1,
  lead2,
  support1,
  support2,
}) => {
  const styles = styleFactory(orientation);

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

  // portrait tablet
  return (
    <View style={styles.container}>
      <VerticalLayout style={styles.column} tiles={[lead1, lead2]} />
      <ItemColSeparator style={styles.colSeparatorStyle} />
      <VerticalLayout style={styles.column} tiles={[support2, support1]} />
    </View>
  );
};

LeadTwoNoPicAndTwoSlice.propTypes = {
  breakpoint: PropTypes.string,
  lead1: PropTypes.node.isRequired,
  lead2: PropTypes.node.isRequired,
  support1: PropTypes.node.isRequired,
  support2: PropTypes.node.isRequired,
};

LeadTwoNoPicAndTwoSlice.defaultProps = {
  breakpoint: editionBreakpoints.small,
};

export default LeadTwoNoPicAndTwoSlice;
