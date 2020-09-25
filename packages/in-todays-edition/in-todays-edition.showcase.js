/* eslint-disable react/prop-types */
import React from "react";
import InTodaysEdition from "@times-components-native/in-todays-edition";
import Responsive from "@times-components-native/responsive";
import { View } from "react-native";

import InTodaysEditionData from "./fixtures/in-todays-edition.json";

const StoryContainer = ({ children }) => (
  <View
    style={{
      width: 220,
      height: 521,
      marginLeft: 20,
    }}
  >
    {children}
  </View>
);

export default {
  children: [
    {
      component: () => (
        <Responsive>
          <StoryContainer>
            <InTodaysEdition items={InTodaysEditionData} />
          </StoryContainer>
        </Responsive>
      ),
      name: "Default",
      type: "story",
    },
  ],
  name: "Primitives/InTodaysEdition",
};
