import React, { FC, useEffect } from "react";
import { NativeModules, Keyboard } from "react-native";
import { SearchBarComponent } from "./search-bar/search-bar";
import SearchResults from "@times-components-native/search/src/search-results";
import { connectSearchBox, InstantSearch } from "react-instantsearch-native";
import algoliasearch, { SearchClient } from "algoliasearch";
import { useIsConnected } from "@times-components-native/utils/src/useIsConnected";

const { track } = NativeModules.ReactAnalytics;

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
  const isConnected = useIsConnected();

  const ConnectedSearchBar = connectSearchBox((props) => (
    <SearchBarComponent {...props} isConnected={isConnected} />
  ));

  const handleOnArticlePress = (url: string) => {
    onArticlePress(url);
    Keyboard.dismiss();
  };

  useEffect(() => {
    track({
      object: "Search",
      action: "Viewed",
      component: "Page",
      attrs: {},
    });
  }, []);

  return (
    <InstantSearch
      indexName={algoliaConfig.ALGOLIA_INDEX}
      searchClient={getSearchClient(algoliaConfig)}
    >
      <ConnectedSearchBar />
      <SearchResults
        onArticlePress={handleOnArticlePress}
        isConnected={isConnected}
      />
    </InstantSearch>
  );
};

export default Search;
