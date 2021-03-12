import React, { FC } from "react";
import { ArticleListEmptyState } from "@times-components-native/article-list";
import { FlatList, StyleSheet, View } from "react-native";
import SearchListItem from "./search-list-item";
import { Hit } from "../types";
import ArticleListItemSeparator from "@times-components-native/article-list/src/article-list-item-separator";
import { tabletWidth } from "@times-components-native/styleguide";
import SearchListLoader from "@times-components-native/search/src/search-list/search-list-loader";

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
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <FlatList
          data={hits}
          renderItem={({ item }) => (
            <SearchListItem item={item} onItemPress={onArticlePress} />
          )}
          ItemSeparatorComponent={ArticleListItemSeparator}
          contentContainerStyle={styles.contentContainer}
          ListEmptyComponent={
            <ArticleListEmptyState message="There were no results for your search term" />
          }
          ListFooterComponent={SearchListLoader}
          nestedScrollEnabled
          onEndReached={handleFetchMore}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  subContainer: {
    flexGrow: 1,
    maxWidth: tabletWidth,
  },
});

export default SearchList;
