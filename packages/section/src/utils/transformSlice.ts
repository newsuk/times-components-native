import { LeadTwoNoPicAndTwoVariant2SliceConfig } from "@times-components-native/edition-slices/src/slices/leadtwonopicandtwovariant2/config";
import { leadOneAndOneSliceConfig } from "@times-components-native/edition-slices/src/slices/leadoneandone/config";
import {
  ConfiguredTile,
  SliceName,
  TileConfig,
} from "@times-components-native/types";
import merge from "lodash.merge";

type ConfigTile = Omit<ConfiguredTile, "article">;
export type SliceConfig = Omit<Slice, "Name" | "id">;

export interface Slice {
  support?: ConfigTile;
  support1?: ConfigTile;
  support2?: ConfigTile;
  lead1?: ConfigTile;
  lead2?: ConfigTile;
  lead?: ConfigTile;
  name: SliceName;
  id: string;
  [key: string]: any;
}

type SliceNameConfig = Partial<Record<SliceName, SliceConfig>>;

const baseConfigs: SliceNameConfig = {
  LeadTwoNoPicAndTwoSlice: LeadTwoNoPicAndTwoVariant2SliceConfig,
  LeadOneAndOneSlice: leadOneAndOneSliceConfig,
};

interface TransformSlice {
  name: string;
  sectionTitle: string;
  overrides: SliceConfig;
}

const sharedSupportConfig: Pick<TileConfig, "summary" | "image"> = {
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

  if (!baseConfig) return slice;

  if (!transformation || !transformationConfig) {
    const mergedBaseConfig = Object.keys(slice).reduce((acc, tileName) => {
      return Object.keys(baseConfig).includes(tileName)
        ? {
            ...acc,
            [tileName]: merge({}, slice[tileName], baseConfig[tileName]),
          }
        : acc;
    }, {});

    return {
      ...slice,
      ...mergedBaseConfig,
    };
  }

  const mergedTileConfig = Object.keys(slice)
    .filter((sliceKey) => Object.keys(baseConfig).includes(sliceKey))
    .reduce((acc, tileName) => {
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
    }, {});

  return { ...slice, ...mergedTileConfig };
};
