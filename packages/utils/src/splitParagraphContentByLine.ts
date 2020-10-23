import {
  ArticleContent,
  Measurements,
  ParagraphContent,
  ParagraphContentChild,
} from "@times-components-native/types";
import { PARAGRAPH_INDENT_CHAR } from "@times-components-native/front-page/front-renderer";
import { uuid } from "@times-components-native/utils/src/random";

const addChildToArticleContent = (
  articleContent: ParagraphContent,
  child: ParagraphContentChild,
) => ({
  ...articleContent,
  children: [...articleContent.children, child],
});

export const calculateParagraphChildSize = (
  child: ParagraphContentChild,
): number => {
  switch (child.name) {
    case "text":
      return child.attributes.value.length;
    case "break":
      return 1;
    default:
      return child.children
        .map(calculateParagraphChildSize)
        .reduce((a, b) => a + b, 0);
  }
};
export const calculateArticleContentSize = (
  articleContent: ParagraphContent,
): number => {
  const tabSize = articleContent.attributes?.tab
    ? PARAGRAPH_INDENT_CHAR.length
    : 0;

  const contentSize = articleContent.children.reduce(
    (acc, child) => acc + calculateParagraphChildSize(child),
    0,
  );
  return contentSize + tabSize;
};

export const splitParagraphContentChild = (
  child: ParagraphContentChild,
  splitPosition: number,
): [ParagraphContentChild, ParagraphContentChild] => {
  if (child.name === "text") {
    const value = child.attributes.value;
    return [
      {
        ...child,
        attributes: { value: value.slice(0, splitPosition) },
      },
      {
        ...child,
        attributes: { value: value.slice(splitPosition) },
      },
    ];
  }
  if (
    child.name === "link" ||
    child.name === "italic" ||
    child.name === "bold"
  ) {
    const contentChild = child.children[0];
    const contentChildValue = contentChild?.attributes?.value ?? "";
    return [
      {
        ...child,
        children: [
          {
            ...contentChild,
            attributes: {
              value: contentChildValue.slice(0, splitPosition),
            },
          },
        ],
      },
      {
        ...child,
        children: [
          {
            ...contentChild,
            attributes: {
              value: contentChildValue.slice(splitPosition),
            },
          },
        ],
      },
    ];
  }

  return [child, child];
};

export const splitParagraphContent = (
  articleContent: ParagraphContent,
  splitPosition: number,
): [ParagraphContent, ParagraphContent] => {
  const emptyArticleContentA: ArticleContent = {
    ...articleContent,
    name: articleContent.name,
    children: [],
    id: uuid(),
    split: true,
  };
  const emptyArticleContentB: ArticleContent = {
    name: articleContent.name,
    children: [],
    id: uuid(),
  };

  return articleContent.children.reduce(
    ([articleContentChunkA, articleContentChunkB], child) => {
      const childSize = calculateParagraphChildSize(child);

      const articleContentChunkASize = calculateArticleContentSize(
        articleContentChunkA,
      );

      if (articleContentChunkASize + childSize <= splitPosition) {
        // there is capacity in chunk 1 for next child, so we add all of its contents to chunk 1
        return [
          addChildToArticleContent(articleContentChunkA, child),
          articleContentChunkB,
        ];
      } else if (articleContentChunkASize < splitPosition) {
        // there is not enough capacity in chunk 1 for all of the next child, so we split the contents into chunks 1 and 2
        const [
          articleChildChunkA,
          articleChildChunkB,
        ] = splitParagraphContentChild(
          child,
          splitPosition - articleContentChunkASize,
        );
        return [
          addChildToArticleContent(articleContentChunkA, articleChildChunkA),
          addChildToArticleContent(articleContentChunkB, articleChildChunkB),
        ];
      } else {
        // there is no capacity in chunk 1, so we put all of the contents into chunk 2
        return [
          articleContentChunkA,
          addChildToArticleContent(articleContentChunkB, child),
        ];
      }
    },
    [emptyArticleContentA, emptyArticleContentB],
  );
};

export const splitParagraphContentByLine = (
  articleContent: ParagraphContent,
  lineNumber: number,
  measurements: Measurements,
  lineHeight: number,
): [ParagraphContent, ParagraphContent, Measurements] => {
  const contentLines = measurements.contents.lines[articleContent.id!];
  const splitPosition = contentLines
    .slice(0, lineNumber)
    .reduce((sum, next) => sum + next.text.length, 0);
  const [articleContentA, articleContentB] = splitParagraphContent(
    articleContent,
    splitPosition,
  );

  const linesForA = contentLines.slice(0, lineNumber);
  const linesForB = contentLines.slice(lineNumber);
  const heightA = linesForA.length * lineHeight;
  const heightB = linesForB.length * lineHeight;

  const updatedMeasurements: Measurements = {
    ...measurements,
    contents: {
      ...measurements.contents,
      heights: {
        ...measurements.contents.heights,
        [articleContentA.id!]: heightA,
        [articleContentB.id!]: heightB,
      },
      lines: {
        ...measurements.contents.lines,
        [articleContentA.id!]: linesForA,
        [articleContentB.id!]: linesForB,
      },
    },
  };

  return [articleContentA, articleContentB, updatedMeasurements];
};
