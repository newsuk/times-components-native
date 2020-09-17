import React from "react";
import { View } from "react-native";
import { editionBreakpoints } from "@times-components-native/styleguide";
import PropTypes from "prop-types";
import styleFactory from "./styles";
import { ItemRowSeparator } from "../shared";
import HorizontalLayout from "../horizontallayout";

const SupplementSecondaryTwoAndTwoSlice = ({
  breakpoint = editionBreakpoints.medium,
  secondary1,
  secondary2,
  support1,
  support2,
}) => {
  const styles = styleFactory(breakpoint);

  if (breakpoint === editionBreakpoints.huge) {
    return (
      <HorizontalLayout
        containerStyle={styles.container}
        tiles={[
          { style: styles.secondaryItemContainer, tile: secondary1 },
          { style: styles.supportItemContainer, tile: support1 },
          { style: styles.secondaryItemContainer, tile: secondary2 },
          { style: styles.supportItemContainer, tile: support2 },
        ]}
      />
    );
  }

  return (
    <View style={styles.container}>
      <HorizontalLayout
        containerStyle={styles.itemContainer}
        tiles={[
          { style: styles.item, tile: secondary1 },
          { style: styles.item, tile: secondary2 },
        ]}
      />
      <ItemRowSeparator />
      <HorizontalLayout
        containerStyle={styles.itemContainer}
        tiles={[
          { style: styles.item, tile: support1 },
          { style: styles.item, tile: support2 },
        ]}
      />
    </View>
  );
};

SupplementSecondaryTwoAndTwoSlice.propTypes = {
  breakpoint: PropTypes.string,
  secondary1: PropTypes.node.isRequired,
  secondary2: PropTypes.node.isRequired,
  support1: PropTypes.node.isRequired,
  support2: PropTypes.node.isRequired,
};

export default SupplementSecondaryTwoAndTwoSlice;
