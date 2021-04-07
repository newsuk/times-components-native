import React from "react";
import { NativeModules } from "react-native";
import { Search } from "@times-components-native/search";
import { withErrorBoundaries } from "@times-components-native/pages/src/with-error-boundaries";
import { SearchProps } from "@times-components-native/search/src/search";

const { track } = NativeModules.ReactAnalytics;
const { onArticlePress } = NativeModules.SearchEvents;

export interface SearchPageProps {
  algoliaConfig: SearchProps["algoliaConfig"] | null;
}

const SearchPage = withErrorBoundaries(
  ({ algoliaConfig = null }: SearchPageProps) => {
    if (!algoliaConfig) {
      return null;
    }

    return (
      <Search
        analyticsStream={track}
        onArticlePress={onArticlePress}
        algoliaConfig={algoliaConfig}
      />
    );
  },
);

export default SearchPage;
