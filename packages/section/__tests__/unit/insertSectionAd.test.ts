import { insertSectionAd } from "../../src/utils/insertSectionAd";

describe("insertSectionAd", () => {
  const originalSlices = [
    { id: "a", name: "LeadersSlice" },
    { id: "b", name: "DailyUniversalRegister" },
    { id: "c", name: "OtherSlice" },
    { id: "d", name: "LeadersSlice" },
  ];

  it("should not insert ads for mobile", () => {
    expect(insertSectionAd(false)(originalSlices)).toEqual(originalSlices);
  });

  it("should not insert ads for sections that have too few slices", () => {
    const slices = originalSlices.slice(0, 1);
    expect(insertSectionAd(true)(slices)).toEqual(slices);
  });

  it("should insert sections ads", () => {
    expect(insertSectionAd(true)(originalSlices)).toEqual([
      { id: "a", name: "LeadersSlice" },
      { id: "b", name: "DailyUniversalRegister" },
      { id: "c", name: "OtherSlice" },
      { name: "SectionAd", slotName: "native-section-ad" },
      { id: "d", name: "LeadersSlice" },
    ]);
  });
});
