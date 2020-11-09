import React from "react";
import { View } from "react-native";
import { getStyles } from "./styles";
import HorizontalLayout from "../horizontallayout";
import TabletContentContainer from "../shared/TabletContentContainer";
import { useResponsiveContext } from "@times-components-native/responsive";

const FrontLeadOneSlice = ({ orientation, lead, inTodaysEdition }) => {
  const { windowWidth } = useResponsiveContext();
  const styles = getStyles(orientation, windowWidth);

  if (orientation === "landscape") {
    return (
      <TabletContentContainer
        orientation={orientation}
        windowWidth={windowWidth}
        style={styles.container}
      >
        <HorizontalLayout
          containerStyle={styles.row}
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
    <TabletContentContainer
      orientation={orientation}
      windowWidth={windowWidth}
      style={styles.container}
    >
      <View style={styles.leadContainer}>{lead}</View>
      <View style={styles.inTodaysEditionContainer}>{inTodaysEdition}</View>
    </TabletContentContainer>
  );
};

export default FrontLeadOneSlice;
