import React from "react";
import { View } from "react-native";
import TestRenderer from "react-test-renderer";

import { ArticleContent } from "@times-components-native/types";
import { ColumnParameters } from "../../types";
import { SingleColumn } from "../../render/Columns";

const articleContent: ArticleContent = {
  name: "paragraph",
  children: [
    {
      name: "text",
      children: [],
      attributes: {
        value: "Paragraph text.",
      },
    },
  ],
};

const columnParameters: ColumnParameters = {
  columnWidth: 100,
  columnHeight: 200,
  columnCount: 3,
  columnLineHeight: 20,
};
const style = { fontSize: 14, lineHeight: 18 };
describe("SingleColumn", () => {
  it("renders correctly", () => {
    const column = [articleContent];
    const renderer = TestRenderer.create(
      <SingleColumn
        columnParameters={columnParameters}
        column={column}
        style={style}
      />,
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("renders additional invisible line to ensure last visible line is justified", () => {
    const column = [{ ...articleContent, split: true }];

    const renderer = TestRenderer.create(
      <SingleColumn
        columnParameters={columnParameters}
        column={column}
        style={style}
      />,
    );

    // @ts-ignore findByType does accept strings
    const renderedText = renderer.root.findByType("Text").children[1].props
      .children;
    expect(renderedText).toMatch(/_____$/);
  });

  it("renders component before column when provided", () => {
    const column = [articleContent];

    const renderer = TestRenderer.create(
      <SingleColumn
        columnParameters={columnParameters}
        column={column}
        style={style}
        renderBefore={() => <View testID={"BeforeColumn"} />}
      />,
    );

    // assert component exists
    const beforeColumn = renderer.root.findByProps({ testID: "BeforeColumn" });
    expect(beforeColumn).not.toBeNull();

    // assert correct ordering
    // @ts-ignore
    const children = renderer.toJSON().children!;
    // @ts-ignore
    expect(children[0].props).toEqual({ testID: "BeforeColumn" });
    // @ts-ignore
    expect(children[1].props["testID"]).toEqual("SingleColumn:Content");
  });
});
