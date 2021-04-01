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
import { OfflineMessage } from "./offline-message";

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
    return <OfflineMessage />;
  }

  if (!currentRefinement) {
    return <EmptySearchMessage />;
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
