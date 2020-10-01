import React from "react";
import { View } from "react-native";
import { getStyles } from "./styles";
import {
  HorizontalLayout,
  TabletContentContainer,
} from "@times-components-native/slice-layout";
import { getDimensions } from "@times-components-native/utils";

const FrontLeadOneSlice = ({ orientation, lead, inTodaysEdition }) => {
  const { width: windowWidth } = getDimensions();
  const styles = getStyles(orientation, windowWidth);

  if (orientation === "landscape") {
    return (
      <TabletContentContainer>
        <HorizontalLayout
          containerStyle={styles.container}
          tiles={[
            { style: styles.leadContainer, tile: lead },
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
      <View style={styles.leadContainer}>{lead}</View>
      <View style={[styles.inTodaysEditionContainer]}>{inTodaysEdition}</View>
    </TabletContentContainer>
  );
};

export default FrontLeadOneSlice;
