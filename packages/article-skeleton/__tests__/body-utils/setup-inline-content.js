/* eslint-disable global-require */
import { setupInlineContent } from "../../src/body-utils/setupInlineContent";

const createParagraph = (textValue) => ({
  name: "paragraph",
  children: [{ name: "text", attributes: { value: textValue }, children: [] }],
});

export default () => {
  describe("setupInlineContent", () => {
    describe("images", () => {
      const contentWithImages = [
        createParagraph("a"),
        createParagraph("b"),
        createParagraph("c"),
        { name: "image", attributes: { display: "inline" }, children: [] },
        createParagraph("d"),
        createParagraph("e"),
        { name: "image", attributes: { display: "inline" }, children: [] },
        createParagraph("f"),
        createParagraph("g"),
        createParagraph("h"),
      ];

      const skeletonProps = {
        data: { content: contentWithImages, template: "mainstandard" },
        isTablet: true,
        isArticleTablet: true,
        narrowContent: false,
      };

      it("should return content untouched if not tablet", () => {
        expect(
          setupInlineContent(
            { ...skeletonProps, isTablet: false, isArticleTablet: false },
            contentWithImages,
          ),
        ).toEqual(contentWithImages);
      });

      it("should return content untouched if nothing to inline", () => {
        const contentWithoutImages = contentWithImages.filter(
          (item) => item.name !== "image",
        );
        expect(setupInlineContent(skeletonProps, contentWithoutImages)).toEqual(
          contentWithoutImages,
        );
      });

      it("should return content with inline images", () => {
        expect(setupInlineContent(skeletonProps, contentWithImages)).toEqual([
          createParagraph("a"),
          createParagraph("b"),
          createParagraph("c"),
          {
            name: "inlineContent",
            attributes: {
              display: "inline",
              inlineContent: [createParagraph("d"), createParagraph("e")],
              originalName: "image",
              skeletonProps,
            },
            children: [],
          },
          {
            name: "inlineContent",
            attributes: {
              display: "inline",
              inlineContent: [
                createParagraph("f"),
                createParagraph("g"),
                createParagraph("h"),
              ],
              originalName: "image",
              skeletonProps,
            },
            children: [],
          },
        ]);
      });
    });

    describe("pull quotes", () => {
      const contentWithPullQuotes = [
        createParagraph("a"),
        createParagraph("b"),
        createParagraph("c"),
        { name: "pullQuote", children: [] },
        createParagraph("d"),
        createParagraph("e"),
        { name: "pullQuote", children: [] },
        createParagraph("f"),
        createParagraph("g"),
        createParagraph("h"),
      ];

      const skeletonProps = {
        data: { content: contentWithPullQuotes, template: "mainstandard" },
        isTablet: true,
        isArticleTablet: true,
        narrowContent: false,
      };

      it("should return content with pull quotes", () => {
        expect(
          setupInlineContent(skeletonProps, contentWithPullQuotes),
        ).toEqual([
          createParagraph("a"),
          createParagraph("b"),
          createParagraph("c"),
          {
            name: "inlineContent",
            attributes: {
              inlineContent: [createParagraph("d"), createParagraph("e")],
              originalName: "pullQuote",
              skeletonProps,
            },
            children: [],
          },
          {
            name: "inlineContent",
            attributes: {
              inlineContent: [
                createParagraph("f"),
                createParagraph("g"),
                createParagraph("h"),
              ],
              originalName: "pullQuote",
              skeletonProps,
            },
            children: [],
          },
        ]);
      });
    });

    describe("mixed inline content", () => {
      const contentWithMix = [
        createParagraph("a"),
        createParagraph("b"),
        createParagraph("c"),
        {
          name: "inlineContent",
          attributes: {
            width: 300,
            height: 600,
            slotName: "native-inline-ad-c",
            inlineContent: [createParagraph("d"), createParagraph("e")],
            originalName: "ad",
          },
          children: [],
        },
        { name: "image", attributes: { display: "inline" }, children: [] },
        createParagraph("f"),
        createParagraph("g"),
        { name: "pullQuote", children: [] },
        createParagraph("h"),
      ];

      const skeletonProps = {
        data: { content: contentWithMix, template: "mainstandard" },
        isTablet: true,
        isArticleTablet: true,
        narrowContent: false,
      };

      it("should return content with pull quotes", () => {
        expect(setupInlineContent(skeletonProps, contentWithMix)).toEqual([
          createParagraph("a"),
          createParagraph("b"),
          createParagraph("c"),
          {
            name: "inlineContent",
            attributes: {
              width: 300,
              height: 600,
              slotName: "native-inline-ad-c",
              inlineContent: [createParagraph("d"), createParagraph("e")],
              originalName: "ad",
            },
            children: [],
          },
          {
            name: "inlineContent",
            attributes: {
              display: "inline",
              inlineContent: [createParagraph("f"), createParagraph("g")],
              originalName: "image",
              skeletonProps,
            },
            children: [],
          },
          {
            name: "inlineContent",
            attributes: {
              inlineContent: [createParagraph("h")],
              originalName: "pullQuote",
              skeletonProps,
            },
            children: [],
          },
        ]);
      });
    });
  });
};
