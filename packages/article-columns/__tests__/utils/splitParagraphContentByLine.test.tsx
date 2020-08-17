import { ArticleMeasurements } from "../../types";

import {
  calculateArticleContentSize,
  splitParagraphContent,
  splitParagraphContentByLine,
  splitParagraphContentChild,
} from "../../utils/splitParagraphContentByLine";
import { ParagraphContent } from "../../domain-types";
import { uuid } from "../../utils/random";

jest.mock("../../utils/random");

const columnLineHeight = 20;
describe("calculateArticleContentSize", () => {
  it("gets size of child that has text", () => {
    const size = calculateArticleContentSize({
      name: "paragraph",
      id: "1",
      children: [
        {
          name: "text",
          attributes: {
            value: "abc",
          },
          children: [],
        },
      ],
    });
    expect(size).toEqual(3);
  });

  it("gets size of child that has a link", () => {
    const size = calculateArticleContentSize({
      name: "paragraph",
      id: "1",
      children: [
        {
          name: "link",
          attributes: {
            href: "https://www.thetimes.co.uk/article/coronavirus-3g6vmvrpt",
            type: "article",
            canonicalId: "coronavirus-3g6vmvrpt",
          },
          children: [
            {
              name: "text",
              attributes: {
                value: "linktest",
              },
              children: [],
            },
          ],
        },
      ],
    });
    expect(size).toEqual(8);
  });

  it("gets size of child that has italic text", () => {
    const size = calculateArticleContentSize({
      name: "paragraph",
      id: "1",
      children: [
        {
          name: "italic",
          children: [
            {
              name: "text",
              attributes: {
                value: "abc",
              },
              children: [],
            },
          ],
        },
      ],
    });
    expect(size).toEqual(3);
  });

  it("gets size of child that has bold/italic text", () => {
    const size = calculateArticleContentSize({
      name: "paragraph",
      id: "1",
      children: [
        {
          name: "italic",
          children: [
            {
              name: "bold",
              children: [
                { name: "text", children: [], attributes: { value: "abc" } },
              ],
            },
            { name: "text", children: [], attributes: { value: "def" } },
          ],
        },
      ],
    });
    expect(size).toEqual(6);
  });

  it("gets size of child that has break", () => {
    const size = calculateArticleContentSize({
      name: "paragraph",
      id: "1",
      children: [
        {
          name: "italic",
          children: [
            {
              name: "break",
              children: [],
            },
            {
              name: "text",
              children: [],
              attributes: {
                value: "abc",
              },
            },
          ],
        },
      ],
    });
    expect(size).toEqual(4);
  });

  it("gets size of paragraph with tab indent", () => {
    const size = calculateArticleContentSize({
      name: "paragraph",
      id: "1",
      attributes: {
        tab: true,
      },
      children: [
        {
          name: "text",
          attributes: {
            value: "abc",
          },
          children: [],
        },
      ],
    });
    expect(size).toEqual(3 + 1);
  });
});

