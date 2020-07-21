import "core-js";
import "regenerator-runtime/runtime";
import { AppRegistry } from "react-native";
import StorybookUIRoot from "./storybook";
import {FontStorage} from "@times-components-native/typeset";
import ttf from "../fonts";

Object.keys(ttf).forEach((fontName) => {
  FontStorage.registerFont(fontName, ttf[fontName]);
});

AppRegistry.registerComponent("storybooknative", () => StorybookUIRoot);
