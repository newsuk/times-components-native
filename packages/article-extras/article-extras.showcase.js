import React from "react";
import { ScrollView } from "react-native";
import {
  articleExtras as makeParams,
  MockFixture,
  MockedProvider,
} from "@times-components-native/provider-test-tools";
import ArticleExtras from "./src/article-extras";

const renderExtras = (props) => (
  <MockFixture
    params={makeParams({
      ...props,
      variables: () => ({
        id: "dummy-article-id",
      }),
    })}
    render={(mocks) => (
      <MockedProvider mocks={mocks}>
        <ScrollView>
          <ArticleExtras
            analyticsStream={() => null}
            articleId="dummy-article-id"
            articleUrl="dummy-article-url"
            onCommentGuidelinesPress={() => null}
            onCommentsPress={() => null}
            onRelatedArticlePress={() => null}
            onTopicPress={() => null}
          />
        </ScrollView>
      </MockedProvider>
    )}
  />
);

export default {
  children: [
    {
      component: () => renderExtras(),
      name: "Article Extras",
      type: "story",
    },
  ],
  name: "Composed/Article Extras",
};
