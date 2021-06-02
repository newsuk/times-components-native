import React, { FC } from "react";
import { View } from "react-native";
import {
  connectInfiniteHits,
  connectSearchBox,
} from "react-instantsearch-native";
import {
  InfiniteHitsProvided,
  SearchBoxProvided,
} from "react-instantsearch-core";
import { Hit } from "./types";
import SearchList from "./search-list/search-list";
import SearchListEmptyState from "@times-components-native/search/src/search-list/search-list-empty-state";
import Button from "@times-components-native/button";

export interface InfiniteHitsProps
  extends InfiniteHitsProvided<Hit>,
    SearchBoxProvided {
  onArticlePress: (url: string) => void;
  isConnected: boolean | null;
}

const SearchResults: FC<InfiniteHitsProps> = ({
  hits,
  refineNext,
  hasMore,
  onArticlePress,
  currentRefinement,
  isConnected,
}) => {
  const handleFetchMore = () => {
    if (!hasMore) {
      return null;
    }
    refineNext();
  };

  if (!isConnected) {
    return (
      <SearchListEmptyState
        icon="offline"
        title={"You appear to be offline"}
        message="Please check your network connection and try again"
        trackingData={{
          object: "Search",
          action: "No internet found",
          component: "Search",
          attrs: { eventTime: new Date() },
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              alignSelf: "flex-start",
              borderWidth: 1,
              borderColor: "green",
            }}
          >
            <Button title="Try again" onPress={() => null} />
          </View>
        </View>
      </SearchListEmptyState>
    );
  }

  if (!currentRefinement) {
    return (
      <SearchListEmptyState
        title="Over 2 million articles"
        message="Search our archive of articles from The Times and The Sunday Times going all the way back to 2001"
        icon="search"
        trackingData={{
          object: "Search",
          action: "Empty state",
          component: "Search",
          attrs: { eventTime: new Date() },
        }}
      />
    );
  }
  return (
    <SearchList
      hits={hits}
      onArticlePress={onArticlePress}
      fetchMore={handleFetchMore}
    />
  );
};

const connectedWithHits = connectInfiniteHits(SearchResults);
export default connectSearchBox(connectedWithHits);