describe("splitParagraphContentChild", () => {
  it("splits text into two", () => {
    const [firstChild, secondChild] = splitParagraphContentChild(
      {
        name: "text",
        attributes: {
          value: "abcdef",
        },
        children: [],
      },
      3,
    );
    expect(firstChild).toEqual({
      name: "text",
      attributes: {
        value: "abc",
      },
      children: [],
    });
    expect(secondChild).toEqual({
      name: "text",
      attributes: {
        value: "def",
      },
      children: [],
    });
  });

  it("splits italic text into two", () => {
    const [firstChild, secondChild] = splitParagraphContentChild(
      {
        name: "italic",
        children: [
          {
            name: "text",
            attributes: {
              value: "abcdef",
            },
            children: [],
          },
        ],
      },
      3,
    );
    expect(firstChild).toEqual({
      name: "italic",
      children: [
        {
          name: "text",
          attributes: {
            value: "abc",
          },
          children: [],
        },
      ],
    });
    expect(secondChild).toEqual({
      name: "italic",
      children: [
        {
          name: "text",
          attributes: {
            value: "def",
          },
          children: [],
        },
      ],
    });
  });

  it("splits bold text into two", () => {
    const [firstChild, secondChild] = splitParagraphContentChild(
      {
        name: "bold",
        children: [
          {
            name: "text",
            attributes: {
              value: "abcdef",
            },
            children: [],
          },
        ],
      },
      3,
    );
    expect(firstChild).toEqual({
      name: "bold",
      children: [
        {
          name: "text",
          attributes: {
            value: "abc",
          },
          children: [],
        },
      ],
    });
    expect(secondChild).toEqual({
      name: "bold",
      children: [
        {
          name: "text",
          attributes: {
            value: "def",
          },
          children: [],
        },
      ],
    });
  });

  it("splits link into two", () => {
    const [firstChild, secondChild] = splitParagraphContentChild(
      {
        name: "link",
        attributes: {
          href: "https://www.thetimes.co.uk/article/coronavirus-3g6vmvrpt",
          type: "article",
          canonicalId: "coronavirus-3g6vmvrpt",
        },
        children: [
          {
            name: "text",
            attributes: {
              value: "abcdef",
            },
            children: [],
          },
        ],
      },
      3,
    );
    expect(firstChild).toEqual({
      name: "link",
      attributes: {
        href: "https://www.thetimes.co.uk/article/coronavirus-3g6vmvrpt",
        type: "article",
        canonicalId: "coronavirus-3g6vmvrpt",
      },
      children: [
        {
          name: "text",
          attributes: {
            value: "abc",
          },
          children: [],
        },
      ],
    });
    expect(secondChild).toEqual({
      name: "link",
      attributes: {
        href: "https://www.thetimes.co.uk/article/coronavirus-3g6vmvrpt",
        type: "article",
        canonicalId: "coronavirus-3g6vmvrpt",
      },
      children: [
        {
          name: "text",
          attributes: {
            value: "def",
          },
          children: [],
        },
      ],
    });
  });
});

describe("splitParagraphContent", () => {
  beforeEach(() => {
    (uuid as jest.Mock).mockReturnValueOnce("id1").mockReturnValueOnce("id2");
  });

  it("splits article with one child into two", () => {
    const [firstArticleContent, secondArticleContent] = splitParagraphContent(
      {
        name: "paragraph",
        id: "1",
        children: [
          {
            name: "text",
            attributes: {
              value: "abcdef",
            },
            children: [],
          },
        ],
      },
      3,
    );

    expect(firstArticleContent).toEqual({
      name: "paragraph",
      id: "id1",
      split: true,
      children: [
        {
          name: "text",
          attributes: {
            value: "abc",
          },
          children: [],
        },
      ],
    });
    expect(secondArticleContent).toEqual({
      name: "paragraph",
      id: "id2",
      children: [
        {
          name: "text",
          attributes: {
            value: "def",
          },
          children: [],
        },
      ],
    });
  });

  it("splits article with two children into two", () => {
    const [firstArticleContent, secondArticleContent] = splitParagraphContent(
      {
        name: "paragraph",
        id: "1",
        children: [
          {
            name: "text",
            attributes: {
              value: "abc",
            },
            children: [],
          },
          {
            name: "text",
            attributes: {
              value: "def",
            },
            children: [],
          },
        ],
      },
      3,
    );

    expect(firstArticleContent).toEqual({
      name: "paragraph",
      id: expect.any(String),
      split: true,
      children: [
        {
          name: "text",
          attributes: {
            value: "abc",
          },
          children: [],
        },
      ],
    });
    expect(secondArticleContent).toEqual({
      name: "paragraph",
      id: expect.any(String),
      children: [
        {
          name: "text",
          attributes: {
            value: "def",
          },
          children: [],
        },
      ],
    });
  });

  it("splits article with three children into two, where two go into first chunk", () => {
    const [firstArticleContent, secondArticleContent] = splitParagraphContent(
      {
        name: "paragraph",
        id: "1",
        children: [
          {
            name: "text",
            attributes: {
              value: "abc",
            },
            children: [],
          },
          {
            name: "text",
            attributes: {
              value: "def",
            },
            children: [],
          },
          {
            name: "text",
            attributes: {
              value: "ghi",
            },
            children: [],
          },
        ],
      },
      6,
    );

    expect(firstArticleContent).toEqual({
      name: "paragraph",
      id: expect.any(String),
      split: true,
      children: [
        {
          name: "text",
          attributes: {
            value: "abc",
          },
          children: [],
        },
        {
          name: "text",
          attributes: {
            value: "def",
          },
          children: [],
        },
      ],
    });
    expect(secondArticleContent).toEqual({
      name: "paragraph",
      id: expect.any(String),
      children: [
        {
          name: "text",
          attributes: {
            value: "ghi",
          },
          children: [],
        },
      ],
    });
  });

  it("splits article with three children into two, where two go into second chunk", () => {
    const [firstArticleContent, secondArticleContent] = splitParagraphContent(
      {
        name: "paragraph",
        id: "abc",
        children: [
          {
            name: "text",
            attributes: {
              value: "abc",
            },
            children: [],
          },
          {
            name: "text",
            attributes: {
              value: "def",
            },
            children: [],
          },
          {
            name: "text",
            attributes: {
              value: "ghi",
            },
            children: [],
          },
        ],
      },
      3,
    );

    expect(firstArticleContent).toEqual({
      name: "paragraph",
      id: "id1",
      split: true,
      children: [
        {
          name: "text",
          attributes: {
            value: "abc",
          },
          children: [],
        },
      ],
    });
    expect(secondArticleContent).toEqual({
      name: "paragraph",
      id: "id2",
      children: [
        {
          name: "text",
          attributes: {
            value: "def",
          },
          children: [],
        },
        {
          name: "text",
          attributes: {
            value: "ghi",
          },
          children: [],
        },
      ],
    });
  });
});

