/* eslint-disable react/prop-types */
import React from "react";
import InTodaysEdition from "@times-components-native/in-todays-edition";
import Responsive, {
  useResponsiveContext,
} from "@times-components-native/responsive";
import { View } from "react-native";

import InTodaysEditionData from "./fixtures/in-todays-edition.json";

const preventDefaultedAction = (decorateAction) =>
  decorateAction([
    ([e, ...args]) => {
      e.preventDefault();
      return ["[SyntheticEvent (storybook prevented default)]", ...args];
    },
  ]);

const StoryContainer = ({ children }) => {
  const { orientation } = useResponsiveContext();

  const dimensions = {
    portrait: {
      width: 220,
      height: 521,
    },
    landscape: {
      width: 688,
      height: 133,
    },
  };

  return (
    <View
      style={{
        width: dimensions[orientation].width,
        height: dimensions[orientation].height,
        marginLeft: 20,
      }}
    >
      {children}
    </View>
  );
};

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
