import React, { FC } from "react";
import { connectInfiniteHits, connectSearchBox, } from "react-instantsearch-native";
import ArticleList from "@times-components-native/article-list";
import { GestureResponderEvent } from "react-native";
import { InfiniteHitsProvided } from "react-instantsearch-core";

export interface InfiniteHitsProps extends InfiniteHitsProvided {
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
  console.log(props);
  const handleFetchMore = () => {
    if (!hasMore) {
      return Promise.resolve();
    }

    refineNext();
    return Promise.resolve();
  };

  return (
    <ArticleList
      adConfig={{}}
      articles={currentRefinement ? hits : []}
      articlesLoading={false}
      onArticlePress={onArticlePress}
      emptyStateMessage={
        !currentRefinement ? "" : "There were no results for your search term"
      }
      error={false}
      fetchMore={handleFetchMore}
      showImages={false}
    />
  );
};

const connectedWithHits = connectInfiniteHits(InfiniteHits);
export default connectSearchBox(connectedWithHits);
