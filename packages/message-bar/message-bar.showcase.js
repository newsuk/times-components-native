import React from "react";
import { scales } from "@times-components-native/styleguide";
import MessageBar from "./src/message-bar";

export default {
  children: [
    {
      component: () => (
        <MessageBar
          animate
          close={() => null}
          delay={3000}
          message="Article link copied"
          scale={scales.medium}
        />
      ),
      name: "MessageBar",
      type: "story",
    },
  ],
  name: "Primitives/MessageBar",
};
