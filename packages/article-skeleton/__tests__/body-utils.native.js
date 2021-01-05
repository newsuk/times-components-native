/* eslint-disable global-require */
import { FontStorage } from "@times-components-native/typeset";
import {
  getStringBounds,
  setupAd,
  setupInlineContent,
} from "../src/body-utils";

FontStorage.registerFont(
  "TimesDigitalW04",
  () => require("@times-components-native/test-utils").TestFont,
);

const createParagraph = (textValue) => ({
  name: "paragraph",
  children: [{ name: "text", attributes: { value: textValue }, children: [] }],
});

export default () => {
  it("should return a bounding box", () => {
    const fontSettings = {
      fontFamily: "TimesDigitalW04",
      fontStyle: "",
      fontWeight: "",
      fontSize: 90,
      color: "black",
    };
    expect(getStringBounds(fontSettings, '"A')).toMatchSnapshot();
  });

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
        narrowContent: false,
      };

      it("should return content untouched if not tablet", () => {
        expect(
          setupInlineContent(
            { ...skeletonProps, isTablet: false },
            contentWithImages,
          ),
        ).toEqual(contentWithImages);
      });

      it("should return content untouched if nothing to inline", () => {
        const contentWithoutImages = content.filter(
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

  const content = [
    createParagraph("a"),
    createParagraph("b"),
    createParagraph("c"),
    createParagraph("d"),
    createParagraph("e"),
    { name: "ad", children: [] },
    createParagraph("f"),
  ];

  const skeletonProps = {
    data: { content, template: "mainstandard" },
    isTablet: true,
    narrowContent: false,
  };

  describe("setupAd", () => {
    it("should return content untouched if not tablet", () => {
      expect(setupAd({ ...skeletonProps, isTablet: false })).toEqual(content);
    });

    it("should return content untouched if no ad block present in content", () => {
      const contentWithoutAd = content.filter((item) => item.name !== "ad");
      expect(
        setupAd({
          ...skeletonProps,
          data: { ...skeletonProps.data, content: contentWithoutAd },
        }),
      ).toEqual(contentWithoutAd);
    });

    it("should remove empty paragraphs", () => {
      const contentWithoutAd = content.filter((item) => item.name !== "ad");
      expect(
        setupAd({
          ...skeletonProps,
          data: {
            ...skeletonProps.data,
            content: [{ name: "paragraph", children: [] }, ...contentWithoutAd],
          },
        }),
      ).toEqual(contentWithoutAd);
    });
  });

  describe("Article MPU", () => {
    it("setupAd should remove ad if tablet and template is not mainstandard", () => {
      const contentWithoutAd = content.filter((item) => item.name !== "ad");
      expect(
        setupAd({
          ...skeletonProps,
          data: { ...skeletonProps.data, template: "maincomment" },
        }),
      ).toEqual(contentWithoutAd);
    });

    it("setupAd should not remove ad if not tablet and template is not mainstandard", () => {
      expect(
        setupAd({
          ...skeletonProps,
          isTablet: false,
          data: { ...skeletonProps.data, template: "maincomment" },
        }),
      ).toEqual(content);
    });

    it("setupAd should return content with the inline mpu ad present and attributes overriden", () => {
      const longContent = [
        createParagraph("a"),
        createParagraph("b"),
        createParagraph("c"),
        createParagraph("d"),
        createParagraph("e"),
        { name: "ad", children: [] },
        createParagraph("f"),
        createParagraph("g"),
        createParagraph("h"),
        createParagraph("i"),
        createParagraph("j"),
        createParagraph("k"),
        createParagraph("l"),
        createParagraph("m"),
      ];

      const newSkeletonProps = {
        ...skeletonProps,
        data: { ...skeletonProps.data, content: longContent },
      };

      expect(setupAd(newSkeletonProps)).toEqual([
        createParagraph("a"),
        createParagraph("b"),
        createParagraph("c"),
        createParagraph("d"),
        {
          name: "inlineContent",
          attributes: {
            width: 300,
            height: 250,
            slotName: "native-single-mpu",
            inlineContent: [
              createParagraph("e"),
              createParagraph("f"),
              createParagraph("g"),
              createParagraph("h"),
              createParagraph("i"),
              createParagraph("j"),
              createParagraph("k"),
            ],
            originalName: "ad",
            skeletonProps: newSkeletonProps,
          },
          children: [],
        },
        createParagraph("l"),
        createParagraph("m"),
      ]);
    });

    it("setupAd should return content with the inline mpu ad present but split content on non-paragraph", () => {
      const longContent = [
        createParagraph("a"),
        createParagraph("b"),
        createParagraph("c"),
        createParagraph("d"),
        createParagraph("e"),
        { name: "ad", children: [] },
        createParagraph("f"),
        { name: "image", children: [] },
        createParagraph("g"),
        createParagraph("h"),
        createParagraph("i"),
        createParagraph("j"),
        createParagraph("k"),
        createParagraph("l"),
        createParagraph("m"),
      ];

      const newSkeletonProps = {
        ...skeletonProps,
        data: { ...skeletonProps.data, content: longContent },
      };

      expect(setupAd(newSkeletonProps)).toEqual([
        createParagraph("a"),
        createParagraph("b"),
        createParagraph("c"),
        createParagraph("d"),
        {
          name: "inlineContent",
          attributes: {
            width: 300,
            height: 250,
            slotName: "native-single-mpu",
            inlineContent: [createParagraph("e"), createParagraph("f")],
            originalName: "ad",
            skeletonProps: newSkeletonProps,
          },
          children: [],
        },
        { name: "image", children: [] },
        createParagraph("g"),
        createParagraph("h"),
        createParagraph("i"),
        createParagraph("j"),
        createParagraph("k"),
        createParagraph("l"),
        createParagraph("m"),
      ]);
    });
  });
};
