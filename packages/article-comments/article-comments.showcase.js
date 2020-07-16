import React from "react";
import ArticleComments from "./src/article-comments";

export default {
  children: [
    {
      component: () => (
        <ArticleComments
          articleId="dummy-article-id"
          commentCount={123}
          commentsEnabled
          onCommentGuidelinesPress={() => null}
          onCommentsPress={() => null}
          url="dummy-article-url"
        />
      ),
      name: "Enabled",
      type: "story",
    },
    {
      component: () => (
        <ArticleComments
          articleId="dummy-article-id"
          commentCount={123}
          commentsEnabled={false}
          onCommentGuidelinesPress={() => null}
          onCommentsPress={() => null}
          url="dummy-article-url"
        />
      ),
      name: "Disabled",
      type: "story",
    },
  ],
  name: "Composed/Article Comments",
};
