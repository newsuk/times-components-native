import { transformContentForFront } from "@times-components-native/front-page/utils/transform-content-for-front";
import MockMarkup from "@times-components-native/fixture-generator/src/mock-markup";
import { ArticleContent } from "@times-components-native/types";
import { TemplateType } from "@times-components-native/fixture-generator/src/types";

const template: TemplateType = TemplateType.Magazinestandard;
describe("indentation", () => {
  it("does not add indent to first paragraph", () => {
    const content = new MockMarkup().addParagraphs(10).get();

    const indentedContent = transformContentForFront(content, template);

    expect(indentedContent[0].attributes.tab).toBeFalsy();
  });

  it("does add indents to subsequent paragraphs", () => {
    const content = new MockMarkup().addParagraphs(10).get();

    const indentedContent = transformContentForFront(content, template);

    expect(indentedContent[1].attributes.tab).toBeTruthy();
  });

  it("does not add indent to non-paragraphs", () => {
    const content = new MockMarkup().addAds(2).get();

    const indentedContent = transformContentForFront(content, template);
    expect(indentedContent[0].attributes.tab).toBeFalsy();
    expect(indentedContent[1].attributes.tab).toBeFalsy();
  });
});

describe("hyphenation", () => {
  it("hyphenates the content", () => {
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

    const transformedContent = transformContentForFront(content, template);

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

  it("does not hyphenate content when maincomment template used", () => {
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

    const transformedContent = transformContentForFront(
      content,
      TemplateType.Maincomment,
    );

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
