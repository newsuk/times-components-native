import React, { FC } from "react";
import InfiniteHits from "@times-components-native/search/src/infinite-hits";
import { withTrackingContext } from "@times-components-native/tracking";
import { SearchBar } from "./search-bar/search-bar";
import { InstantSearch } from "react-instantsearch-native";
import algoliasearch from "algoliasearch";

export interface SearchProps {
  onArticlePress: (url: string) => void;
  algoliaConfig: {
    ALGOLIA_APP_ID: string;
    ALGOLIA_API_KEY: string;
    ALGOLIA_INDEX: string;
  };
}

let searchClient: any = null;
const getSearchClient = (algoliaConfig: SearchProps["algoliaConfig"]) => {
  if (searchClient) {
    return searchClient;
  }

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
      indexName="dev_articles_by_published_date_asc"
      searchClient={getSearchClient(algoliaConfig)}
    >
      <SearchBar />
      <InfiniteHits onArticlePress={onArticlePress} />
    </InstantSearch>
  );
};

const trackingContext = (Component: React.FC<any>) =>
  withTrackingContext(Component, {
    getAttrs: () => ({}),
    trackingObjectName: "Search",
  });

export default trackingContext(Search);
