/* eslint-disable react/prop-types */
import React from "react";
import Tooltip from "@times-components-native/tooltip";

export default {
  children: [
    {
      component: (_, { decorateAction }) => (
        <Tooltip>
          Tap to read comments and join in with the conversation
        </Tooltip>
      ),
      name: "Default",
      type: "story",
    },
  ],
  name: "Primitives/Tooltip",
};
