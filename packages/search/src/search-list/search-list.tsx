import React, { FC } from "react";
import { ArticleListEmptyState } from "@times-components-native/article-list";
import { FlatList } from "react-native";
import SearchListItem from "./search-list-item";
import { Hit } from "../types";
import ArticleListItemSeparator from "@times-components-native/article-list/src/article-list-item-separator";

export interface SearchListProps {
  hits: Hit[];
  emptyStateMessage: string;
  onArticlePress: (url: string) => void;
  fetchMore: () => void;
}

const SearchList: FC<SearchListProps> = ({ hits, onArticlePress }) => {
  return (
    <FlatList
      data={hits}
      renderItem={({ item }) => (
        <SearchListItem item={item} onItemPress={onArticlePress} />
      )}
      ItemSeparatorComponent={ArticleListItemSeparator}
      ListEmptyComponent={
        <ArticleListEmptyState message="There were no results for your search term" />
      }
    />
  );
};

export default SearchList;
