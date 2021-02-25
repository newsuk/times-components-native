import React, { FC } from "react";
import {
  connectInfiniteHits,
  connectSearchBox,
} from "react-instantsearch-native";
import ArticleList from "@times-components-native/article-list";
import { GestureResponderEvent, View } from "react-native";
import {
  InfiniteHitsProvided,
  SearchBoxProvided,
} from "react-instantsearch-core";
import EmptySearchMessage from "@times-components-native/search/src/empty-search-message";
import Hightlights from "@times-components-native/search/src/hightlights/hightlights";
import { Hit } from "./types";

export interface InfiniteHitsProps
  extends InfiniteHitsProvided<Hit>,
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
  console.log(props);
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
      <Hightlights hits={hits} />
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
    </View>
  );
};

const connectedWithHits = connectInfiniteHits(InfiniteHits);
export default connectSearchBox(connectedWithHits);
