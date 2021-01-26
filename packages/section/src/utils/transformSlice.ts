import { l2NoPic2V2Config } from "@times-components-native/edition-slices/src/slices/leadtwonopicandtwovariant2/config";
import { leadOneAndOneSliceConfig } from "@times-components-native/edition-slices/src/slices/leadoneandone/config";
import { ConfiguredTile, SliceName } from "@times-components-native/types";
import merge from "lodash.merge";
import assign from "lodash/assign";
// import mergedeepright from "ramda.mergedeepright";
import mergeright from "ramda.mergeright";

export interface Slice {
  support?: ConfiguredTile;
  support1?: ConfiguredTile;
  support2?: ConfiguredTile;
  lead1?: ConfiguredTile;
  lead2?: ConfiguredTile;
  lead?: ConfiguredTile;
  name: SliceName;
  id: string;
  [key: string]: any;
}

type SliceBaseConfig = Omit<Slice, "name" | "id">;

type SliceNameConfig = Partial<Record<SliceName, SliceBaseConfig>>;

const baseConfigs: SliceNameConfig = {
  LeadTwoNoPicAndTwoSlice: l2NoPic2V2Config,
  LeadOneAndOneSlice: leadOneAndOneSliceConfig,
};

interface TransformSlice {
  name: string;
  sectionTitle: string;
  overrides: SliceBaseConfig;
}

const sharedSupportConfig = {
  summary: { length: 800 },
  image: {
    ratio: "3:2",
  },
};

const leadOneAndOneNewsTransform = {
  sectionTitle: "News",
  name: "LeadOneAndOneSlice",
  overrides: {
    support: {
      config: {
        medium: sharedSupportConfig,
        wide: sharedSupportConfig,
        huge: sharedSupportConfig,
      },
    },
  },
};

const leadOneAndOneWorldTransform = {
  sectionTitle: "World",
  name: "LeadOneAndOneSlice",
  overrides: {
    support: {
      config: {
        medium: sharedSupportConfig,
        wide: sharedSupportConfig,
        huge: sharedSupportConfig,
      },
    },
  },
};

const leadOneAndOneSportTransform = {
  sectionTitle: "Sport",
  name: "LeadOneAndOneSlice",
  overrides: {
    support: {
      config: {
        medium: sharedSupportConfig,
        wide: sharedSupportConfig,
        huge: sharedSupportConfig,
      },
    },
  },
};

const leadOneAndOneRegisterTransform = {
  sectionTitle: "Register",
  name: "LeadOneAndOneSlice",
  overrides: {
    lead: {
      config: {
        medium: {
          image: {
            ratio: "16:9",
          },
          summary: { length: 800 },
          headline: {
            fontSize: 40,
          },
        },
      },
    },
    support: {
      config: {
        medium: sharedSupportConfig,
        wide: sharedSupportConfig,
        huge: sharedSupportConfig,
      },
    },
  },
};

const sliceTransformations: TransformSlice[] = [
  leadOneAndOneNewsTransform,
  leadOneAndOneWorldTransform,
  leadOneAndOneSportTransform,
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

  const baseConfig = baseConfigs[slice.name];
  const transformationConfig = transformation?.overrides;

  if (!transformation || !baseConfig) return slice;

  if ((!transformation && baseConfig) || !transformationConfig) {
    const mergedBaseConfig = Object.keys(slice).reduce((acc, tileName) => {
      return Object.keys(baseConfig).includes(tileName)
        ? {
            ...acc,
            [tileName]: {
              ...slice[tileName],
              ...baseConfig[tileName],
            },
          }
        : acc;
    }, {} as SliceBaseConfig);

    return {
      ...slice,
      ...mergedBaseConfig,
    };
  }

  const mergedTileConfig = Object.keys(slice)
    .filter((sliceKey) => Object.keys(baseConfig).includes(sliceKey))
    .reduce((acc, tileName) => {
      console.log(baseConfig[tileName].config, "mergedTileConfig1");
      return {
        ...acc,
        [tileName]: {
          ...slice[tileName],
          config: transformationConfig[tileName]
            ? merge(
                {},
                baseConfig[tileName].config,
                transformationConfig[tileName].config,
              )
            : { ...baseConfig[tileName].config },
        },
      };
    }, {} as SliceBaseConfig);

  console.log(mergedTileConfig, "mergedTileConfig2");

  return { ...slice, ...mergedTileConfig };
};
