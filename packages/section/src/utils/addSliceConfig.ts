import { TileConfig } from "@times-components-native/types";

export const addSliceConfig = (isTablet: boolean, sectionTitle: string) => (
  slices: any[],
) => {
  if (!isTablet) return slices;

  return slices.map((slice, index) => {
    if (
      sectionTitle.match(/News/i) &&
      slice.name === "LeadOneAndOneSlice" &&
      index == 0
    ) {
      const tileConfig: TileConfig = { showImage: true };
      return {
        ...slice,
        support: { ...slice.support, config: tileConfig },
      };
    }
    return slice;
  });
};
