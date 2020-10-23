import { transformContentForFront } from "@times-components-native/front-page/utils/transform-content-for-front";
import MockMarkup from "@times-components-native/fixture-generator/src/mock-markup";
import { ArticleContent } from "@times-components-native/types";

describe("indentation", () => {
  it("does not add indent to first paragraph", () => {
    const content = new MockMarkup().addParagraphs(10).get();

    const indentedContent = transformContentForFront(content, false);

    expect(indentedContent[0].attributes.tab).toBeFalsy();
  });

  it("does add indents to subsequent paragraphs", () => {
    const content = new MockMarkup().addParagraphs(10).get();

    const indentedContent = transformContentForFront(content, false);

    expect(indentedContent[1].attributes.tab).toBeTruthy();
  });

  it("does not add indent to non-paragraphs", () => {
    const content = new MockMarkup().addAds(2).get();

    const indentedContent = transformContentForFront(content, false);
    expect(indentedContent[0].attributes.tab).toBeFalsy();
    expect(indentedContent[1].attributes.tab).toBeFalsy();
  });
});

describe("hyphenation", () => {
  it("hyphenates justified content", () => {
    const content = [
      {
        name: "paragraph",
        children: [
          {
            name: "text",
            children: [],
            attributes: {
              value: "hyphenation",
            },
          },
        ],
      },
    ] as ArticleContent[];

    const transformedContent = transformContentForFront(content, true);

    expect(transformedContent).toEqual([
      {
        name: "paragraph",
        attributes: { tab: false },
        children: [
          {
            name: "text",
            children: [],
            attributes: {
              value: "hy­phen­ation",
            },
          },
        ],
      },
    ]);
  });

  it("does not hyphenate unjustified content", () => {
    const content = [
      {
        name: "paragraph",
        children: [
          {
            name: "text",
            children: [],
            attributes: {
              value: "hyphenation",
            },
          },
        ],
      },
    ] as ArticleContent[];

    const transformedContent = transformContentForFront(content, false);

    expect(transformedContent).toEqual([
      {
        name: "paragraph",
        attributes: { tab: false },
        children: [
          {
            name: "text",
            children: [],
            attributes: {
              value: "hyphenation",
            },
          },
        ],
      },
    ]);
  });
});
