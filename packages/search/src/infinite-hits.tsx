import React, { FC } from "react";
import {
  connectInfiniteHits,
  connectSearchBox,
} from "react-instantsearch-native";
import { View } from "react-native";
import {
  InfiniteHitsProvided,
  SearchBoxProvided,
} from "react-instantsearch-core";
import EmptySearchMessage from "@times-components-native/search/src/empty-search-message";
import { Hit } from "./types";
import SearchList from "@times-components-native/search/src/search-list/search-list";

export interface InfiniteHitsProps
  extends InfiniteHitsProvided<Hit>,
    SearchBoxProvided {
  onArticlePress: (url: string) => void;
}

const InfiniteHits: FC<InfiniteHitsProps> = (props) => {
  const {
    hits,
    refineNext,
    hasMore,
    onArticlePress,
    currentRefinement,
  } = props;
  const handleFetchMore = () => {
    if (!hasMore) {
      return null;
    }
    refineNext();
  };

  if (!currentRefinement) {
    return <EmptySearchMessage />;
  }

  return (
    <View>
      <SearchList
        hits={hits}
        onArticlePress={onArticlePress}
        fetchMore={handleFetchMore}
      />
    </View>
  );
};

const connectedWithHits = connectInfiniteHits(InfiniteHits);
export default connectSearchBox(connectedWithHits);
