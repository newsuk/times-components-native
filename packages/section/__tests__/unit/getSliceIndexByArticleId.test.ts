import { getSliceIndexByArticleId } from "../../src/utils/getSliceIndexByArticleId";

describe("getSliceIndexByArticleId", () => {
  const data = [
    {
      id: "a",
      name: "LeadersSlice",
      items: [{ articleId: "zxc" }, { articleId: "vbn" }],
    },
    {
      id: "b",
      name: "DailyUniversalRegister",
      items: [{ articleId: "123" }, { articleId: "456" }],
    },
    {
      id: "c",
      name: "OtherSlice",
      items: [{ articleId: "asd" }, { articleId: "fgh" }],
    },
  ];

  it("should return 0 if article not found", () => {
    expect(getSliceIndexByArticleId("qwe", data)).toEqual(0);
  });

  it("should return slice index if article found", () => {
    expect(getSliceIndexByArticleId("123", data)).toEqual(1);
  });

  it("should handle slices with no items", () => {
    expect(
      getSliceIndexByArticleId("123", [
        { id: "x", name: "NoItemsSlice" },
        ...data,
      ]),
    ).toEqual(2);
  });
});
