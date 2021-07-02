import { prepareSlicesForRender } from "../../src/utils/prepareSlicesForRender";
import { Orientation } from "@times-components-native/responsive/src/types";

describe("prepareSlicesForRender", () => {
  it("should transform data", () => {
    const originalData = [
      { id: "a", name: "LeadersSlice" },
      { id: "b", name: "DailyUniversalRegister" },
      { id: "c", name: "OtherSlice" },
      { id: "d", name: "LeadersSlice" },
      { id: "e", name: "DailyUniversalRegister" },
      { id: "f", name: "OtherSlice" },
      { id: "g", name: "OtherSlice" },
      { id: "h", name: "LeadersSlice" },
      { id: "i", name: "OtherSlice" },
      { id: "j", name: "OtherSlice" },
      { id: "k", name: "OtherSlice" },
      { id: "l", name: "DailyUniversalRegister" },
    ];

    const prepararedData = prepareSlicesForRender(
      true,
      "News",
      Orientation.LANDSCAPE,
    )(originalData);
    expect(prepararedData).toMatchSnapshot();
  });
});
