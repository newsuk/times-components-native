import React from "react";
import { View } from "react-native";

import { TabletContentContainer } from "../shared";
import HorizontalLayout from "../horizontallayout";
import { getStyles } from "./styles";
import { useResponsiveContext } from "@times-components-native/responsive";

const FrontLeadTwoSlice = ({ orientation, lead1, lead2, inTodaysEdition }) => {
  const { windowWidth, windowHeight } = useResponsiveContext();
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
