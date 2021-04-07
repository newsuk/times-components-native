import React, { FC } from "react";
import { View } from "react-native";
import ArticleByline from "@times-components-native/article-byline";
import { Hit } from "../types";
import { styles } from "./styles/search-list-item-by-line-styles";

export interface SearchListItemBylineProps {
  byline: Hit["byline"];
}

const SearchListItemByLine: FC<SearchListItemBylineProps> = ({ byline }) => {
  if (!byline.length) {
    return null;
  }

  return (
    <View style={styles.bylineContainer}>
      <ArticleByline ast={[{ byline: byline }]} />
    </View>
  );
};

export default SearchListItemByLine;
