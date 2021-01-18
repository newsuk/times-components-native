import { TileConfig } from "@times-components-native/types";

interface Slice {
  support: {
    config?: TileConfig;
  };
  name: string;
  id: string;
  [key: string]: any;
}

interface TransformSlice {
  name: string;
  sectionTitle: string;
  transform: (slice: Slice) => Slice;
}

const leadOneAndOneNewsTransform = {
  sectionTitle: "News",
  name: "LeadOneAndOneSlice",
  transform: (slice: Slice) => ({
    ...slice,
    support: { ...slice.support, config: { showImage: true } },
  }),
};

const sliceTransformations: TransformSlice[] = [leadOneAndOneNewsTransform];

export const transformSlice = (isTablet: boolean, sectionTitle: string) => (
  slice: Slice,
): Slice => {
  if (!isTablet) return slice;

  const transformation = sliceTransformations.find(
    (st) =>
      st.name == slice.name &&
      st.sectionTitle.toUpperCase() === sectionTitle.toUpperCase(),
  );
  return transformation?.transform(slice) ?? slice;
};
