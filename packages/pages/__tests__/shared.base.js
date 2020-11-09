import React from "react";
import { scales } from "@times-components-native/styleguide";
import "./mocks";
import Page from "../src/pages";
import getAdTargetingConfig from "../src/article/ad-targeting-config";

const Article = Page("Article");

const articleData = {
  headline: "This is a headline",
  id: "this-is-a-id",
  keywords: ["this", "is", "a", "headline"],
};

export default (makeTest) => {
  it("article page", () => {
    expect(
      makeTest(
        <Article
          article={JSON.stringify({ data: { article: articleData } })}
          articleId="test-article-id"
          scale={scales.large}
          sectionName="News"
          displayWidth={1024}
          displayHeight={768}
          fontScale={1}
        />,
      ),
    ).toMatchSnapshot();
  });

  it("adConfig is set correctly", () => {
    const adTargetingConfig = getAdTargetingConfig({
      adTestMode: "testMode",
      article: articleData,
      sectionName: "sectionName",
    });

    expect(adTargetingConfig).toMatchSnapshot();
  });
};
