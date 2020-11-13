import React from "react";

import Ad from "@times-components-native/ad";
import ArticleImage from "@times-components-native/article-image";
import PullQuote from "@times-components-native/pull-quote";
import {
  AdProps,
  ArticleImageProps,
  InlineItemProps,
  PullQuoteProps,
} from "../types";

export const renderInlineItem = (itemProps: InlineItemProps) => {
  if (!itemProps) return null;

  const { originalName } = itemProps;

  if (originalName === "ad") {
    const adProps = itemProps as AdProps;
    return <Ad {...adProps} display="inline" />;
  }

  if (originalName === "image") {
    const articleImageProps = itemProps as ArticleImageProps;
    return <ArticleImage {...articleImageProps} />;
  }

  if (originalName === "pullQuote") {
    const pullQuoteProps = itemProps as PullQuoteProps;
    const { children } = pullQuoteProps;
    const itemContent = children[0].string;
    return <PullQuote {...pullQuoteProps}>{itemContent}</PullQuote>;
  }
};
