import React, { FC } from "react";
import { View } from "react-native";
import ArticleByline from "@times-components-native/article-byline";
import { Hit } from "../types";
import { styles } from "./styles/searchListItemByLineStyles";

export interface SearchListItemBylineProps {
  byline: Hit["byline"];
}

const SearchListItemByline: FC<SearchListItemBylineProps> = ({ byline }) => {
  if (!byline.length) {
    return null;
  }

  return (
    <View style={styles.byLineContainer}>
      <ArticleByline ast={[{ byline: byline }]} />
    </View>
  );
};

export default SearchListItemByline;
