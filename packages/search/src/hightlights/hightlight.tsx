import { Text } from "react-native";
import React, { FC } from "react";
import { connectHighlight } from "react-instantsearch-native";
import { Hit } from "../types";
import { HighlightProps } from "react-instantsearch-core";

const regex = /(<([^>]+)>)/gi;

export interface Hightlight extends HighlightProps<Hit> {
  attribute: string;
}

const Highlight: FC<Hightlight> = ({ highlight, attribute, hit }) => {
  console.log("hit", hit, highlight, attribute);
  const parsedHit = highlight({
    highlightProperty: "_highlightResult",
    attribute,
    hit,
  });

  return (
    <Text>
      {parsedHit.map((result, index) => {
        return (
          <Text key={index}>
            {result.isHighlighted ? (
              <Text style={{ color: "black" }}>{result.value}</Text>
            ) : (
              `${result.value.replace(regex, "").substring(0, 50)}...`
            )}
          </Text>
        );
      })}
    </Text>
  );
};

export default connectHighlight<any>(Highlight);
