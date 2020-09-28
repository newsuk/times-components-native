import React from "react";
import { Dimensions, View } from "react-native";
import { getStyles } from "./styles";
import { TabletContentContainer } from "@times-components-native/slice-layout/src/templates/shared";
import { HorizontalLayout } from "@times-components-native/slice-layout";

const FrontLeadOneSlice = ({ orientation, lead }) => {
  const windowWidth = Dimensions.get("window").width;
  const newStyles = getStyles(orientation, windowWidth);

  if (orientation === "landscape") {
    const ite = (
      <View
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
          containerStyle={newStyles.container}
          tiles={[
            { style: newStyles.leadContainer, tile: lead },
            { style: newStyles.inTodaysEditionContainer, tile: ite },
          ]}
          colSeparatorStyle={newStyles.colSeparatorStyle}
        />
      </TabletContentContainer>
    );
  }
  return (
    <TabletContentContainer style={newStyles.container}>
      <View style={newStyles.leadContainer}>{lead}</View>
      <View
        style={[
          {
            backgroundColor: "#f0eedf",
          },
          newStyles.inTodaysEditionContainer,
        ]}
      />
    </TabletContentContainer>
  );
};

export default FrontLeadOneSlice;
