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

  // no transform object and no default base config so only use slice in old format
  if (!transformation && !baseConfigs[slice.name]) return slice;

  // no transform but base config is truthy so passes the base config to slice that contains a configured tile or tiles
  if (
    (!transformation && baseConfigs[slice.name]) ||
    !transformation?.overrides
  ) {
    //merges existing slice tile data with the base config
    const mergedBaseConfig = Object.keys(slice).reduce((acc, curtileName) => {
      return Object.keys(baseConfigs[slice.name]).includes(curtileName)
        ? {
            ...acc,
            [curtileName]: {
              ...slice[curtileName],
              ...baseConfigs[slice.name][curtileName],
            },
          }
        : acc;
    }, {});

    return {
      ...slice,
      ...mergedBaseConfig,
    };
  }

  //merges existing slice tile data with the transform overrides
  const mergedTileConfig = Object.keys(slice).reduce((acc, curtileName) => {
    {
      if (["name", "id"].includes(curtileName)) return acc;

      return {
        ...acc,
        [curtileName]: {
          ...slice[curtileName],
          config: transformation.overrides[curtileName]
            ? merge({
                ...baseConfigs[slice.name][curtileName].config,
                ...transformation.overrides[curtileName].config,
              })
            : { ...baseConfigs[slice.name][curtileName].config },
        },
      };
    }
  }, {});

  // merges overrides with existing tile data
  return { ...slice, ...mergedTileConfig };
};
