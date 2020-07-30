import { Markup } from "@times-components-native/fixture-generator/src/types";

const addTab = (content: Markup, index: number): Markup => {
  if (content.name !== "paragraph") return content;

  const addTab = index > 0;
  return { ...content, attributes: { ...content.attributes, tab: addTab } };
};

export const indent = (contents: Markup[]) => contents.map(addTab);
