import { ParagraphContent } from "@times-components-native/types";
import { assignWithId } from "../../src/utils/assignWithId";

describe("assignWithId", () => {
  it("returns content with an id", () => {
    const content = {
      name: "paragraph",
      children: [],
    } as ParagraphContent;

    const contentWithId = assignWithId(300)(content, 5);

    expect(contentWithId).toEqual({
      name: "paragraph",
      children: [],
      id: "5-300",
    });
  });
});
