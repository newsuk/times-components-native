import React from "react";
import { Search } from "./";
import storybookReporter from "@times-components-native/tealium-utils";
//
// const preventDefaultedAction = (decorateAction) =>
//   decorateAction([
//     ([e, ...args]) => {
//       e.preventDefault();
//       return ["[SyntheticEvent (storybook prevented default)]", ...args];
//     },
//   ]);

const getProps = () => ({
  analyticsStream: storybookReporter,
  onArticlePress: (event) => {
    console.log(event);
  },
});

const makeSearch = () => <Search {...getProps()} />;

export default {
  children: [
    {
      component: makeSearch,
      name: "Default",
      type: "story",
    },
  ],
  name: "Search",
};
