import React from "react";
import { View } from "react-native";

import ArticleImage from "@times-components-native/article-image";
import Context from "@times-components-native/context/src/context";
import PullQuote from "@times-components-native/pull-quote";
import { colours } from "@times-components-native/styleguide";
import { ArticleImageProps, InlineItemProps, PullQuoteProps } from "../types";

export const renderInlineItem = (itemProps: InlineItemProps) => {
  if (!itemProps) return null;

  const { originalName } = itemProps;

  if (originalName === "image") {
    const articleImageProps = itemProps as ArticleImageProps;
    return <ArticleImage {...articleImageProps} />;
  }
  if (originalName === "pullQuote") {
    const pullQuoteProps = itemProps as PullQuoteProps;
    const { children, width } = pullQuoteProps;
    const itemContent = children[0].string;
    return (
      <Context.Consumer>
        {({
          theme: { pullQuoteFont, sectionColour = colours.section.default },
        }) => (
          <View style={{ width }}>
            <PullQuote
              {...pullQuoteProps}
              font={pullQuoteFont}
              quoteColour={sectionColour}
            >
              {itemContent}
            </PullQuote>
          </View>
        )}
      </Context.Consumer>
    );
  }
};
