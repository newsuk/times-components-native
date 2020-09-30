import React from "react";
import { InstantSearch } from "react-instantsearch-native";
import Responsive from "@times-components-native/responsive";
import algoliasearch from "algoliasearch";
import { withTrackingContext } from "@times-components-native/tracking";

import { propTypes, defaultProps } from "./search-prop-types";
import { Hits } from "./Hits";
import { SearchBox } from "./SearchBox";

const searchClient = algoliasearch(
  "PZGYBTWG3J",
  "17c78ff1378f9a8c5d8b78ea6516ceed",
);

const Search: React.FC<{
  onArticlePress: () => void;
  initialQuery: string;
}> = ({ onArticlePress, initialQuery = "" }) => {
  const [searchState, setSearchState] = React.useState({
    query: initialQuery,
  });

  const handleStateChange = React.useCallback((v) => {
    setSearchState(v);
  }, []);

  return (
    <Responsive>
      <InstantSearch
        searchClient={searchClient}
        indexName="prod_articles"
        searchState={searchState}
        onSearchStateChange={handleStateChange}
      >
        <SearchBox />

        <Hits onArticlePress={onArticlePress} query={searchState.query} />
      </InstantSearch>
    </Responsive>
  );
};

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

const trackingContext = (Component: React.FC<any>) =>
  withTrackingContext(Component, {
    getAttrs: () => ({}),
    trackingObjectName: "Search",
  });

export default trackingContext(Search);
