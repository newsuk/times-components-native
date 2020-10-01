import React from "react";
import { Dimensions, View } from "react-native";
import { editionBreakpoints } from "@times-components-native/styleguide";

import { ItemColSeparator, TabletContentContainer } from "../shared";
import VerticalLayout from "../verticallayout";
import HorizontalLayout from "../horizontallayout";
import { getStyles } from "./styles";

const FrontLeadTwoSlice = ({ breakpoint, orientation, lead1, lead2 }) => {
  const windowWidth = Dimensions.get("window").width;
  const styles = getStyles(orientation, windowWidth);

  const ite = (
    <View
      style={[
        {
          backgroundColor: "#f0eedf",
        },
        styles.inTodaysEditionContainer,
      ]}
    />
  );

  if (orientation === "landscape") {
    return (
      <TabletContentContainer style={styles.container}>
        <HorizontalLayout
          containerStyle={styles.horizontalContainer}
          tiles={[
            { style: styles.lead1Container, tile: lead1 },
            { style: styles.lead2Container, tile: lead2 },
            { style: styles.inTodaysEditionContainer, tile: ite },
          ]}
          colSeparatorStyle={styles.colSeparatorStyle}
        />
      </TabletContentContainer>
    );
  }
  return (
    <TabletContentContainer style={styles.container}>
      <HorizontalLayout
        containerStyle={styles.horizontalContainer}
        tiles={[
          { style: styles.lead1Container, tile: lead1 },
          { style: styles.lead2Container, tile: lead2 },
        ]}
        colSeparatorStyle={styles.colSeparatorStyle}
      />
      {ite}
    </TabletContentContainer>
  );
};

export default FrontLeadTwoSlice;
