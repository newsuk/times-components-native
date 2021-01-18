import { TileConfig } from "@times-components-native/types";

interface Slice {
  support: {
    config: TileConfig;
  };
}

interface TransformSlice {
  index: number;
  name: string;
  sectionTitle: string;
  transform: (slice: Slice) => Slice;
}

const transformLeadOneAndOneNews = {
  sectionTitle: "News",
  index: 0,
  name: "LeadOneAndOneSlice",
  transform: (slice: Slice) => ({
    ...slice,
    support: { ...slice.support, config: { showImage: true } },
  }),
};

const sliceTransformations: TransformSlice[] = [transformLeadOneAndOneNews];

export const addSliceConfig = (isTablet: boolean, sectionTitle: string) => (
  slices: any[],
) => {
  if (!isTablet) return slices;

  return slices.map((slice, index) => {
    const transformation = sliceTransformations.find(
      (st) =>
        st.index === index &&
        st.name == slice.name &&
        st.sectionTitle.toUpperCase() === sectionTitle.toUpperCase(),
    );
    return transformation?.transform(slice) ?? slice;
  });
};
