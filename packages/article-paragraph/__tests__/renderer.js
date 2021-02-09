import React from "react";
import { renderTree } from "@times-components-native/markup-forest";
import renderers from "@times-components-native/markup";
import ArticleParagraph from "../src";

export default (ast) => {
  const rendered = renderTree(ast, {
    ...renderers,
    paragraph(key, attributes, children, indx) {
      return (
        <ArticleParagraph
          ast={children}
          key={indx}
          uid={indx}
          attributes={attributes}
        >
          {children}
        </ArticleParagraph>
      );
    },
  });
  return rendered;
};
