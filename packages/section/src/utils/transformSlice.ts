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
    support: {
      ...slice.support,
      config: {
        ...slice.support.config,
        summary: { length: 800 },
        image: {
          ratio: "3:2",
        },
      },
    },
  }),
};

const leadOneAndOneRegisterTransform = {
  sectionTitle: "Register",
  name: "LeadOneAndOneSlice",
  transform: (slice: Slice) => {
    console.log("###### SLICE 1", slice.lead.config);
    return {
      ...slice,
      lead: {
        ...slice.lead,
        config: {
          ...slice.lead.config,
          image: {
            ratio: "16:9",
          },
          summary: { length: 800 },
        },
      },
      support: {
        ...slice.support,
        config: {
          ...slice.support.config,
          image: {
            ratio: "3:2",
          },
          summary: { length: 800 },
        },
      },
    };
  },
};

const sliceTransformations: TransformSlice[] = [
  leadOneAndOneNewsTransform,
  leadOneAndOneRegisterTransform,
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
