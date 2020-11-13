/* eslint-disable react/prop-types */
import React from "react";
import { Text } from "react-native";
import { Button } from "@times-components-native/button";
import Tooltip from "@times-components-native/tooltip";

export default {
  children: [
    {
      component: () => (
        <Tooltip
          content={<Text>Tap to read</Text>}
          type="testtooltip"
          tooltips={["testtooltip"]}
        >
          <Button title="Click me" />
        </Tooltip>
      ),
      name: "Default",
      type: "story",
    },
  ],
  name: "Primitives/Tooltip",
};
