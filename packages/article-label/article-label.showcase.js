/* eslint-disable react/prop-types */
import React from "react";
import pick from "lodash.pick";
import { sections } from "@tcn/storybook";
import { colours } from "@tcn/styleguide";
import ArticleLabel from "./src/article-label";

export default {
  children: [
    {
      component: ({ select }) => (
        <ArticleLabel
          color={select(
            "Section",
            pick(colours.section, sections),
            colours.section.default
          )}
          title="swimming"
        />
      ),
      name: "Article Label",
      type: "story"
    }
  ],
  name: "Primitives/Article Label"
};
