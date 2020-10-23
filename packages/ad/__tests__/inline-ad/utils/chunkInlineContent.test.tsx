import { ContentParameters, Line } from "../../../src/inline-ad/types";
import { Measurements, ParagraphContent } from "@times-components-native/types";
import { chunkInlineContent } from "../../../src/inline-ad/utils/chunkInlineContent";

const range = (n: number) => [...Array(n).keys()];

const contentLineHeight = 26;
const paragraphBottomSpacing = 20;
const contentParameters: ContentParameters = {
  contentWidth: 339,
  contentHeight: 1000,
  contentLineHeight,
};

const createTextWithNumberOfLines = (
  numberOfLines: number,
  offset = 0,
): string =>
  range(numberOfLines)
    .map((i) => `line${i + offset}`)
    .join("");

const createLinesWithNumberOfLines = (numberOfLines: number): Line[] =>
  range(numberOfLines).map((i) => ({ text: `line${i}` }));

const createParagraphWithText = (
  text: string,
  testData: Partial<ParagraphContent> = {},
): ParagraphContent => ({
  id: "some-paragraph-id",
  name: "paragraph",
  children: [{ name: "text", children: [], attributes: { value: text } }],
  ...testData,
});

describe("chunkInlineContent", () => {
  it("returns result if no content to chunk", () => {
    const contentMeasurements: Measurements = {
      contents: {
        lines: {
          p1: [{ text: "line1" }],
        },
        heights: {
          p1: contentLineHeight + paragraphBottomSpacing,
        },
      },
    };

    const { chunks, currentInlineContentHeight } = chunkInlineContent(
      [],
      contentMeasurements,
      contentParameters,
    );

    expect(chunks).toEqual([]);
    expect(currentInlineContentHeight).toEqual(0);
  });

  it("chunks 1 content item into the inline chunk", () => {
    const paragraph = createParagraphWithText("line1", {
      id: "p1",
    });

    const contentMeasurements: Measurements = {
      contents: {
        lines: {
          p1: [{ text: "line1" }],
        },
        heights: {
          p1: contentLineHeight + paragraphBottomSpacing,
        },
      },
    };

    const { chunks, currentInlineContentHeight } = chunkInlineContent(
      [paragraph],
      contentMeasurements,
      {
        ...contentParameters,
        contentHeight: 60,
      },
    );

    expect(chunks[0]).toHaveLength(1);
    expect(chunks[0]).toEqual([paragraph]);
    expect(currentInlineContentHeight).toEqual(46);
  });

  it("chunks 1 content item into the inline chunk and overflow chunk", () => {
    const numberOfLinesInContent = 21;
    const maxLinesInColumn = 20;
    const paragraph = createParagraphWithText(
      createTextWithNumberOfLines(numberOfLinesInContent),
      {
        id: "p1",
      },
    );
    const lines = createLinesWithNumberOfLines(numberOfLinesInContent);

    const contentMeasurements: Measurements = {
      contents: {
        lines: {
          p1: lines,
        },
        heights: {
          p1: lines.length * contentLineHeight + paragraphBottomSpacing,
        },
      },
    };

    const { chunks, currentInlineContentHeight } = chunkInlineContent(
      [paragraph],
      contentMeasurements,
      {
        ...contentParameters,
        contentHeight: maxLinesInColumn * contentLineHeight,
      },
    );

    expect(chunks).toHaveLength(2);
    expect(chunks[0]).toMatchObject([
      {
        children: [
          {
            attributes: {
              value: createTextWithNumberOfLines(maxLinesInColumn),
            },
            children: [],
            name: "text",
          },
        ],
      },
    ]);
    expect(chunks[1]).toMatchObject([
      {
        children: [
          {
            attributes: {
              value: createTextWithNumberOfLines(1, maxLinesInColumn),
            },
            children: [],
            name: "text",
          },
        ],
      },
    ]);
    expect(currentInlineContentHeight).toEqual(520);
  });

  it("chunks 2 content items into the inline chunk", () => {
    const maxLinesInColumn = 20;
    const paragraph1 = createParagraphWithText("line1line2", {
      id: "p1",
    });
    const paragraph2 = createParagraphWithText("line1", {
      id: "p2",
    });

    const contentMeasurements: Measurements = {
      contents: {
        lines: {
          p1: [{ text: "line1" }, { text: "line2" }],
          p2: [{ text: "line1" }],
        },
        heights: {
          p1: contentLineHeight * 2 + paragraphBottomSpacing,
          p2: contentLineHeight + paragraphBottomSpacing,
        },
      },
    };

    const { chunks, currentInlineContentHeight } = chunkInlineContent(
      [paragraph1, paragraph2],
      contentMeasurements,
      {
        ...contentParameters,
        contentHeight: maxLinesInColumn * contentLineHeight,
      },
    );

    expect(chunks).toHaveLength(1);
    expect(chunks).toEqual([[paragraph1, paragraph2]]);
    expect(chunks[0]).toHaveLength(2);
    expect(currentInlineContentHeight).toEqual(118);
  });

  it("chunks 2 content items into the inline chunk and overflow chunk with split", () => {
    const maxColumnLines = 20;
    const p1LineCount = 21;
    const p2LineCount = 1;

    const paragraph1 = createParagraphWithText(
      createTextWithNumberOfLines(p1LineCount),
      {
        id: "p1",
      },
    );
    const paragraph2 = createParagraphWithText(
      createTextWithNumberOfLines(p2LineCount),
      {
        id: "p2",
      },
    );

    const contentMeasurements: Measurements = {
      contents: {
        lines: {
          p1: createLinesWithNumberOfLines(p1LineCount),
          p2: createLinesWithNumberOfLines(p2LineCount),
        },
        heights: {
          p1: p1LineCount * contentLineHeight + paragraphBottomSpacing,
          p2: p2LineCount * contentLineHeight + paragraphBottomSpacing,
        },
      },
    };

    const { chunks, currentInlineContentHeight } = chunkInlineContent(
      [paragraph1, paragraph2],
      contentMeasurements,
      {
        ...contentParameters,
        contentHeight: maxColumnLines * contentLineHeight,
      },
    );
    expect(chunks).toHaveLength(2);
    expect(chunks[0]).toMatchObject([
      {
        children: [
          {
            attributes: {
              value: createTextWithNumberOfLines(maxColumnLines),
            },
            children: [],
            name: "text",
          },
        ],
      },
    ]);
    expect(chunks[1]).toMatchObject([
      {
        children: [
          {
            attributes: {
              value: createTextWithNumberOfLines(1, maxColumnLines),
            },
            children: [],
            name: "text",
          },
        ],
      },
      {
        children: [
          {
            attributes: {
              value: createTextWithNumberOfLines(1),
            },
            children: [],
            name: "text",
          },
        ],
      },
    ]);
    expect(currentInlineContentHeight).toEqual(520);
  });

  it("chunks 2 content items into the inline chunk and overflow chunk without split", () => {
    const maxColumnLines = 20;
    const p1LineCount = 20;
    const p2LineCount = 1;

    const paragraph1 = createParagraphWithText(
      createTextWithNumberOfLines(p1LineCount),
      {
        id: "p1",
      },
    );
    const paragraph2 = createParagraphWithText(
      createTextWithNumberOfLines(p2LineCount),
      {
        id: "p2",
      },
    );

    const contentMeasurements: Measurements = {
      contents: {
        lines: {
          p1: createLinesWithNumberOfLines(p1LineCount),
          p2: createLinesWithNumberOfLines(p2LineCount),
        },
        heights: {
          p1: p1LineCount * contentLineHeight + paragraphBottomSpacing,
          p2: p2LineCount * contentLineHeight + paragraphBottomSpacing,
        },
      },
    };

    const { chunks, currentInlineContentHeight } = chunkInlineContent(
      [paragraph1, paragraph2],
      contentMeasurements,
      {
        ...contentParameters,
        contentHeight:
          maxColumnLines * contentLineHeight + paragraphBottomSpacing,
      },
    );
    expect(chunks).toHaveLength(2);
    expect(chunks[0]).toMatchObject([
      {
        children: [
          {
            attributes: {
              value: createTextWithNumberOfLines(maxColumnLines),
            },
            children: [],
            name: "text",
          },
        ],
      },
    ]);
    expect(chunks[1]).toMatchObject([
      {
        children: [
          {
            attributes: {
              value: createTextWithNumberOfLines(p2LineCount),
            },
            children: [],
            name: "text",
          },
        ],
      },
    ]);
    expect(currentInlineContentHeight).toEqual(540);
  });

  it("chunks 3 content items into the inline chunk and overflow chunk with split", () => {
    const maxColumnLines = 20;
    const p1LineCount = 21;
    const p2LineCount = 1;
    const p3LineCount = 1;

    const paragraph1 = createParagraphWithText(
      createTextWithNumberOfLines(p1LineCount),
      {
        id: "p1",
      },
    );
    const paragraph2 = createParagraphWithText(
      createTextWithNumberOfLines(p2LineCount),
      {
        id: "p2",
      },
    );
    const paragraph3 = createParagraphWithText(
      createTextWithNumberOfLines(p3LineCount),
      {
        id: "p3",
      },
    );

    const contentMeasurements: Measurements = {
      contents: {
        lines: {
          p1: createLinesWithNumberOfLines(p1LineCount),
          p2: createLinesWithNumberOfLines(p2LineCount),
          p3: createLinesWithNumberOfLines(p3LineCount),
        },
        heights: {
          p1: p1LineCount * contentLineHeight + paragraphBottomSpacing,
          p2: p2LineCount * contentLineHeight + paragraphBottomSpacing,
          p3: p3LineCount * contentLineHeight + paragraphBottomSpacing,
        },
      },
    };

    const { chunks, currentInlineContentHeight } = chunkInlineContent(
      [paragraph1, paragraph2, paragraph3],
      contentMeasurements,
      {
        ...contentParameters,
        contentHeight: maxColumnLines * contentLineHeight,
      },
    );
    expect(chunks).toHaveLength(2);
    expect(chunks[0]).toMatchObject([
      {
        children: [
          {
            attributes: {
              value: createTextWithNumberOfLines(maxColumnLines),
            },
            children: [],
            name: "text",
          },
        ],
      },
    ]);
    expect(chunks[1]).toMatchObject([
      {
        children: [
          {
            attributes: {
              value: createTextWithNumberOfLines(1, maxColumnLines),
            },
            children: [],
            name: "text",
          },
        ],
      },
      {
        children: [
          {
            attributes: {
              value: createTextWithNumberOfLines(1),
            },
            children: [],
            name: "text",
          },
        ],
      },
      {
        children: [
          {
            attributes: {
              value: createTextWithNumberOfLines(1),
            },
            children: [],
            name: "text",
          },
        ],
      },
    ]);
    expect(currentInlineContentHeight).toEqual(520);
  });
});
