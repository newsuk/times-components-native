import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import ArticleByline from "@times-components-native/article-byline";
import styleguide from "@times-components-native/styleguide";
import { Hit } from "../types";

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

const { spacing } = styleguide();

const styles = StyleSheet.create({
  byLineContainer: {
    marginBottom: spacing(2),
  },
});

export default SearchListItemByline;
