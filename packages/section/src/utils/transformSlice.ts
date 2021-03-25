import { LeadTwoNoPicAndTwoVariant2SliceConfig } from "@times-components-native/edition-slices/src/slices/leadtwonopicandtwovariant2/config";
import { leadOneAndOneSliceConfig } from "@times-components-native/edition-slices/src/slices/leadoneandone/config";
import {
  TransformConfiguredTile,
  SliceName,
  TransformTileConfig,
} from "@times-components-native/types";
import merge from "lodash.merge";

type TileNames =
  | "support"
  | "support1"
  | "support2"
  | "lead1"
  | "lead2"
  | "lead";

export type Slice<T> = {
  [k in TileNames]?: T;
} & {
  name: SliceName;
  id: string;
  [key: string]: any;
};

export type SliceMap = Omit<
  Slice<Partial<TransformConfiguredTile>>,
  "name" | "id"
>;

type SliceNameMap = Partial<Record<SliceName, SliceMap>>;
interface TransformSlice {
  name: SliceName;
  sectionTitle: string;
  overrides: Partial<SliceMap>;
}

const baseConfigs: SliceNameMap = {
  LeadTwoNoPicAndTwoSlice: LeadTwoNoPicAndTwoVariant2SliceConfig,
  LeadOneAndOneSlice: leadOneAndOneSliceConfig,
};

const sharedSupportConfig: TransformTileConfig = {
  summary: { length: 800 },
  image: {
    ratio: "3:2",
  },
};

const leadOneAndOneNewsTransform: TransformSlice = {
  sectionTitle: "News",
  name: "LeadOneAndOneSlice",
  overrides: {
    support: {
      config: {
        smallTablet: sharedSupportConfig,
        medium: sharedSupportConfig,
        wide: sharedSupportConfig,
        huge: sharedSupportConfig,
      },
    },
  },
};

const leadOneAndOneWorldTransform: TransformSlice = {
  sectionTitle: "World",
  name: "LeadOneAndOneSlice",
  overrides: {
    support: {
      config: {
        smallTablet: sharedSupportConfig,
        medium: sharedSupportConfig,
        wide: sharedSupportConfig,
        huge: sharedSupportConfig,
      },
    },
  },
};

const leadOneAndOneSportTransform: TransformSlice = {
  sectionTitle: "Sport",
  name: "LeadOneAndOneSlice",
  overrides: {
    support: {
      config: {
        smallTablet: sharedSupportConfig,
        medium: sharedSupportConfig,
        wide: sharedSupportConfig,
        huge: sharedSupportConfig,
      },
    },
  },
};

const leadOneAndOneRegisterTransform: TransformSlice = {
  sectionTitle: "Register",
  name: "LeadOneAndOneSlice",
  overrides: {
    lead: {
      config: {
        smallTablet: {
          image: {
            ratio: "16:9",
          },
          summary: { length: 800 },
          headline: {
            fontSize: 40,
          },
        },
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
        smallTablet: sharedSupportConfig,
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
  slice: Slice<TransformConfiguredTile>,
): Slice<TransformConfiguredTile> => {
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
