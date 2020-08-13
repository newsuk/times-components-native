import { ArticleMeasurements } from "../../types";
import { calculateContentsHeight } from "@times-components-native/article-columns/utils/calculateContentsHeight";
import MockMarkup from "@times-components-native/fixture-generator/src/mock-markup";

describe("calculateContentsHeight", () => {
  it("calculates the height of contents", () => {
    const paragraph = new MockMarkup().addParagraphs(1).get();
    const paragraph1 = { ...paragraph, id: "p1" };
    const paragraph2 = { ...paragraph, id: "p2" };
    const articleMeasurements: ArticleMeasurements = {
      bylineHeight: 0,
      contents: {
        heights: {
          p1: 40,
          p2: 20,
        },
        lines: {},
      },
    };
    const height = calculateContentsHeight(
      [paragraph1, paragraph2],
      articleMeasurements,
    );
    expect(height).toEqual(60);
  });
});
