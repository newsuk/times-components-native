import { hyphenateArticleContent } from "@times-components-native/utils/src/hyphenate-article-content";

const originalText = "Hyphenated content";
const hyphenatedText = "Hy­phen­ated con­tent";

describe("hyphenate-article-content", () => {
  it("hyphenates paragraph content with text", () => {
    const content = [
      {
        name: "paragraph",
        children: [
          {
            name: "text",
            children: [],
            attributes: {
              value: originalText,
            },
          },
        ],
      },
    ];

    const hyphenatedContent = hyphenateArticleContent(content);
    expect(hyphenatedContent).toEqual([
      {
        name: "paragraph",
        children: [
          {
            name: "text",
            children: [],
            attributes: {
              value: hyphenatedText,
            },
          },
        ],
      },
    ]);
  });

  it("hyphenates paragraph content with bold text", () => {
    const content = [
      {
        name: "paragraph",
        children: [
          {
            name: "bold",
            children: [
              {
                name: "text",
                children: [],
                attributes: {
                  value: originalText,
                },
              },
            ],
          },
        ],
      },
    ];

    const hyphenatedContent = hyphenateArticleContent(content);
    expect(hyphenatedContent).toEqual([
      {
        name: "paragraph",
        children: [
          {
            name: "bold",
            children: [
              {
                name: "text",
                children: [],
                attributes: {
                  value: hyphenatedText,
                },
              },
            ],
          },
        ],
      },
    ]);
  });

  it("hyphenates paragraph content with a line break", () => {
    const content = [
      {
        name: "paragraph",
        children: [
          {
            name: "text",
            children: [],
            attributes: {
              value: originalText,
            },
          },
          {
            name: "break",
            children: [],
          },
          {
            name: "text",
            children: [],
            attributes: {
              value: originalText,
            },
          },
        ],
      },
    ];

    const hyphenatedContent = hyphenateArticleContent(content);
    expect(hyphenatedContent).toEqual([
      {
        name: "paragraph",
        children: [
          {
            name: "text",
            children: [],
            attributes: {
              value: hyphenatedText,
            },
          },
          {
            name: "break",
            children: [],
          },
          {
            name: "text",
            children: [],
            attributes: {
              value: hyphenatedText,
            },
          },
        ],
      },
    ]);
  });

  it("hyphenates paragraph content with mixture of bold/regular text", () => {
    const content = [
      {
        name: "paragraph",
        children: [
          {
            name: "bold",
            children: [
              {
                name: "text",
                children: [],
                attributes: {
                  value: originalText,
                },
              },
            ],
          },
          {
            name: "break",
            children: [],
          },
          {
            name: "text",
            children: [],
            attributes: {
              value: originalText,
            },
          },
        ],
      },
    ];

    const hyphenatedContent = hyphenateArticleContent(content);
    expect(hyphenatedContent).toEqual([
      {
        name: "paragraph",
        children: [
          {
            name: "bold",
            children: [
              {
                name: "text",
                children: [],
                attributes: {
                  value: hyphenatedText,
                },
              },
            ],
          },
          {
            name: "break",
            children: [],
          },
          {
            name: "text",
            children: [],
            attributes: {
              value: hyphenatedText,
            },
          },
        ],
      },
    ]);
  });

  it("hyphenates paragraph content with a link", () => {
    const content = [
      {
        name: "paragraph",
        children: [
          {
            name: "link",
            children: [
              {
                name: "text",
                children: [],
                attributes: {
                  value: originalText,
                },
              },
            ],
            attributes: {
              href: "some-href",
              type: "article",
              canonicalId: "some-id",
            },
          },
        ],
      },
    ];

    const hyphenatedContent = hyphenateArticleContent(content);
    expect(hyphenatedContent).toEqual([
      {
        name: "paragraph",
        children: [
          {
            name: "link",
            children: [
              {
                name: "text",
                children: [],
                attributes: {
                  value: hyphenatedText,
                },
              },
            ],
            attributes: {
              href: "some-href",
              type: "article",
              canonicalId: "some-id",
            },
          },
        ],
      },
    ]);
  });

  it("does not change non-paragraph content", () => {
    const content = [
      {
        name: "interactive",
        attributes: {
          id: "d7eabcf3-13aa-4abb-9105-263c5a8916b6",
          display: "primary",
          url:
            "https://components.timesdev.tools/lib2/in-article-puff-1.0.0/in-article-puff.html",
          element: {
            value: "in-article-puff",
            attributes: {
              "deck-id": "30329",
            },
          },
        },
        children: [],
      },
    ];

    const hyphenatedContent = hyphenateArticleContent(content);
    expect(hyphenatedContent).toEqual(content);
  });
});
