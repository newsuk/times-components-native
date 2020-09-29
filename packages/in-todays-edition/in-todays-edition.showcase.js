/* eslint-disable react/prop-types */
import React from "react";
import { Dimensions, View } from "react-native";
import InTodaysEdition from "@times-components-native/in-todays-edition";
import { getStyleByDeviceSize } from "@times-components-native/styleguide/src/styleguide";
import Responsive, {
  useResponsiveContext,
} from "@times-components-native/responsive";

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
  const windowWidth = Dimensions.get("window").width;

  const dimensions = {
    portrait: {
      "768": {
        width: 688,
        height: 133,
      },
      "810": {
        width: 730,
        height: 148,
      },
      "1024": {
        width: 919,
        height: 174,
      },
    },
    landscape: {
      "1024": {
        width: 220,
        height: 511,
      },
      "1080": {
        width: 234,
        height: 548,
      },
      "1112": {
        width: 234,
        height: 577,
      },
      "1194": {
        width: 240,
        height: 577,
      },
      "1366": {
        width: 190,
        height: 737,
      },
    },
  };

  const containerSize = getStyleByDeviceSize(
    dimensions[orientation],
    windowWidth,
  );

  return (
    <View
      style={{
        width: containerSize.width,
        height: containerSize.height,
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
