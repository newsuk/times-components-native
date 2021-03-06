import React from "react";
import { View } from "react-native";
import { ItemRowSeparator } from "../shared";
import HorizontalLayout from "../horizontallayout";
import stylesFactory from "./styles";
import { ResponsiveSlice } from "@times-components-native/edition-slices/src/slices/shared";

const SupplementLeadOneAndFourV2Slice = ({
  breakpoint,
  orientation,
  lead,
  support1,
  support2,
  support3,
  support4,
}) => {
  const styles = stylesFactory(breakpoint);

  const renderSupportTiles = () => {
    return (
      <View
        style={
          orientation === "landscape"
            ? styles.landscapeSupportContainer
            : styles.portraitSupportContainer
        }
      >
        <HorizontalLayout
          containerStyle={styles.horizontalSupportContainer}
          tiles={[
            { style: styles.supportItem, tile: support1 },
            { style: styles.supportItem, tile: support2 },
          ]}
        />
        <ItemRowSeparator />
        <HorizontalLayout
          containerStyle={styles.horizontalSupportContainer}
          tiles={[
            { style: styles.supportItem, tile: support3 },
            { style: styles.supportItem, tile: support4 },
          ]}
        />
      </View>
    );
  };

  return (
    <View>
      <View style={styles.leadContainer}>{lead}</View>
      <ResponsiveSlice
        renderSmall={() => null} // TODO need to add something here in order to render something on android portrait
        renderMedium={renderSupportTiles}
      />
    </View>
  );
};

export default SupplementLeadOneAndFourV2Slice;
