import React from "react";
import { View } from "react-native";
import { getStyles } from "./styles";
import {
  HorizontalLayout,
  TabletContentContainer,
} from "@times-components-native/slice-layout";
import { getDimensions } from "@times-components-native/utils";

const FrontLeadOneSlice = ({ orientation, lead }) => {
  const { width: windowWidth } = getDimensions();
  const styles = getStyles(orientation, windowWidth);

  if (orientation === "landscape") {
    const ite = (
      <View
        tileName={"ite"}
        style={[
          {
            backgroundColor: "#f0eedf",
          },
        ]}
      />
    );

    return (
      <TabletContentContainer>
        <HorizontalLayout
          containerStyle={styles.container}
          tiles={[
            { style: styles.leadContainer, tile: lead },
            { style: styles.inTodaysEditionContainer, tile: ite },
          ]}
          colSeparatorStyle={styles.colSeparatorStyle}
        />
      </TabletContentContainer>
    );
  }
  return (
    <TabletContentContainer style={styles.container}>
      <View style={styles.leadContainer}>{lead}</View>
      <View
        style={[
          {
            backgroundColor: "#f0eedf",
          },
          styles.inTodaysEditionContainer,
        ]}
      />
    </TabletContentContainer>
  );
};

export default FrontLeadOneSlice;
