import { Line } from "../../src/types";
import { ParagraphContent } from "@times-components-native/types";

const range = (n: number) => [...Array(n).keys()];

export const createTextWithNumberOfLines = (
  numberOfLines: number,
  offset = 0,
): string =>
  range(numberOfLines)
    .map((i) => `line${i + offset}`)
    .join("");

export const createLinesWithNumberOfLines = (numberOfLines: number): Line[] =>
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
