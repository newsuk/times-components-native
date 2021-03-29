import React, { FC } from "react";
import { connectHighlight } from "react-instantsearch-native";
import { HighlightProps } from "react-instantsearch-core";
import { Hit } from "../types";
import { StyleSheet, Text } from "react-native";
import { colours } from "@times-components-native/styleguide";

export type SearchListItemSnippetProps = HighlightProps<Hit["_snippetResult"]>;

const removeHtmlTags = /(<([^>]+)>)/gi;

const SearchListItemSnippet: FC<SearchListItemSnippetProps> = ({
  highlight,
  attribute,
  hit,
}) => {
  const parsedHit = highlight({
    highlightProperty: "_snippetResult",
    attribute,
    hit,
  });

  return (
    <Text>
      {parsedHit.map((result, index) => (
        <Text style={styles.text} key={index}>
          {result.isHighlighted ? (
            <Text style={styles.hightlighted}>{result.value}</Text>
          ) : (
            result.value.replace(removeHtmlTags, "")
          )}
        </Text>
      ))}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colours.functional.secondary,
  },
  hightlighted: {
    color: colours.functional.black,
  },
});

// @FIXME: TYPES
export default connectHighlight(SearchListItemSnippet);
