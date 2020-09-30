/* eslint-disable react/prop-types */
import React from "react";
import storybookReporter from "@times-components-native/tealium-utils";

import Search from "./src/search";

const preventDefaultedAction = (decorateAction) =>
  decorateAction([
    ([e, ...args]) => {
      e.preventDefault();
      return ["[SyntheticEvent (storybook prevented default)]", ...args];
    },
  ]);

const getProps = (decorateAction) => ({
  analyticsStream: storybookReporter,
  onArticlePress: preventDefaultedAction(decorateAction)("onArticlePress"),
});

const makeSearch = (decorateAction) => <Search {...getProps(decorateAction)} />;

export default {
  children: [
    {
      component: (_, { decorateAction }) => makeSearch(decorateAction),
      name: "Default",
      type: "story",
    },
  ],
  name: "Pages/Search",
};
