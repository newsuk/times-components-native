import React, { FC, useState } from "react";
import algoliasearch from "algoliasearch";
import { InstantSearch } from "react-instantsearch-native";
import InfiniteHits from "@times-components-native/search/src/infinite-hits";
import { withTrackingContext } from "@times-components-native/tracking";
import { SearchBar } from "./search-bar/search-bar";
import { ALGOLIA_API_KEY, ALGOLIA_APP_ID, ALGOLIA_INDEX } from "./config";
import { GestureResponderEvent } from "react-native";

const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);

export interface SearchProps {
}

export interface AlgoliaSearchState {
  query: string;
  page: number;
}

const Search: FC<SearchProps> = () => {
  const [searchState, setSearchState] = useState<AlgoliaSearchState>({
    query: "",
    page: 1,
  });
  console.log("searchState", searchState);
  const handleStateChange = (args: AlgoliaSearchState) => {
    setSearchState(args);
  };

  const handleArticlePress = (
    e: GestureResponderEvent,
    { id, url }: { id: string; url: string },
  ) => {
    console.log("Article press", e, { id, url });
  };

  return (
    <InstantSearch
      indexName={ALGOLIA_INDEX}
      searchClient={searchClient}
      onSearchStateChange={handleStateChange}
    >
      <SearchBar />
      <InfiniteHits
        onArticlePress={handleArticlePress}
        query={searchState.query}
      />
    </InstantSearch>
  );
};

const trackingContext = (Component: React.FC<any>) =>
  withTrackingContext(Component, {
    getAttrs: () => ({}),
    trackingObjectName: "Search",
  });

export default trackingContext(Search);
