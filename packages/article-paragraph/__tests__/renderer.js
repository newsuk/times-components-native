import React from "react";
import { renderTree } from "@times-components-native/markup-forest";
import renderers from "@times-components-native/markup";
import ArticleParagraph from "../src";

export default (ast) => {
  const rendered = renderTree(ast, {
    ...renderers,
    paragraph(key, attributes, children, indx, node) {
      return (
        <ArticleParagraph
          ast={node}
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
