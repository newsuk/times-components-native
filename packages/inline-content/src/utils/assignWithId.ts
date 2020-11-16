import { ParagraphContent } from "@times-components-native/types";

export const assignWithId = (width: number) => (
  content: ParagraphContent,
  idx: number,
): ParagraphContent => {
  return {
    ...content,
    id: `${idx}-${width}`, //suffixing the width ensures that we re-measure the content if the orientation changes - and that we don't unnecessarily re-measure if orientation changes back
  };
};
