import React, { FC } from "react";
import { ArticleListEmptyState } from "@times-components-native/article-list";
import { FlatList } from "react-native";
import SearchListItem from "./search-list-item";
import { Hit } from "../types";
import ArticleListItemSeparator from "@times-components-native/article-list/src/article-list-item-separator";

export interface SearchListProps {
  hits: Hit[];
  onArticlePress: (url: string) => void;
  fetchMore: () => void;
}

const SearchList: FC<SearchListProps> = ({
  hits,
  onArticlePress,
  fetchMore,
}) => {
  const handleFetchMore = () => {
    // Workaround for iOS Flatlist bug (https://github.com/facebook/react-native/issues/16067)
    if (hits.length > 0) {
      return fetchMore();
    }
  };

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
      nestedScrollEnabled
      onEndReached={handleFetchMore}
    />
  );
};

export default SearchList;
