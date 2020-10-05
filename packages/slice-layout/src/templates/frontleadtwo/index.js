import React from "react";
import { Dimensions, View } from "react-native";

import { TabletContentContainer } from "../shared";
import HorizontalLayout from "../horizontallayout";
import { getStyles } from "./styles";

const FrontLeadTwoSlice = ({ orientation, lead1, lead2, inTodaysEdition }) => {
  const windowWidth = Dimensions.get("window").width;
  const styles = getStyles(orientation, windowWidth);

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
