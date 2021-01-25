import { l2NoPic2V2Config } from "@times-components-native/edition-slices/src/slices/leadtwonopicandtwovariant2/config";
import { leadOneAndOneSliceConfig } from "@times-components-native/edition-slices/src/slices/leadoneandone/config";
import { ConfiguredTile } from "@times-components-native/types";
import merge from "lodash.merge";

type SliceNames = "LeadTwoNoPicAndTwoSlice" | "LeadOneAndOneSlice";

type SliceBaseConfig = Omit<Slice, "name" | "id">;

type SliceNameConfig = Record<SliceNames, SliceBaseConfig>;

const baseConfigs: SliceNameConfig = {
  LeadTwoNoPicAndTwoSlice: l2NoPic2V2Config,
  LeadOneAndOneSlice: leadOneAndOneSliceConfig,
};

export interface Slice {
  support?: ConfiguredTile;

  support1?: ConfiguredTile;

  support2?: ConfiguredTile;

  lead1?: ConfiguredTile;

  lead2?: ConfiguredTile;

  lead?: ConfiguredTile;

  name: SliceNames;
  id: string;
  [key: string]: any;
}
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

  if (!transformation && !baseConfigs[slice.name]) return slice;

  if (
    (!transformation && baseConfigs[slice.name]) ||
    !transformation?.overrides
  ) {
    const mergedBaseConfig = Object.keys(slice).reduce((acc, tileName) => {
      return Object.keys(baseConfigs[slice.name]).includes(tileName)
        ? {
            ...acc,
            [tileName]: {
              ...slice[tileName],
              ...baseConfigs[slice.name][tileName],
            },
          }
        : acc;
    }, {});

    return {
      ...slice,
      ...mergedBaseConfig,
    };
  }

  const mergedTileConfig = Object.keys(slice)
    .filter((sliceKey) =>
      Object.keys(baseConfigs[slice.name]).includes(sliceKey),
    )
    .reduce((acc, tileName) => {
      {
        return {
          ...acc,
          [tileName]: {
            ...slice[tileName],
            config: transformation.overrides[tileName]
              ? merge({
                  ...baseConfigs[slice.name][tileName].config,
                  ...transformation.overrides[tileName].config,
                })
              : { ...baseConfigs[slice.name][tileName].config },
          },
        };
      }
    }, {});

  return { ...slice, ...mergedTileConfig };
};
