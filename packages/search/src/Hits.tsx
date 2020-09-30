import React from "react";
import {
  connectInfiniteHits,
  connectSearchBox,
} from "react-instantsearch-native";
import ArticleList from "@times-components-native/article-list";

export const Hits: any = connectSearchBox(
  connectInfiniteHits(
    ({ hits, refineNext, hasMore, onArticlePress, currentRefinement }: any) => {
<<<<<<< HEAD
      const [hasFinished, setHasFinished] = React.useState(false);

      const handleFetchMore = () => {
        if (!hasMore) {
          setHasFinished(true);
=======
      const handleFetchMore = () => {
        if (!hasMore) {
>>>>>>> feat: initial pass at a new Algolia powered search page
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
            !currentRefinement
              ? ""
              : "There were no results for your search term"
          }
          error={false}
          fetchMore={handleFetchMore}
          showImages={false}
        />
      );
    },
  ),
);
