import React from "react";
import { View } from "react-native";

import { TabletContentContainer } from "../shared";
import HorizontalLayout from "../horizontallayout";
import { getStyles } from "./styles";
import { getDimensions } from "@times-components-native/utils";

const FrontLeadTwoSlice = ({ orientation, lead1, lead2, inTodaysEdition }) => {
  const { width: windowWidth, height: windowHeight } = getDimensions();
  const styles = getStyles(orientation, windowWidth, windowHeight);

  if (orientation === "landscape") {
    return (
      <TabletContentContainer
        orientation={orientation}
        windowWidth={windowWidth}
        style={styles.container}
      >
        <HorizontalLayout
          containerStyle={styles.horizontalContainer}
          tiles={[
            { style: styles.lead1Container, tile: lead1 },
            { style: styles.lead2Container, tile: lead2 },
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
      <HorizontalLayout
        containerStyle={styles.horizontalContainer}
        tiles={[
          { style: styles.lead1Container, tile: lead1 },
          { style: styles.lead2Container, tile: lead2 },
        ]}
        colSeparatorStyle={styles.colSeparatorStyle}
      />
      <View style={[styles.inTodaysEditionContainer]}>{inTodaysEdition}</View>
    </TabletContentContainer>
  );
};

export default FrontLeadTwoSlice;
