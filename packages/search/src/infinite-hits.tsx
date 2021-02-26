import React, { FC } from "react";
import { connectInfiniteHits, connectSearchBox, } from "react-instantsearch-native";
import { View } from "react-native";
import { InfiniteHitsProvided, SearchBoxProvided, } from "react-instantsearch-core";
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
      return Promise.resolve();
    }

    refineNext();
    return Promise.resolve();
  };

  if (!currentRefinement) {
    return <EmptySearchMessage />;
  }

  console.log("hits", hits);

  return (
    <View>
      {/*<Hightlights hits={hits} />*/}
      {/*<ArticleList*/}
      {/*  adConfig={{}}*/}
      {/*  articles={currentRefinement ? hits : []}*/}
      {/*  articlesLoading={false}*/}
      {/*  onArticlePress={onArticlePress}*/}
      {/*  emptyStateMessage="There were no results for your search term"*/}
      {/*  error={false}*/}
      {/*  fetchMore={handleFetchMore}*/}
      {/*  showImages={false}*/}
      {/*  withResume*/}
      {/*/>*/}
      <SearchList
        hits={hits}
        emptyStateMessage="There were no results for your search term"
        onArticlePress={onArticlePress}
        fetchMore={handleFetchMore}
      />
    </View>
  );
};

const connectedWithHits = connectInfiniteHits(InfiniteHits);
export default connectSearchBox(connectedWithHits);
