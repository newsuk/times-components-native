import { SliceConfig } from "@times-components-native/section/src/utils/transformSlice";
import { TileConfig } from "@times-components-native/types";

const lead1Base: Pick<TileConfig, "headline" | "summary"> = {
  summary: { length: 1000 },
  headline: { fontSize: 40 },
};

const lead2Base: Pick<TileConfig, "headline" | "summary"> = {
  summary: { length: 1000 },
  headline: { fontSize: 30 },
};

const support1Base: Pick<TileConfig, "headline" | "summary" | "image"> = {
  summary: { length: 800 },
  headline: { fontSize: 24 },
  image: { ratio: "3:2", orientation: "landscape" },
};

const support2Base: Pick<TileConfig, "headline" | "image"> = {
  image: { ratio: "2:3", orientation: "portrait" },
  headline: { fontSize: 28 },
};

export const LeadTwoNoPicAndTwoVariant2SliceConfig: SliceConfig = {
  lead1: {
    config: {
      wide: {
        ...lead1Base,
        headline: { fontSize: 35 },
      },
      huge: {
        ...lead1Base,
        headline: { fontSize: 35 },
      },
      medium: {
        ...lead1Base,
      },
    },
  },
  lead2: {
    config: {
      wide: {
        ...lead2Base,
        headline: { fontSize: 28 },
      },
      huge: {
        ...lead2Base,
        headline: { fontSize: 28 },
      },
      medium: {
        ...lead2Base,
      },
    },
  },
  support1: {
    config: {
      wide: { ...support1Base, headline: { fontSize: 22 } },
      huge: { ...support1Base, headline: { fontSize: 22 } },
      medium: { ...support1Base },
    },
  },
  support2: {
    config: {
      wide: {
        ...support2Base,
        headline: { fontSize: 24 },
        image: { ratio: "4:5", orientation: "landscape" },
        portrait: { ratio: "2:3" },
      },
      huge: {
        ...support2Base,
        headline: { fontSize: 24 },
        image: { ratio: "4:5", orientation: "landscape" },
      },
      medium: {
        ...support2Base,
      },
    },
  },
};
