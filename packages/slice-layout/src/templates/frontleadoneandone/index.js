import React from "react";
import { View } from "react-native";
import { TabletContentContainer } from "@times-components-native/slice-layout";
import { getDimensions } from "@times-components-native/utils";
import HorizontalLayout from "../horizontallayout";
import { ItemColSeparator } from "../shared";
import { getStyles } from "./styles";

const FrontLeadOneAndOneSlice = ({
  orientation,
  lead,
  support,
  inTodaysEdition,
}) => {
  const { width: windowWidth } = getDimensions();
  const styles = getStyles(orientation, windowWidth);

  if (orientation === "landscape") {
    return (
      <TabletContentContainer style={styles.container}>
        <HorizontalLayout
          containerStyle={styles.row}
          tiles={[
            { style: styles.leadContainer, tile: lead },
            { style: styles.supportContainer, tile: support },
            {
              style: styles.inTodaysEditionContainer,
              tile: inTodaysEdition,
            },
          ]}
          colSeparatorStyle={styles.colSeparatorStyle}
        />
      </TabletContentContainer>
    );
  }

  return (
    <TabletContentContainer style={styles.container}>
      <View style={styles.tilesContainer}>
        <View style={styles.leftColumn}>{lead}</View>
        <ItemColSeparator style={styles.colSeparatorStyle} />
        <View style={styles.rightColumn}>{support}</View>
      </View>
      <View style={styles.inTodaysEditionContainer}>{inTodaysEdition}</View>
    </TabletContentContainer>
  );
};

export default FrontLeadOneAndOneSlice;
