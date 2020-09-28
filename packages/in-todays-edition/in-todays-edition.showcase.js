/* eslint-disable react/prop-types */
import React from "react";
import InTodaysEdition from "@times-components-native/in-todays-edition";
import Responsive from "@times-components-native/responsive";
import { View } from "react-native";

import InTodaysEditionData from "./fixtures/in-todays-edition.json";

const preventDefaultedAction = (decorateAction) =>
  decorateAction([
    ([e, ...args]) => {
      e.preventDefault();
      return ["[SyntheticEvent (storybook prevented default)]", ...args];
    },
  ]);

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
      component: (_, { decorateAction }) => (
        <Responsive>
          <StoryContainer>
            <InTodaysEdition
              items={InTodaysEditionData}
              onArticlePress={preventDefaultedAction(decorateAction)(
                "onArticlePress",
              )}
              onLinkPress={preventDefaultedAction(decorateAction)(
                "onLinkPress",
              )}
            />
          </StoryContainer>
        </Responsive>
      ),
      name: "Default",
      type: "story",
    },
  ],
  name: "Primitives/InTodaysEdition",
};
