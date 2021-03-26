import React, { FC, useEffect, useState } from "react";
import InfiniteHits from "@times-components-native/search/src/infiniteHits";
import { SearchBarComponent } from "./searchBar/searchBar";
import { connectSearchBox, InstantSearch } from "react-instantsearch-native";
import algoliasearch, { SearchClient } from "algoliasearch";
import { withTrackingContext } from "@times-components-native/tracking";
import NetInfo from "@react-native-community/netinfo";

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
  const [isConnected, setIsConnected] = useState<boolean | null>(true);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  if (!algoliaConfig) {
    return null;
  }

  const ConnectedSearchBar = connectSearchBox((props) => (
    <SearchBarComponent {...props} isConnected={isConnected} />
  ));
  return (
    <InstantSearch
      indexName={algoliaConfig.ALGOLIA_INDEX}
      searchClient={getSearchClient(algoliaConfig)}
    >
      <ConnectedSearchBar />
      <InfiniteHits onArticlePress={onArticlePress} isConnected={isConnected} />
    </InstantSearch>
  );
};

const trackingContext = (Component: React.FC<any>) =>
  withTrackingContext(Component, {
    getAttrs: () => ({}),
    trackingObjectName: "Search",
  });

export default trackingContext(Search);
