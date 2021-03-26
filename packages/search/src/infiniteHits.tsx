import React, { FC } from "react";
import {
  connectInfiniteHits,
  connectSearchBox,
} from "react-instantsearch-native";
import {
  InfiniteHitsProvided,
  SearchBoxProvided,
} from "react-instantsearch-core";
import EmptySearchMessage from "./emptySearchMessage";
import { Hit } from "./types";
import SearchList from "./searchList/searchList";
import { OfflineMessage } from "./offlineMessage";

export interface InfiniteHitsProps
  extends InfiniteHitsProvided<Hit>,
    SearchBoxProvided {
  onArticlePress: (url: string) => void;
  isConnected: boolean | null;
}

const InfiniteHits: FC<InfiniteHitsProps> = ({
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

const connectedWithHits = connectInfiniteHits(InfiniteHits);
export default connectSearchBox(connectedWithHits);
