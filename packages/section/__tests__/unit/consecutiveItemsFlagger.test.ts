import { consecutiveItemsFlagger } from "../../src/utils/consecutiveItemsFlagger";
import { Orientation } from "@times-components-native/responsive/src/types";

describe("consecutiveItemsFlagger", () => {
  const landscape = Orientation.LANDSCAPE;
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

    const newData = consecutiveItemsFlagger(landscape)(originalData);

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

    const newData = consecutiveItemsFlagger(landscape)(originalData);
    expect(newData).toMatchSnapshot();
    expect(newData).toEqual(flaggedData);
  });

  it("should add isConsecutive property to alternating slices", () => {
    const originalData = [
      { id: "a", name: "LeadersSlice" },
      { id: "b", name: "SecondaryFourSlice" },
      { id: "c", name: "SecondaryFourSlice" },
      { id: "d", name: "SecondaryFourSlice" },
      { id: "e", name: "SecondaryFourSlice" },
    ];

    const flaggedData = [
      { id: "a", name: "LeadersSlice" },
      { id: "b", name: "SecondaryFourSlice" },
      { id: "c", name: "SecondaryFourSlice", isConsecutive: true },
      { id: "d", name: "SecondaryFourSlice" },
      { id: "e", name: "SecondaryFourSlice", isConsecutive: true },
    ];

    const newData = consecutiveItemsFlagger(landscape)(originalData);
    expect(newData).toEqual(flaggedData);
  });

  it("should add isConsecutive property on a SecondaryFourSlice that follows a TopSecondaryFourSlice", () => {
    const originalData = [
      { id: "a", name: "TopSecondaryFourSlice" },
      { id: "b", name: "SecondaryFourSlice" },
      { id: "c", name: "OtherSlice" },
    ];

    const flaggedData = [
      { id: "a", name: "TopSecondaryFourSlice" },
      { id: "b", name: "SecondaryFourSlice", isConsecutive: true },
      { id: "c", name: "OtherSlice" },
    ];

    const newData = consecutiveItemsFlagger(landscape)(originalData);
    expect(newData).toEqual(flaggedData);
  });

  it("should add isConsecutive property on a SecondaryFourSlice that follows a LeadOneAndOneSlice on portrait", () => {
    const originalData = [
      { id: "a", name: "LeadOneAndOneSlice" },
      { id: "b", name: "SecondaryFourSlice" },
      { id: "c", name: "OtherSlice" },
    ];

    const flaggedData = [
      { id: "a", name: "LeadOneAndOneSlice" },
      { id: "b", name: "SecondaryFourSlice", isConsecutive: true },
      { id: "c", name: "OtherSlice" },
    ];

    const newData = consecutiveItemsFlagger(Orientation.PORTRAIT)(originalData);
    expect(newData).toEqual(flaggedData);
  });

  it("should not add isConsecutive property on a SecondaryFourSlice that follows a LeadOneAndOneSlice on landscape", () => {
    const originalData = [
      { id: "a", name: "LeadOneAndOneSlice" },
      { id: "b", name: "SecondaryFourSlice" },
      { id: "c", name: "OtherSlice" },
    ];

    const flaggedData = [
      { id: "a", name: "LeadOneAndOneSlice" },
      { id: "b", name: "SecondaryFourSlice" },
      { id: "c", name: "OtherSlice" },
    ];

    const newData = consecutiveItemsFlagger(Orientation.LANDSCAPE)(
      originalData,
    );
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
    consecutiveItemsFlagger(landscape)(originalData);
    expect(JSON.stringify(originalData)).toEqual(json);
  });
});
