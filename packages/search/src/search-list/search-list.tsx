import React, { FC, useEffect } from "react";
import { FlatList, NativeModules } from "react-native";
import SearchListItem from "./search-list-item";
import { Hit } from "../types";
import ArticleListItemSeparator from "@times-components-native/article-list/src/article-list-item-separator";
import SearchListLoader from "@times-components-native/search/src/search-list/search-list-loader";
import { styles } from "./styles/search-list-styles";
import SearchListEmptyState from "./search-list-empty-state";
import { TrackingData } from "@times-components-native/types";

export interface SearchListProps {
  hits: Hit[];
  onArticlePress: (url: string) => void;
  fetchMore: () => void;
}

const { track } = NativeModules.ReactAnalytics;

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

  useEffect(() => {
    const trackingData: TrackingData = {
      object: "Search",
      action: "Search results",
      component: "Search",
      attrs: { eventTime: new Date() },
    };
    track(trackingData);
  }, []);

  return (
    // <View style={styles.container}>
    <FlatList
      data={hits}
      renderItem={({ item }) => (
        <SearchListItem item={item} onItemPress={onArticlePress} />
      )}
      ItemSeparatorComponent={ArticleListItemSeparator}
      contentContainerStyle={styles.contentContainer}
      ListEmptyComponent={
        <SearchListEmptyState
          icon="emptyResultsIcon"
          title="Sorry, we found no results"
          message="Please check all words are spelled correctly, or try a different search term"
          trackingData={{
            object: "Search",
            action: "No search results",
            component: "Search ",
          }}
        />
      }
      ListFooterComponent={SearchListLoader}
      nestedScrollEnabled
      onEndReached={handleFetchMore}
      keyboardShouldPersistTaps={"always"}
    />
    // </View>
  );
};

export default SearchList;
