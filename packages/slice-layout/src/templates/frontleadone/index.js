import React from "react";
import { Dimensions, View } from "react-native";
import { getStyles } from "./styles";
import { TabletContentContainer } from "@times-components-native/slice-layout/src/templates/shared";

const FrontLeadOneSlice = ({ orientation, lead }) => {
  const windowWidth = Dimensions.get("window").width;
  const newStyles = getStyles(orientation, windowWidth);

  return (
    <TabletContentContainer style={newStyles.container}>
      {lead}
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
