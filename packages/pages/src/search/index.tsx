import React from "react";
import { NativeModules } from "react-native";
import { Search } from "@times-components-native/search";
import withNativeProvider from "./../with-native-provider";
import { withErrorBoundaries } from "@times-components-native/pages/src/with-error-boundaries";
import { SearchProps } from "@times-components-native/search/src/search";

const { track } = NativeModules.ReactAnalytics;
const { onArticlePress } = NativeModules.SearchEvents;
export interface SearchPageProps {
  algoliaConfig: SearchProps["algoliaConfig"] | null;
}

const SearchPage = withErrorBoundaries(
  ({ algoliaConfig = null }: SearchPageProps) => {
    console.log(algoliaConfig);

    if (!algoliaConfig) {
      return null;
    }

    const SearchPageView = withNativeProvider(
      <Search
        analyticsStream={track}
        onArticlePress={onArticlePress}
        algoliaConfig={algoliaConfig}
      />,
    );

    return <SearchPageView />;
  },
);

export default SearchPage;
