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
      return {
        ...slice,
        support: { ...slice.support, config: { showImage: true } },
      };
    }
    return slice;
  });
};
