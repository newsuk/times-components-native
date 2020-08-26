import ReactTestRenderer from "react-test-renderer";
import React from "react";
import { FrontPageByline } from "@times-components-native/front-page/front-page-byline";

jest.mock("@times-components-native/article-byline", () => "ArticleByline");
const bylines = [
  {
    byline: [
      {
        foo: "bar",
      },
    ],
  },
];

describe("FrontPageByline", () => {
  it("renders without keyline", () => {
    const renderer = ReactTestRenderer.create(
      <FrontPageByline byline={bylines} showKeyline={false} />,
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("renders with keyline", () => {
    const renderer = ReactTestRenderer.create(
      <FrontPageByline byline={bylines} showKeyline={true} />,
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("renders with container style", () => {
    const renderer = ReactTestRenderer.create(
      <FrontPageByline
        showKeyline={false}
        byline={bylines}
        containerStyle={{ marginBottom: 100 }}
      />,
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
