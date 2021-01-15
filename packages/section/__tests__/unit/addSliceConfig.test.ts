import { addSliceConfig } from "../../src/utils/addSliceConfig";

describe("addSliceConfig", () => {
  const originalSlices = [
    { id: "a", name: "LeadOneAndOneSlice", support: {}, lead: {} },
    { id: "b", name: "OtherSlice" },
  ];

  describe("for the News section", () => {
    const sectionTitle = "News";

    it("should not make any changes on mobile", () => {
      const transformedSlices = addSliceConfig(
        false,
        sectionTitle,
      )(originalSlices);
      expect(transformedSlices).toEqual(originalSlices);
    });

    it("shows support tile image on 1st tile if LeadOneAndOneSlice", () => {
      const transformedSlices = addSliceConfig(
        true,
        sectionTitle,
      )(originalSlices);
      expect(transformedSlices[0]).toEqual({
        ...originalSlices[0],
        support: {
          config: {
            showImage: true,
          },
        },
      });
    });
  });
});
