import React from "react";
import { View } from "react-native";
import { TabletContentContainer } from "@times-components-native/slice-layout";
import { getDimensions } from "@times-components-native/utils";
import HorizontalLayout from "../horizontallayout";
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
      <TabletContentContainer
        orientation={orientation}
        windowWidth={windowWidth}
        style={styles.container}
      >
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
    <TabletContentContainer
      orientation={orientation}
      windowWidth={windowWidth}
      style={styles.container}
    >
      <HorizontalLayout
        containerStyle={styles.row}
        tiles={[
          { style: styles.leadContainer, tile: lead },
          { style: styles.supportContainer, tile: support },
        ]}
        colSeparatorStyle={styles.colSeparatorStyle}
      />
      <View style={styles.inTodaysEditionContainer}>{inTodaysEdition}</View>
    </TabletContentContainer>
  );
};

export default FrontLeadOneAndOneSlice;
