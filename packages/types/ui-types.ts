import { Tile } from "@times-components-native/fixture-generator/src/types";
import { Orientation } from "@times-components-native/responsive/src/context";
import { Slice } from "@times-components-native/section/src/utils/transformSlice";
import { editionBreakpoints } from "@times-components-native/styleguide";

export type EditionBreakpointKeys = keyof typeof editionBreakpoints;

type ImageAspectRatios = "16:9" | "3:2" | "4:5" | "2:3";

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
export interface TileConfig {
  summary?: { length: number };
  portrait?: { ratio: ImageAspectRatios };
  image?: {
    ratio: ImageAspectRatios;
    orientation?: Orientation;
  };
  headline: { fontSize: number };
}

export type TransformTileConfig = Optional<TileConfig, "headline">;

type BaseConfig<T> = {
  [K in EditionBreakpointKeys]?: T;
};
export interface TransformConfiguredTile extends Tile {
  config: BaseConfig<TransformTileConfig>;
}

export type DefaultSliceConfigs = {
  config: BaseConfig<TileConfig>;
};

export type SliceBaseConfig = Omit<
  Slice<Partial<DefaultSliceConfigs>>,
  "name" | "id"
>;

export type OnArticlePress = (args: { id: string; isPuff?: boolean }) => void;
