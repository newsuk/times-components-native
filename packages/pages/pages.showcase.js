/* eslint-disable react/prop-types */
import React from "react";
import { sections } from "@times-components-native/storybook";
import Page from "./src/pages";
import Section from "./section-showcase-helper";

const Article = Page("Article");
const AuthorProfile = Page("AuthorProfile");
const Topic = Page("Topic");
const Search = Page("Search");

export default {
  children: [
    {
      component: ({ text }) => {
        const articleId = text(
          "Article id",
          "4938a3d4-8109-11e8-a645-f0478472c67b",
        );

        return <Article articleId={articleId} />;
      },
      name: "Article",
      type: "story",
    },
    {
      component: ({ text }) => {
        const authorSlug = text("Author slug", "deborah-haynes");

        return <AuthorProfile authorSlug={authorSlug} />;
      },
      name: "AuthorProfile",
      type: "story",
    },
    {
      component: ({ select, text }) => {
        const editionId = text(
          "Edition id",
          "2b6e462c-225f-11e9-b782-40e94f317da5",
        );
        const sectionTitle = select("Section", sections, "News");

        return <Section editionId={editionId} sectionTitle={sectionTitle} />;
      },
      name: "Section",
      type: "story",
    },
    {
      component: ({ text }) => {
        const topicSlug = text("Topic slug", "brexit");

        return <Topic topicSlug={topicSlug} />;
      },
      name: "Topic",
      type: "story",
    },
    {
      component: () => (
        <Search
          algoliaConfig={{
            ALGOLIA_APP_ID: "testingLQ0QIEJAZP",
            ALGOLIA_API_KEY: "583d94fc81c0da8395ac9ec1ed76fbfe",
            ALGOLIA_INDEX: "ci_articles",
          }}
        />
      ),
      name: "Search",
      type: "story",
    },
  ],
  name: "Pages/Pages",
};
