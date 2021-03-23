/* eslint-disable global-require */
import { setupArticleEndTracking } from "../../src/body-utils/setupArticleEndTracking";

const createParagraph = (textValue) => ({
  name: "paragraph",
  children: [{ name: "text", attributes: { value: textValue }, children: [] }],
});

export default () => {
  const content = [
    createParagraph("a"),
    createParagraph("b"),
    createParagraph("c"),
    createParagraph("d"),
    createParagraph("e"),
    createParagraph("f"),
  ];

  const skeletonProps = {
    data: { content, template: "mainstandard" },
    // isTablet: true,
    // narrowContent: false,
  };

  describe("setupArticleEndTracking", () => {
    it("should inject the component at the end of the article content", () => {
      const wibble = setupArticleEndTracking(skeletonProps, content);
      console.log("fjsdkfjsdlfjdksfjkdsjfdk", JSON.stringify(wibble, 2, null));
      expect(setupArticleEndTracking(skeletonProps, content)).toEqual([
        ...content,
        {
          name: "articleEndTracking",
          children: [],
        },
      ]);
    });
  });
};
