import React from "react";
import Context from "@times-components-native/context";
import Link from "@times-components-native/link";
import RelatedArticleItem from "./related-article-item.base";
import relatedArticlesItemTrackingEvents from "./related-articles-item-tracking-events";

const RelatedArticleItemWeb = props => (
  <div data-testid="related-article-item">
    <RelatedArticleItem {...props}>
      {({ article, card, onPress }) => (
        <Context.Consumer>
          {({ makeArticleUrl }) => (
            <Link
              linkStyle={{ padding: 10 }}
              onPress={e => onPress(e, { url: makeArticleUrl(article) })}
              url={makeArticleUrl(article)}
            >
              {card}
            </Link>
          )}
        </Context.Consumer>
      )}
    </RelatedArticleItem>
  </div>
);
RelatedArticleItemWeb.displayName = "RelatedArticleItem";

export default relatedArticlesItemTrackingEvents(RelatedArticleItemWeb);
