import { transformSlice } from "../../src/utils/transformSlice";

describe("transformSlice", () => {
  const originalSlice = {
    id: "a",
    name: "LeadOneAndOneSlice",
    support: {},
    lead: {},
  };

  describe("for the News section", () => {
    const sectionTitle = "News";

    it("should not make any changes on mobile", () => {
      const transformedSlice = transformSlice(
        false,
        sectionTitle,
      )(originalSlice);
      expect(transformedSlice).toEqual(originalSlice);
    });

    it("shows support tile image if LeadOneAndOneSlice", () => {
      const transformedSlice = transformSlice(
        true,
        sectionTitle,
      )(originalSlice);
      expect(transformedSlice).toEqual({
        ...originalSlice,
        support: {
          config: {
            showImage: true,
          },
        },
      });
    });

    it("shows not show support tile image on other slices", () => {
      const anotherSlice = { ...originalSlice, name: "OtherSlice" };
      const transformedSlice = transformSlice(true, sectionTitle)(anotherSlice);
      expect(transformedSlice).toEqual(anotherSlice);
    });
  });
});
