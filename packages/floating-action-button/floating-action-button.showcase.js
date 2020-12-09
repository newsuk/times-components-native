/* eslint-disable react/prop-types */
import React from "react";

import FloatingActionButton from "@times-components-native/floating-action-button";

export default {
  children: [
    {
      component: () => <FloatingActionButton text="Click me" />,
      name: "Default",
      type: "story",
    },
  ],
  name: "Primitives/Floating action button",
};
