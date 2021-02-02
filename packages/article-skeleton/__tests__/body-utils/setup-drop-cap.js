/* eslint-disable global-require */
import { FontStorage } from "@times-components-native/typeset";
import { setupDropCap } from "../../src/body-utils/setupDropCap";

FontStorage.registerFont(
  "TimesModern-Regular",
  () => require("@times-components-native/test-utils").TestFont,
);

FontStorage.registerFont(
  "CenturyGothic-Bold",
  () => require("@times-components-native/test-utils").TestFont,
);

const createDropCapNode = (dropCapText, truncatedText, skeletonProps) => ({
  name: "inlineContent",
  attributes: {
    dropCapColor: "#13354E",
    dropCapFont: "dropCap",
    dropCapFontSize: 216,
    dropCapText: dropCapText,
    height: 153.5625,
    inlineContent: [
      {
        name: "paragraph",
        children: [
          {
            name: "text",
            attributes: {
              value: truncatedText,
            },
            children: [],
          },
        ],
      },
    ],
    originalName: "dropcap",
    skeletonProps,

    width: 128.8828125,
  },
  children: [],
});

const createParagraph = (textValue) => ({
  name: "paragraph",
  children: [{ name: "text", attributes: { value: textValue }, children: [] }],
});

export default () => {
  const content = [
    createParagraph("This is the first paragraph"),
    createParagraph("No surprises here, this is the second paragraph"),
  ];

  const skeletonProps = {
    data: { content, section: "News", template: "maincomment" },
    dropCapFont: "dropCap",
    isTablet: true,
    narrowContent: false,
    scale: 1,
  };

  describe("setupDropCap", () => {
    it("should return content untouched if drop caps are disabled", () => {
      expect(
        setupDropCap(
          {
            ...skeletonProps,
            data: { ...skeletonProps.data, dropcapsDisabled: true },
          },
          content,
        ),
      ).toEqual(content);
    });

    it("should return content untouched if drop caps are disabled because template not supported", () => {
      expect(
        setupDropCap(
          {
            ...skeletonProps,
            data: { ...skeletonProps.data, template: "mainstandard" },
          },
          content,
        ),
      ).toEqual(content);
    });

    it("should return content untouched if first content node is not a paragraph", () => {
      const nonParagraphContent = [{ name: "image" }, ...content];

      expect(setupDropCap(skeletonProps, nonParagraphContent)).toEqual(
        nonParagraphContent,
      );
    });

    it("should return content untouched if no drop cap text extracted because no children", () => {
      const noChildrenContent = [{ name: "paragraph" }, ...content];

      expect(setupDropCap(skeletonProps, noChildrenContent)).toEqual(
        noChildrenContent,
      );
    });

    it("should return content untouched if no drop cap text extracted because empty children", () => {
      const emptyChildrenContent = [
        { name: "paragraph", children: [] },
        ...content,
      ];

      expect(setupDropCap(skeletonProps, emptyChildrenContent)).toEqual(
        emptyChildrenContent,
      );
    });

    it("should return content untouched if no drop cap text extracted because no text value", () => {
      const emptyChildrenContent = [
        {
          name: "paragraph",
          children: [{ name: "text" }],
        },
        ...content,
      ];

      expect(setupDropCap(skeletonProps, emptyChildrenContent)).toEqual(
        emptyChildrenContent,
      );
    });

    it("should return content untouched if no drop cap text extracted because empty text value", () => {
      const emptyChildrenContent = [
        {
          name: "paragraph",
          children: [{ name: "text", attributes: { value: "" }, children: [] }],
        },
        ...content,
      ];

      expect(setupDropCap(skeletonProps, emptyChildrenContent)).toEqual(
        emptyChildrenContent,
      );
    });

    it("should return content with drop cap", () => {
      const dropCap = createDropCapNode(
        "T",
        "his is the first paragraph",
        skeletonProps,
      );

      expect(setupDropCap(skeletonProps, content)).toEqual([
        dropCap,
        content[1],
      ]);
    });

    it("should return content with drop cap with a single straight quote", () => {
      const contentWithDoubleQuotes = [
        createParagraph(`'This is the first paragraph`),
        createParagraph("No surprises here, this is the second paragraph"),
      ];

      const contentWithDropCap = setupDropCap(
        skeletonProps,
        contentWithDoubleQuotes,
      );

      expect(contentWithDropCap[0].attributes.dropCapText).toEqual(`'T`);
      expect(
        contentWithDropCap[0].attributes.inlineContent[0].children[0].attributes
          .value,
      ).toEqual("his is the first paragraph");
    });

    it("should return content with drop cap with double straight quotes", () => {
      const contentWithDoubleQuotes = [
        createParagraph(`"This is the first paragraph`),
        createParagraph("No surprises here, this is the second paragraph"),
      ];

      const contentWithDropCap = setupDropCap(
        skeletonProps,
        contentWithDoubleQuotes,
      );

      expect(contentWithDropCap[0].attributes.dropCapText).toEqual(`"T`);
      expect(
        contentWithDropCap[0].attributes.inlineContent[0].children[0].attributes
          .value,
      ).toEqual("his is the first paragraph");
    });

    it("should return content with drop cap with a single curly quote", () => {
      const contentWithDoubleQuotes = [
        createParagraph(`‘This is the first paragraph`),
        createParagraph("No surprises here, this is the second paragraph"),
      ];

      const contentWithDropCap = setupDropCap(
        skeletonProps,
        contentWithDoubleQuotes,
      );

      expect(contentWithDropCap[0].attributes.dropCapText).toEqual(`‘T`);
      expect(
        contentWithDropCap[0].attributes.inlineContent[0].children[0].attributes
          .value,
      ).toEqual("his is the first paragraph");
    });

    it("should return content with drop cap with double curly quotes", () => {
      const contentWithDoubleQuotes = [
        createParagraph(`“This is the first paragraph`),
        createParagraph("No surprises here, this is the second paragraph"),
      ];

      const contentWithDropCap = setupDropCap(
        skeletonProps,
        contentWithDoubleQuotes,
      );

      expect(contentWithDropCap[0].attributes.dropCapText).toEqual(`“T`);
      expect(
        contentWithDropCap[0].attributes.inlineContent[0].children[0].attributes
          .value,
      ).toEqual("his is the first paragraph");
    });

    it("should return content with drop cap and space removed if word not split", () => {
      const contentWithDoubleQuotes = [
        createParagraph("I am using this example paragraph"),
        createParagraph("No surprises here, this is the second paragraph"),
      ];

      const contentWithDropCap = setupDropCap(
        skeletonProps,
        contentWithDoubleQuotes,
      );

      expect(contentWithDropCap[0].attributes.dropCapText).toEqual("I");
      expect(
        contentWithDropCap[0].attributes.inlineContent[0].children[0].attributes
          .value,
      ).toEqual("am using this example paragraph");
    });

    it("should change the drop cap colour depending on the parent section", () => {
      const contentWithDropCap = setupDropCap(
        {
          ...skeletonProps,
          data: { ...skeletonProps.data, section: "Comment" },
        },
        content,
      );

      expect(contentWithDropCap[0].attributes.dropCapColor).toEqual("#850029");
    });

    it("should default to 'dropCap' font if none provided", () => {
      const contentWithDropCap = setupDropCap(
        {
          data: { content, section: "News", template: "maincomment" },
          isTablet: true,
          narrowContent: false,
          scale: 1,
        },
        content,
      );

      expect(contentWithDropCap[0].attributes.dropCapFont).toEqual("dropCap");
    });

    it("should change the font depending on the dropCapFont provided", () => {
      const contentWithDropCap = setupDropCap(
        {
          ...skeletonProps,
          dropCapFont: "styleMagazine",
        },
        content,
      );

      expect(contentWithDropCap[0].attributes.dropCapFont).toEqual(
        "styleMagazine",
      );
    });
  });
};