export const createParagraphWithText = (
  text: string,
  testData: Partial<ParagraphContent> = {},
): ParagraphContent => ({
  id: "some-paragraph-id",
  name: "paragraph",
  children: [{ name: "text", children: [], attributes: { value: text } }],
  ...testData,
});

describe("splitParagraphContentByLine", () => {
  beforeEach(() => {
    (uuid as jest.Mock).mockReturnValueOnce("id1").mockReturnValueOnce("id2");
  });
  it("splits content by line number", () => {
    const paragraph1 = createParagraphWithText("line1line2line3line4", {
      id: "p1",
    });

    const articleMeasurements: ArticleMeasurements = {
      bylineHeight: 0,
      bylineMargin: 0,
      contents: {
        lines: {
          p1: [
            { text: "line1" },
            { text: "line2" },
            { text: "line3" },
            { text: "line4" },
          ],
        },
        heights: {
          p1: columnLineHeight * 4,
        },
      },
    };

    const paragraphContents = splitParagraphContentByLine(
      paragraph1,
      2,
      articleMeasurements,
      columnLineHeight,
    );
    expect(paragraphContents[0]).toEqual({
      children: [
        {
          attributes: {
            value: "line1line2",
          },
          children: [],
          name: "text",
        },
      ],
      id: "id1",
      name: "paragraph",
      split: true,
    });
    expect(paragraphContents[1]).toEqual({
      children: [
        {
          attributes: {
            value: "line3line4",
          },
          children: [],
          name: "text",
        },
      ],
      id: "id2",
      name: "paragraph",
    });
    expect(paragraphContents[2]).toEqual({
      bylineHeight: 0,
      bylineMargin: 0,
      contents: {
        lines: {
          id1: [{ text: "line1" }, { text: "line2" }],
          id2: [{ text: "line3" }, { text: "line4" }],
          p1: [
            { text: "line1" },
            { text: "line2" },
            { text: "line3" },
            { text: "line4" },
          ],
        },
        heights: {
          id1: 40,
          id2: 40,
          p1: 80,
        },
      },
    });
  });
});
