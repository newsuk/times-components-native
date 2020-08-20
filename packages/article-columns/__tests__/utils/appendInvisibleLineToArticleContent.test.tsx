import { appendInvisibleLineToArticleContent } from "../../utils/appendInvisibleLineToArticleContent";

describe("appendInvisibleLineToArticleContent", () => {
  it("appends invisible line to content", () => {
    const articleContent = appendInvisibleLineToArticleContent({
      name: "paragraph",
      children: [
        {
          name: "text",
          attributes: {
            value: "abcdef",
          },
          children: [],
        },
      ],
    });

    expect(articleContent).toEqual({
      name: "paragraph",
      children: [
        {
          name: "text",
          attributes: {
            value: "abcdef",
          },
          children: [],
        },
        {
          name: "invisible",
          attributes: {
            value: "____________________________________",
          },
          children: [],
        },
      ],
    });
  });

  it("does not change non-paragraph content", () => {
    const articleContent = appendInvisibleLineToArticleContent({
      name: "interactive",
      children: [],
    });

    expect(articleContent).toEqual({
      name: "interactive",
      children: [],
    });
  });
});
