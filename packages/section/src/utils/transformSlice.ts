import { TileConfig } from "@times-components-native/types";
import merge from "lodash.merge";

// configure slice

const base = {
  support1: {
    summary: { length: 800 },
    showImage: true,
    wide: { image: { ratio: "3:2", orientation: "landscape" } },
    huge: { image: { ratio: "3:2", orientation: "landscape" } },
    medium: {},
  },
  support2: {
    image: { ratio: "2:3", orientation: "portrait" },
    showImage: true,
    wide: {},
    huge: { image: { ratio: "4:5", orientation: "landscape" } },
    medium: {},
  },
};

const baseConfigs = {
  LeadTwoNoPicAndTwoSlice: base,
};

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

// const leadOneAndOneNewsTransform = {
//   sectionTitle: "News",
//   name: "LeadOneAndOneSlice",
//   transform: (slice: Slice) => ({
//     ...slice,
//     support: { ...slice.support, config: { showImage: true } },
//   }),
// };

const leadTwoNoPicAndTwoVariant2SportTransform = {
  sectionTitle: "world",
  name: "LeadTwoNoPicAndTwoSlice",
  overrides: {
    support1: {
      summary: { length: "summaryMerge" },
      showImage: false,
      wide: { image: { ratio: "dog", orientation: "landscape" } },
      huge: { image: { ratio: "cat", orientation: "landscape" } },
      medium: {},
    },
    support2: {
      image: { ratio: "2:3", orientation: "portrait" },
      showImage: "falsy",
      wide: {},
      huge: { image: { ratio: "elephant", orientation: "landscape" } },
      medium: {},
    },
  },
};

const sliceTransformations: TransformSlice[] = [
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

  // merge
  // if no base
  // console.log(
  //   merge(
  //     baseConfigs[slice.name],
  //     transformation.overrides[slice.name],
  //     "trying to merge",
  //   ),
  // );
  if (!transformation || !baseConfigs[transformation.name]) return slice;

  const test = {
    ...slice,
    config: merge(baseConfigs[slice.name], transformation.overrides),
  };

  // console.log(test);

  return transformation?.overrides
    ? {
        ...slice,
        config: merge(baseConfigs[slice.name], transformation.overrides),
      }
    : {
        ...slice,
        config: {
          ...baseConfigs[slice.name],
        },
      };
};
