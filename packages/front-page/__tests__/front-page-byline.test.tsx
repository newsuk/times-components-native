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
    let renderer = ReactTestRenderer.create(
      <FrontPageByline byline={bylines} withKeyline={false} />,
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("renders with keyline", () => {
    let renderer = ReactTestRenderer.create(
      <FrontPageByline byline={bylines} withKeyline={true} />,
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("renders with container style", () => {
    let renderer = ReactTestRenderer.create(
      <FrontPageByline
        withKeyline={false}
        byline={bylines}
        containerStyle={{ marginBottom: 100 }}
      />,
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
