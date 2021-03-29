import React, { FC } from "react";
import SearchResults from "@times-components-native/search/src/search-results";
import { SearchBar } from "./search-bar/search-bar";
import { InstantSearch } from "react-instantsearch-native";
import algoliasearch, { SearchClient } from "algoliasearch";
import { withTrackingContext } from "@times-components-native/tracking";

export interface SearchProps {
  onArticlePress: (url: string) => void;
  algoliaConfig: {
    ALGOLIA_APP_ID: string;
    ALGOLIA_API_KEY: string;
    ALGOLIA_INDEX: string;
  };
}

let searchClient: SearchClient | null = null;
const getSearchClient = (algoliaConfig: SearchProps["algoliaConfig"]) => {
  if (searchClient) return searchClient;

  searchClient = algoliasearch(
    algoliaConfig.ALGOLIA_APP_ID,
    algoliaConfig.ALGOLIA_API_KEY,
  );
  return searchClient;
};

const Search: FC<SearchProps> = ({ onArticlePress, algoliaConfig }) => {
  if (!algoliaConfig) {
    return null;
  }
  return (
    <InstantSearch
      indexName={algoliaConfig.ALGOLIA_INDEX}
      searchClient={getSearchClient(algoliaConfig)}
    >
      <SearchBar />
      <SearchResults onArticlePress={onArticlePress} />
    </InstantSearch>
  );
};

const trackingContext = (Component: React.FC<any>) =>
  withTrackingContext(Component, {
    getAttrs: () => ({}),
    trackingObjectName: "Search",
  });

export default trackingContext(Search);
