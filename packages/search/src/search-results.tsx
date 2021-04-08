import React, { FC } from "react";
import {
  connectInfiniteHits,
  connectSearchBox,
} from "react-instantsearch-native";
import {
  InfiniteHitsProvided,
  SearchBoxProvided,
} from "react-instantsearch-core";
import EmptySearchMessage from "./empty-search-message";
import { Hit } from "./types";
import SearchList from "./search-list/search-list";
import SearchListEmptyState from "@times-components-native/search/src/search-list/search-list-empty-state";

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
      />
    );
  }

  if (!currentRefinement) {
    return (
      <SearchListEmptyState
        title="Over 2 million articles"
        message="Search our archive of over 2 million articles from The Times and The Sunday Times going all the way back to 2001"
        icon="search"
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
