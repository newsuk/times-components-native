import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Hit } from "../types";
import {
  ArticleSummaryHeadline,
  ArticleSummaryLabel,
} from "@times-components-native/article-summary";
import { getHeadline } from "@times-components-native/utils";
import { ResponsiveContext } from "@times-components-native/responsive";
import styleguide from "@times-components-native/styleguide";
import Link from "@times-components-native/link";
import FormattedDate from "./formatted-date";
import SearchListItemByline from "./search-list-item-byline";
import SearchListItemSnippet from "./search-list-item-snippet";

export interface SearchListItemProps {
  item: Hit;
  onItemPress: (url: string) => void;
}

const SearchListItem: FC<SearchListItemProps> = ({ item, onItemPress }) => {
  const { headline, shortHeadline, url } = item;
  return (
    <ResponsiveContext.Consumer>
      {({ isTablet }) => (
        <Link onPress={() => onItemPress(url)}>
          <View
            style={
              isTablet
                ? styles.listItemContainerTablet
                : styles.listItemContainer
            }
          >
            <ArticleSummaryLabel
              articleReadState={{ animate: false, read: false }}
              title={item.label}
              isVideo={item.hasVideo}
              color={
                (item.section &&
                  colours.section[
                    item.section as keyof typeof colours.section
                  ]) ||
                colours.section.default
              }
            />
            <ArticleSummaryHeadline
              headline={getHeadline(headline, shortHeadline)}
            />
            <SearchListItemByline byline={item.byline} />
            <SearchListItemSnippet attribute="content" hit={item} />
            <FormattedDate
              publishedTime={item.publishedTime}
              publicationName={item.publicationName}
            />
          </View>
        </Link>
      )}
    </ResponsiveContext.Consumer>
  );
};

const { colours, spacing } = styleguide();

const styles = StyleSheet.create({
  listItemContainer: {
    paddingHorizontal: spacing(2),
    paddingVertical: spacing(2),
  },
  listItemContainerTablet: {
    paddingVertical: spacing(3),
  },
});

export default SearchListItem;
