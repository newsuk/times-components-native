import { AppRegistry } from "react-native";
import Page from "@tcn/pages";
import { FontStorage } from "@tcn/typeset";
import ttf from "../fonts";

Object.keys(ttf).forEach(fontName => {
  FontStorage.registerFont(fontName, ttf[fontName]);
});

AppRegistry.registerComponent("ArticlePage", () => Page("Article"));
AppRegistry.registerComponent("AuthorProfilePage", () => Page("AuthorProfile"));
AppRegistry.registerComponent("Section", () => Page("Section"));
AppRegistry.registerComponent("TopicPage", () => Page("Topic"));
