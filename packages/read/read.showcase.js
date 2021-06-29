import React from "react";
import { CenteredDecorator } from "@times-components-native/storybook";
import Read from "./index";

export default {
  children: [
    {
      decorator: CenteredDecorator,
      platform: "native",
      type: "decorator",
    },
    {
      component: () => <Read />,
      name: "Checked off and read",
      type: "story",
    },
  ],
  name: "Primitives/Read",
};
