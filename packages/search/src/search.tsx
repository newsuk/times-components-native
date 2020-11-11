import React from "react";
import { InstantSearch } from "react-instantsearch-native";
import Responsive from "@times-components-native/responsive";
import algoliasearch from "algoliasearch";
import { withTrackingContext } from "@times-components-native/tracking";
import BottomSheet from "reanimated-bottom-sheet";

import { propTypes, defaultProps } from "./search-prop-types";
import { Hits } from "./Hits";
import { SearchBox } from "./SearchBox";
import { SearchFilters } from "./SearchFilters";
import { View, StyleSheet } from "react-native";
import { endOfDay, startOfDay, subDays } from "date-fns";

const searchClient = algoliasearch("", "");

const timeRanges = [
  {
    label: "All",
  },
  {
    label: "Today",
    start: parseInt((startOfDay(new Date()).getTime() / 1000).toFixed(2)),
  },
  {
    label: "Yesterday",
    start: parseInt(
      (subDays(startOfDay(new Date()), 1).getTime() / 1000).toFixed(2),
    ),
    end: parseInt(
      (subDays(endOfDay(new Date()), 1).getTime() / 1000).toFixed(2),
    ),
  },
  {
    label: "Past week",
    value: "pastWeek",
    start: parseInt(
      (subDays(startOfDay(new Date()), 7).getTime() / 1000).toFixed(2),
    ),
  },
  {
    label: "Past 4 weeks",
    start: parseInt(
      (subDays(startOfDay(new Date()), 28).getTime() / 1000).toFixed(2),
    ),
  },
  {
    label: "Past year",
    start: parseInt(
      (subDays(startOfDay(new Date()), 365).getTime() / 1000).toFixed(2),
    ),
  },
];

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
    <>
      <Responsive>
        <InstantSearch
          searchClient={searchClient}
          indexName="prod_articles"
          searchState={searchState}
          onSearchStateChange={handleStateChange}
        >
          <View style={styles.container}>
            <SearchBox />
            <SearchFilters attribute="date_timestamp" items={timeRanges} />

            <Hits onArticlePress={onArticlePress} query={searchState.query} />
          </View>
        </InstantSearch>
      </Responsive>
    </>
  );
};

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const trackingContext = (Component: React.FC<any>) =>
  withTrackingContext(Component, {
    getAttrs: () => ({}),
    trackingObjectName: "Search",
  });

export default trackingContext(Search);
