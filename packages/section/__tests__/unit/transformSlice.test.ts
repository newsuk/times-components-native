import { baseConfig } from "@times-components-native/edition-slices/src/slices/leadtwonopicandtwovariant2/baseConfig";
import { Slice, transformSlice } from "../../src/utils/transformSlice";

jest.mock(
  "@times-components-native/edition-slices/src/slices/leadtwonopicandtwovariant2/baseConfig",
  () => ({
    baseConfig: {
      lead1: {
        config: {
          mock: "mockLead1",
        },
      },
      support: {
        config: {
          mock: "mockSupport",
        },
      },
      support2: {
        config: {
          mock: "mockSupport2",
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

    it("shows not show support tile image on other slices", () => {
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
      lead1: {},
      support: {},
      support2: {},
    } as Slice;
    it("should return base config if no transform found ", () => {
      const transformedSlice = transformSlice(
        true,
        sectionTitle,
      )(originalSliceConfigSlice);

      expect(transformedSlice).toEqual({
        ...baseConfig,
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
        ...baseConfig,
        support: {
          ...baseConfig.support,
          config: {
            ...baseConfig.support.config,
            huge: {
              summary: { length: 800 },
              image: {
                ratio: "3:2",
                orientation: "portrait",
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
