import { leadOneAndOneSliceConfig } from "@times-components-native/edition-slices/src/slices/leadoneandone/config";
import { TransformConfiguredTile } from "@times-components-native/types";
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
  describe("transform with base configs", () => {
    const sectionTitle = "News";

    const originalSliceConfigSlice = {
      id: "a",
      name: "LeadTwoNoPicAndTwoSlice",
      lead: { config: {} },
      support: { config: {} },
    } as Slice<TransformConfiguredTile>;

    it("should not make any changes on mobile", () => {
      const transformedSlice = transformSlice(
        false,
        sectionTitle,
      )(originalSliceConfigSlice);
      expect(transformedSlice).toEqual(originalSliceConfigSlice);
    });

    it("does not leak transform data onto other slices", () => {
      const anotherSlice = {
        ...originalSliceConfigSlice,
        name: "OtherSlice",
      } as any;
      const transformedSlice = transformSlice(true, sectionTitle)(anotherSlice);
      expect(transformedSlice).toEqual(anotherSlice);
    });
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
