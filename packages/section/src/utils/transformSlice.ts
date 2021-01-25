import { leadOneAndOneSliceConfig } from "@times-components-native/edition-slices/src/slices/leadoneandone/config";
import { ConfiguredTile } from "@times-components-native/types";
import merge from "lodash.merge";

type SliceNames = "LeadTwoNoPicAndTwoSlice" | "LeadOneAndOneSlice";

type SliceNameConfig = Record<SliceNames, Slice>;

const baseConfigs: SliceNameConfig = {
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
  id?: string;
  [key: string]: any;
}
interface TransformSlice {
  name: string;
  sectionTitle: string;
  overrides: (slice: Slice) => Slice;
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

  //merges existing slice tile data with the base config
  const mergeBaseConfig = Object.keys(slice).reduce((acc, curtileName) => {
    return Object.keys(baseConfigs[slice.name]).includes(curtileName)
      ? {
          ...acc,
          [curtileName]: {
            ...slice[curtileName],
            ...baseConfigs[slice.name][curtileName],
            config: {
              ...baseConfigs[slice.name][curtileName].config,
            },
          },
        }
      : acc;
  }, {});

  // no transform but base config is truthy so passes the base config to slice that contains a configured tile or tiles
  if (!transformation && baseConfigs[slice.name]) {
    return {
      ...slice,
      ...mergeBaseConfig,
    };
  }

  // uses base config if someone forgets to set ovverrides in transform
  if (!transformation.overrides)
    return {
      ...slice,
      ...mergeBaseConfig,
    };

  //merges existing slice tile data with the transform ovverrides
  const mergeTileOverrideData = Object.keys(slice).reduce(
    (acc, curtileName) => {
      if (curtileName === "name") {
        return acc;
      }

      return Object.keys(transformation.overrides).includes(curtileName)
        ? {
            ...acc,
            [curtileName]: {
              ...slice[curtileName],
              config: merge({
                ...baseConfigs[slice.name][curtileName].config,
                ...transformation.overrides[curtileName].config,
              }),
            },
          }
        : {
            ...acc,
            [curtileName]: {
              ...slice[curtileName],
              config: {
                ...baseConfigs[slice.name][curtileName].config,
              },
            },
          };
    },
    {},
  );

  return { ...slice, ...mergeTileOverrideData };
};
