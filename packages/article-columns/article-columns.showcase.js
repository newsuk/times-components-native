import React from "react";
import { ArticleColumns } from "./article-columns";
import article from "./fixtures/article.json";
export default {
  children: [
    {
      component: () => (
        <ArticleColumns
          articleContents={article.data.article.content}
          containerHeight={500}
          containerWidth={500}
          lineHeight={18}
          bylines={article.data.article.bylines}
          style={{ lineHeight: 18 }}
          columnCount={2}
        />
      ),
      name: "Columns",
      type: "story",
    },
  ],
  name: "Composed/Article Columns",
};
