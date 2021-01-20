import { TileConfig } from "@times-components-native/types";
import { imageAspectRatios } from "./sectionConfigs";

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

const leadTwoNoPicAndTwoVariant2SportTransform = {
  sectionTitle: "sport",
  name: "LeadTwoNoPicAndTwoSlice",
  transform: (slice: Slice) => ({
    ...slice,
    support1: {
      ...slice.support1,
      config: {
        summary: { length: 800 },
        wide: { image: { ratio: "3:2", orientation: "landscape" } },
        huge: { image: { ratio: "3:2", orientation: "landscape" } },
        medium: {},
      },
    },
  }),
};

const sliceTransformations: TransformSlice[] = [
  leadOneAndOneNewsTransform,
  leadTwoNoPicAndTwoVariant2SportTransform,
];

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
