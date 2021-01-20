import { consecutiveItemsFlagger } from "../../src/utils/consecutiveItemsFlagger";

describe("consecutiveItemsFlagger", () => {
  it("should not add any properties if there aren't any consecutive slices", () => {
    const originalData = [
      { id: "a", name: "LeadersSlice" },
      { id: "b", name: "DailyUniversalRegister" },
      { id: "c", name: "OtherSlice" },
      { id: "d", name: "LeadersSlice" },
      { id: "e", name: "DailyUniversalRegister" },
      { id: "f", name: "SecondaryFourSlice" },
      { id: "g", name: "OtherSlice" },
      { id: "h", name: "LeadersSlice" },
      { id: "i", name: "OtherSlice" },
      { id: "j", name: "SecondaryFourSlice" },
      { id: "k", name: "DailyUniversalRegister" },
      { id: "l", name: "SecondaryFourSlice" },
    ];

    const newData = consecutiveItemsFlagger(originalData);

    expect(newData).toEqual(originalData);
  });

  it("should add isConsecutive property on the second consecutive slice", () => {
    const originalData = [
      { id: "a", name: "LeadersSlice" },
      { id: "b", name: "DailyUniversalRegister" },
      { id: "c", name: "OtherSlice" },
      { id: "d", name: "LeadersSlice" },
      { id: "e", name: "DailyUniversalRegister" },
      { id: "f", name: "SecondaryFourSlice" },
      { id: "g", name: "SecondaryFourSlice" },
      { id: "h", name: "LeadersSlice" },
      { id: "i", name: "OtherSlice" },
      { id: "j", name: "SecondaryFourSlice" },
      { id: "k", name: "DailyUniversalRegister" },
      { id: "l", name: "DailyUniversalRegister" },
    ];

    const flaggedData = [
      { id: "a", name: "LeadersSlice" },
      { id: "b", name: "DailyUniversalRegister" },
      { id: "c", name: "OtherSlice" },
      { id: "d", name: "LeadersSlice" },
      { id: "e", name: "DailyUniversalRegister" },
      { id: "f", name: "SecondaryFourSlice" },
      { isConsecutive: true, id: "g", name: "SecondaryFourSlice" },
      { id: "h", name: "LeadersSlice" },
      { id: "i", name: "OtherSlice" },
      { id: "j", name: "SecondaryFourSlice" },
      { id: "k", name: "DailyUniversalRegister" },
      { isConsecutive: true, id: "l", name: "DailyUniversalRegister" },
    ];

    const newData = consecutiveItemsFlagger(originalData);
    expect(newData).toMatchSnapshot();
    expect(newData).toEqual(flaggedData);
  });

  it("should not mutate passed data", () => {
    const originalData = [
      { id: "a", name: "LeadersSlice" },
      { id: "b", name: "DailyUniversalRegister" },
      { id: "c", name: "OtherSlice" },
      { id: "d", name: "LeadersSlice" },
      { id: "e", name: "DailyUniversalRegister" },
      { id: "f", name: "SecondaryFourSlice" },
      { id: "g", name: "OtherSlice" },
      { id: "h", name: "LeadersSlice" },
      { id: "i", name: "OtherSlice" },
      { id: "j", name: "SecondaryFourSlice" },
      { id: "k", name: "DailyUniversalRegister" },
      { id: "l", name: "SecondaryFourSlice" },
    ];
    const json = JSON.stringify(originalData);
    consecutiveItemsFlagger(originalData);
    expect(JSON.stringify(originalData)).toEqual(json);
  });
});
