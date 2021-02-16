import React, { FC } from "react";
import { connectInfiniteHits, connectSearchBox,  } from "react-instantsearch-native";
import ArticleList from "@times-components-native/article-list";

export interface InfiniteHitsProps {
  onArticlePress: () => void;
}

const InfiniteHits: FC<InfiniteHitsProps> = connectInfiniteHits((props) => {
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
});

export default connectSearchBox(InfiniteHits);
