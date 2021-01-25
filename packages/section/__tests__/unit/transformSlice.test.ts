import { leadOneAndOneSliceConfig } from "@times-components-native/edition-slices/src/slices/leadoneandone/config";
import { Slice, transformSlice } from "../../src/utils/transformSlice";

jest.mock(
  "@times-components-native/edition-slices/src/slices/leadoneandone/config",
  () => ({
    leadOneAndOneSliceConfig: {
      lead: {
        config: {
          mock: "mockLead",
        },
      },
      support: {
        config: {
          mock: "mockSupport",
        },
      },
    },
  }),
);

describe("transformSlice", () => {
  describe("for the News section", () => {
    const sectionTitle = "News";

    const originalSlice = {
      id: "a",
      name: "LeadOneAndOneSlice",
      support: { config: {} },
      lead: { config: {} },
    } as Slice;
    it("should not make any changes on mobile", () => {
      const transformedSlice = transformSlice(
        false,
        sectionTitle,
      )(originalSlice);
      expect(transformedSlice).toEqual(originalSlice);
    });

    it("does not leak transform data on other slices", () => {
      const anotherSlice = { ...originalSlice, name: "OtherSlice" } as any;
      const transformedSlice = transformSlice(true, sectionTitle)(anotherSlice);
      expect(transformedSlice).toEqual(anotherSlice);
    });
  });

  describe("transform with base configs", () => {
    const sectionTitle = "Sport";

    const originalSliceConfigSlice = {
      id: "a",
      name: "LeadTwoNoPicAndTwoSlice",
      lead: { config: {} },
      support: { config: {} },
    } as Slice;
    it("should return base config if no transform found ", () => {
      const transformedSlice = transformSlice(
        true,
        sectionTitle,
      )(originalSliceConfigSlice);

      expect(transformedSlice).toEqual({
        ...originalSliceConfigSlice,
        id: "a",
        name: "LeadTwoNoPicAndTwoSlice",
      });
    });
    it("should merge override data if transform overrides exists", () => {
      const transformedSlice = transformSlice(
        true,
        "News",
      )({ ...originalSliceConfigSlice, name: "LeadOneAndOneSlice" });

      expect(transformedSlice).toEqual({
        ...leadOneAndOneSliceConfig,
        support: {
          ...leadOneAndOneSliceConfig.support,
          config: {
            ...leadOneAndOneSliceConfig.support.config,
            huge: {
              summary: { length: 800 },
              image: {
                ratio: "3:2",
              },
            },
            wide: {
              summary: { length: 800 },
              image: {
                ratio: "3:2",
              },
            },
            medium: {
              summary: { length: 800 },
              image: {
                ratio: "3:2",
              },
            },
          },
        },
        id: "a",
        name: "LeadOneAndOneSlice",
      });
    });
  });
});
