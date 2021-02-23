import React, { FC } from "react";
import {
  connectInfiniteHits,
  connectSearchBox,
} from "react-instantsearch-native";
import ArticleList from "@times-components-native/article-list";
import { GestureResponderEvent } from "react-native";
import {
  InfiniteHitsProvided,
  SearchBoxProvided,
} from "react-instantsearch-core";
import EmptySearchMessage from "@times-components-native/search/src/empty-search-message";

export interface InfiniteHitsProps
  extends InfiniteHitsProvided,
    SearchBoxProvided {
  onArticlePress: (
    e: GestureResponderEvent,
    { id, url }: { id: string; url: string },
  ) => void;
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
      return Promise.resolve();
    }

    refineNext();
    return Promise.resolve();
  };

  if (!currentRefinement) {
    return <EmptySearchMessage />;
  }

  return (
    <ArticleList
      adConfig={{}}
      articles={currentRefinement ? hits : []}
      articlesLoading={false}
      onArticlePress={onArticlePress}
      emptyStateMessage="There were no results for your search term"
      error={false}
      fetchMore={handleFetchMore}
      showImages={false}
      withResume
    />
  );
};

const connectedWithHits = connectInfiniteHits(InfiniteHits);
export default connectSearchBox(connectedWithHits);
