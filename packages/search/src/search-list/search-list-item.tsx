import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Hit } from "../types";
import {
  ArticleSummaryHeadline,
  ArticleSummaryLabel,
} from "@times-components-native/article-summary";
import { getHeadline } from "@times-components-native/utils";
import { ResponsiveContext } from "@times-components-native/responsive";
import styleguide, { tabletWidth } from "@times-components-native/styleguide";
import Link from "@times-components-native/link";
import Highlight from "@times-components-native/search/src/hightlights/hightlight";
import FormattedDate from "@times-components-native/search/src/search-list/formatted-date";

export interface SearchListItemProps {
  item: Hit;
  onItemPress: (url: string) => void;
}

const SearchListItem: FC<SearchListItemProps> = ({ item, onItemPress }) => {
  const { headline, shortHeadline, url } = item;
  console.log("item", item.section, item.label);
  return (
    <ResponsiveContext.Consumer>
      {({ isTablet }) => (
        <View style={styles.container}>
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
                  (item.section && colours.section[item.section]) ||
                  colours.section.default
                }
              />
              <ArticleSummaryHeadline
                headline={getHeadline(headline, shortHeadline)}
              />
              <Highlight attribute="content" key={item.url} hit={item} />
              <FormattedDate
                publishedTime={item.publishedTime}
                publicationName={item.publicationName}
              />
            </View>
          </Link>
        </View>
      )}
    </ResponsiveContext.Consumer>
  );
};

const { colours, spacing } = styleguide();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: tabletWidth,
    flexDirection: "row",
  },
  listItemContainer: {
    paddingHorizontal: spacing(2),
    paddingVertical: spacing(2),
  },
  listItemContainerTablet: {
    paddingVertical: spacing(3),
  },
  listItemSeparator: {
    backgroundColor: colours.functional.keyline,
    height: 1,
    flex: 1,
    maxWidth: tabletWidth,
  },
  listItemSeparatorContainer: {
    paddingHorizontal: spacing(2),
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default SearchListItem;
