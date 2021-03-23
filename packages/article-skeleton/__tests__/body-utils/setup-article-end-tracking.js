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
  };

  describe("setupArticleEndTracking", () => {
    it("should inject the component at the end of the article content", () => {
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
