import React from "react";
import {
  connectInfiniteHits,
  connectSearchBox,
} from "react-instantsearch-native";
import ArticleList from "@times-components-native/article-list";

export const Hits: any = connectSearchBox(
  connectInfiniteHits(
    ({ hits, refineNext, hasMore, onArticlePress, currentRefinement }: any) => {
      const [hasFinished, setHasFinished] = React.useState(false);

      const handleFetchMore = () => {
        if (!hasMore) {
          setHasFinished(true);
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
