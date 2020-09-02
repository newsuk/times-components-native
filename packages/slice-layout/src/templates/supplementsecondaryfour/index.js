/* eslint-disable react/require-default-props */
import React from "react";
import { View } from "react-native";
import { editionBreakpoints } from "@times-components-native/styleguide";
import PropTypes from "prop-types";
import styleFactory from "./styles";
import HorizontalLayout from "../horizontallayout";

const SupplementSecondaryFourSlice = ({
  isConsecutive = false,
  breakpoint = editionBreakpoints.small,
  secondary1,
  secondary2,
  secondary3,
  secondary4,
}) => {
  const styles = styleFactory(breakpoint);
  const containerStyles = isConsecutive
    ? { ...styles.container, flexDirection: "row-reverse" }
    : styles.container;

  return (
    <View style={containerStyles}>
      <HorizontalLayout
        containerStyle={styles.columnsContainer}
        tiles={[
          { style: styles.columnItem, tile: secondary1 },
          { style: styles.columnItem, tile: secondary2 },
          { style: styles.columnItem, tile: secondary3 },
          { style: styles.columnItem, tile: secondary4 },
        ]}
        colSeparatorStyle={styles.colSeparatorStyle}
      />
    </View>
  );
};

SupplementSecondaryFourSlice.propTypes = {
  isConsecutive: PropTypes.bool,
  breakpoint: PropTypes.string,
  secondary1: PropTypes.node.isRequired,
  secondary2: PropTypes.node.isRequired,
  secondary3: PropTypes.node.isRequired,
  secondary4: PropTypes.node.isRequired,
};

export default SupplementSecondaryFourSlice;
