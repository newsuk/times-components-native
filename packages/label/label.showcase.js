import React from "react";
import { CenteredDecorator } from "@times-components-native/storybook";
import Label from "./index";

export default {
  children: [
    {
      decorator: CenteredDecorator,
      platform: "native",
      type: "decorator",
    },
    {
      component: () => <Label>New</Label>,
      name: "Label for tags",
      type: "story",
    },
  ],
  name: "Primitives/Read",
};
