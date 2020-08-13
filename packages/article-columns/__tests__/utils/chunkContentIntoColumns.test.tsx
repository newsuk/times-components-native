import { ColumnParameters, Line, ArticleMeasurements } from "../../types";
import { ParagraphContent } from "@times-components-native/article-columns/domain-types";
import { chunkContentIntoColumns } from "@times-components-native/article-columns/utils/chunkContentIntoColumns";

const range = (n: number) => [...Array(n).keys()];

jest.mock("@times-components-native/article-columns/utils/random");

const columnLineHeight = 20;
const columnParameters: ColumnParameters = {
  columnWidth: 110,
  columnHeight: 1000,
  columnCount: 3,
  columnLineHeight,
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

export const createParagraphWithText = (
  text: string,
  testData: Partial<ParagraphContent> = {},
): ParagraphContent => ({
  id: "some-paragraph-id",
  name: "paragraph",
  children: [{ name: "text", children: [], attributes: { value: text } }],
  ...testData,
});

describe("chunkContentIntoColumns", () => {
  it("returns result if no more content to chunk", () => {
    const paragraph = createParagraphWithText("line1", {
      id: "p1",
    });
    const articleMeasurements: ArticleMeasurements = {
      bylineHeight: 0,
      contents: {
        lines: {
          p1: [{ text: "line1" }],
        },
        heights: {
          p1: 20,
        },
      },
    };

    const [columns] = chunkContentIntoColumns(
      [],
      articleMeasurements,
      columnParameters,
      [[paragraph]],
    );

    expect(columns).toEqual([paragraph]);
  });

  it("chunks 1 content item into 1 column", () => {
    const paragraph = createParagraphWithText("line1", {
      id: "p1",
    });

    const articleMeasurements: ArticleMeasurements = {
      bylineHeight: 0,
      contents: {
        lines: {
          p1: [{ text: "line1" }],
        },
        heights: {
          p1: 20,
        },
      },
    };

    const [columns] = chunkContentIntoColumns(
      [paragraph],
      articleMeasurements,
      { ...columnParameters, columnHeight: 60 },
    );

    expect(columns).toHaveLength(1);
    expect(columns).toEqual([paragraph]);
  });

  it("chunks 1 content item into 2 columns", () => {
    const numberOfLinesInContent = 21;
    const maxLinesInColumn = 20;
    const paragraph = createParagraphWithText(
      createTextWithNumberOfLines(numberOfLinesInContent),
      {
        id: "p1",
      },
    );
    const lines = createLinesWithNumberOfLines(numberOfLinesInContent);

    const articleMeasurements: ArticleMeasurements = {
      bylineHeight: 0,
      contents: {
        lines: {
          p1: lines,
        },
        heights: {
          p1: lines.length * columnLineHeight,
        },
      },
    };

    const columns = chunkContentIntoColumns([paragraph], articleMeasurements, {
      ...columnParameters,
      columnHeight: maxLinesInColumn * columnLineHeight,
    });

    expect(columns).toHaveLength(2);
    expect(columns[0]).toMatchObject([
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
    expect(columns[1]).toMatchObject([
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
  });

  it("chunks 1 content item into 3 columns", () => {
    const numberOfLinesInContent = 41;
    const maxLinesInColumn = 20;
    const paragraph = createParagraphWithText(
      createTextWithNumberOfLines(numberOfLinesInContent),
      {
        id: "p1",
      },
    );
    const lines = createLinesWithNumberOfLines(numberOfLinesInContent);
    const articleMeasurements: ArticleMeasurements = {
      bylineHeight: 0,
      contents: {
        lines: {
          p1: lines,
        },
        heights: {
          p1: lines.length * columnLineHeight,
        },
      },
    };

    const columns = chunkContentIntoColumns([paragraph], articleMeasurements, {
      ...columnParameters,
      columnHeight: maxLinesInColumn * columnLineHeight,
    });

    expect(columns).toHaveLength(3);
    expect(columns[0]).toMatchObject([
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
    expect(columns[1]).toMatchObject([
      {
        children: [
          {
            attributes: {
              value: createTextWithNumberOfLines(
                maxLinesInColumn,
                maxLinesInColumn,
              ),
            },
            children: [],
            name: "text",
          },
        ],
      },
    ]);
    expect(columns[2]).toMatchObject([
      {
        children: [
          {
            attributes: {
              value: createTextWithNumberOfLines(1, maxLinesInColumn * 2),
            },
            children: [],
            name: "text",
          },
        ],
      },
    ]);
  });

  it("chunks 2 content items into 1 column", () => {
    const maxLinesInColumn = 20;
    const paragraph1 = createParagraphWithText("line1line2", {
      id: "p1",
    });
    const paragraph2 = createParagraphWithText("line1", {
      id: "p2",
    });

    const articleMeasurements: ArticleMeasurements = {
      bylineHeight: 0,
      contents: {
        lines: {
          p1: [{ text: "line1" }, { text: "line2" }],
          p2: [{ text: "line1" }],
        },
        heights: {
          p1: 40,
          p2: 20,
        },
      },
    };

    const columns = chunkContentIntoColumns(
      [paragraph1, paragraph2],
      articleMeasurements,
      {
        ...columnParameters,
        columnHeight: maxLinesInColumn * columnLineHeight,
      },
    );

    expect(columns).toHaveLength(1);
    expect(columns).toEqual([[paragraph1, paragraph2]]);
  });

  it("chunks 2 content items into 2 columns with split", () => {
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

    const articleMeasurements: ArticleMeasurements = {
      bylineHeight: 0,
      contents: {
        lines: {
          p1: createLinesWithNumberOfLines(p1LineCount),
          p2: createLinesWithNumberOfLines(p2LineCount),
        },
        heights: {
          p1: p1LineCount * columnLineHeight,
          p2: p2LineCount * columnLineHeight,
        },
      },
    };

    const columns = chunkContentIntoColumns(
      [paragraph1, paragraph2],
      articleMeasurements,
      {
        ...columnParameters,
        columnHeight: maxColumnLines * columnLineHeight,
      },
    );
    expect(columns).toHaveLength(2);
    expect(columns[0]).toMatchObject([
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
    expect(columns[1]).toMatchObject([
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
  });

  it("chunks 2 content items into 2 columns without split", () => {
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

    const articleMeasurements: ArticleMeasurements = {
      bylineHeight: 0,
      contents: {
        lines: {
          p1: createLinesWithNumberOfLines(p1LineCount),
          p2: createLinesWithNumberOfLines(p2LineCount),
        },
        heights: {
          p1: p1LineCount * columnLineHeight,
          p2: p2LineCount * columnLineHeight,
        },
      },
    };

    const columns = chunkContentIntoColumns(
      [paragraph1, paragraph2],
      articleMeasurements,
      { ...columnParameters, columnHeight: maxColumnLines * columnLineHeight },
    );
    expect(columns).toHaveLength(2);
    expect(columns[0]).toMatchObject([
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
    expect(columns[1]).toMatchObject([
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
  });

  it("chunks 2 content items into 3 columns", () => {
    const maxColumnLines = 20;
    const p1LineCount = 30;
    const p2LineCount = 20;

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

    const articleMeasurements: ArticleMeasurements = {
      bylineHeight: 0,
      contents: {
        lines: {
          p1: createLinesWithNumberOfLines(p1LineCount),
          p2: createLinesWithNumberOfLines(p2LineCount),
        },
        heights: {
          p1: p1LineCount * columnLineHeight,
          p2: p2LineCount * columnLineHeight,
        },
      },
    };

    const columns = chunkContentIntoColumns(
      [paragraph1, paragraph2],
      articleMeasurements,
      { ...columnParameters, columnHeight: maxColumnLines * columnLineHeight },
    );
    expect(columns).toHaveLength(3);
    expect(columns[0]).toMatchObject([
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
    expect(columns[1]).toMatchObject([
      {
        children: [
          {
            attributes: {
              value: createTextWithNumberOfLines(10, maxColumnLines),
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
              value: createTextWithNumberOfLines(10, 0),
            },
            children: [],
            name: "text",
          },
        ],
      },
    ]);
    expect(columns[2]).toMatchObject([
      {
        children: [
          {
            attributes: {
              value: createTextWithNumberOfLines(10, 10),
            },
            children: [],
            name: "text",
          },
        ],
      },
    ]);
  });

  // TODO fix
  it("factors in byline when chunking", () => {
    const maxLinesInColumn = 20;
    const linesInContent = 18;
    const paragraph = createParagraphWithText(
      createTextWithNumberOfLines(linesInContent),
      {
        id: "p1",
      },
    );

    const articleMeasurements: ArticleMeasurements = {
      bylineHeight: 20,
      contents: {
        lines: {
          p1: createLinesWithNumberOfLines(linesInContent),
        },
        heights: {
          p1: linesInContent * columnLineHeight,
        },
      },
    };

    const [columns] = chunkContentIntoColumns(
      [paragraph],
      articleMeasurements,
      {
        ...columnParameters,
        columnHeight: maxLinesInColumn * columnLineHeight,
      },
    );

    expect(columns).toHaveLength(2);
    expect(columns[0]).toMatchObject([
      {
        children: [
          {
            attributes: {
              value: createTextWithNumberOfLines(maxLinesInColumn - 3), // 3 lines taken by byline/headline
            },
            children: [],
            name: "text",
          },
        ],
      },
    ]);
    expect(columns[1]).toMatchObject([
      {
        children: [
          {
            attributes: {
              value: createTextWithNumberOfLines(1, maxLinesInColumn - 3),
            },
            children: [],
            name: "text",
          },
        ],
      },
    ]);
  });
});
