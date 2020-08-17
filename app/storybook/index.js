/* eslint-disable import/no-extraneous-dependencies */
import { Platform } from "react-native";
import {
  getStorybookUI,
  configure,
  addDecorator,
} from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import AsyncStorage from "@react-native-community/async-storage";

import {
  BarSpacingDecorator,
  WhiteBgColorDecorator,
} from "@times-components-native/storybook";
import { loadStories } from "./story-loader";
import "./rn-addons";

if (Platform.OS === "ios") {
  addDecorator(BarSpacingDecorator);
}

if (Platform.OS === "android") {
  addDecorator(WhiteBgColorDecorator);
}

addDecorator(withKnobs);

configure(loadStories, module);

export const StorybookUIRoot = getStorybookUI({
  asyncStorage: AsyncStorage,
});
