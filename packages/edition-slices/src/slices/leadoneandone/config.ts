import { SliceBaseConfig, TileConfig } from "@times-components-native/types";

const leadBaseConfig: Pick<TileConfig, "image" | "headline"> = {
  image: {
    ratio: "16:9",
  },
  headline: {
    fontSize: 30,
  },
};

const supportBaseConfig: Pick<TileConfig, "headline" | "summary"> = {
  headline: {
    fontSize: 20,
  },
  summary: {
    length: 800,
  },
};

export const leadOneAndOneSliceConfig: SliceBaseConfig = {
  lead: {
    config: {
      smallTablet: { ...leadBaseConfig },
      medium: { ...leadBaseConfig },
      wide: { ...leadBaseConfig },
      huge: { ...leadBaseConfig },
    },
  },
  support: {
    config: {
      smallTablet: { ...supportBaseConfig },
      medium: { ...supportBaseConfig },
      wide: { ...supportBaseConfig },
      huge: {
        ...supportBaseConfig,
        headline: {
          fontSize: 22,
        },
      },
    },
  },
};
