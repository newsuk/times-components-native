import React from "react";
import { NativeModules } from "react-native";
import Search from "@times-components-native/search";
import withNativeProvider from "../with-native-provider";

const { onArticlePress } = NativeModules.SearchEvents;
const { track } = NativeModules.ReactAnalytics;

const SearchPage = () => {
  const SearchPageView = withNativeProvider(
    <Search analyticsStream={track} onArticlePress={onArticlePress} />,
  );

  return <SearchPageView />;
};

SearchPage.propTypes = {};

export default SearchPage;
