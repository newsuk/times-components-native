import React, { FC, useState } from "react";
import algoliasearch from "algoliasearch";
import { InstantSearch } from "react-instantsearch-native";
import InfiniteHits from "@times-components-native/search/src/infinite-hits";
import { withTrackingContext } from "@times-components-native/tracking";
import { SearchBar } from "./search-bar/search-bar";
import { ALGOLIA_API_KEY, ALGOLIA_APP_ID, ALGOLIA_INDEX } from "./config";

const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);

export interface SearchProps {}

const Search: FC<SearchProps> = () => {
  const [searchState, setSearchState] = useState({
    query: "",
  });
  const handleStateChange = (args) => {
    setSearchState(args);
  };

  return (
    <InstantSearch
      indexName={ALGOLIA_INDEX}
      searchClient={searchClient}
      onSearchStateChange={handleStateChange}
    >
      <SearchBar />
      <InfiniteHits onArticlePress={() => {}} query={searchState.query} />
    </InstantSearch>
  );
};

const trackingContext = (Component: React.FC<any>) =>
  withTrackingContext(Component, {
    getAttrs: () => ({}),
    trackingObjectName: "Search",
  });

export default trackingContext(Search);
