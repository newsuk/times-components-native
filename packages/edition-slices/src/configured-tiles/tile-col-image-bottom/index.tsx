import React, { FC } from "react";
import {
  Tile,
  Crop,
} from "@times-components-native/fixture-generator/src/types";
import { editionBreakpoints } from "@times-components-native/styleguide";
import {
  getTileImage,
  getTileSummary,
  TileImage,
  TileLink,
  TileSummary,
  withTileTracking,
} from "../../tiles/shared";
import stylesFactory from "./styles";
import WithoutWhiteSpace from "../../tiles/shared/without-white-space";
import {
  getAspectRatio,
  getCropByRatio,
} from "@times-components-native/image/src/utils";
import {
  TransformConfiguredTile,
  OnArticlePress,
  EditionBreakpointKeys,
  TileConfig,
} from "@times-components-native/types";
import { Orientation } from "@times-components-native/responsive/src/context";

interface Props {
  onPress: OnArticlePress;
  tile: TransformConfiguredTile;
  breakpoint: EditionBreakpointKeys;
  orientation: Orientation;
}

const TileColImageBottom: FC<Props> = ({
  onPress,
  tile,
  breakpoint = editionBreakpoints.medium,
  orientation,
}) => {
  if (!tile.config) return null;

  const config = tile.config[breakpoint as EditionBreakpointKeys];

  const styles = stylesFactory(config as TileConfig);

  const renderTileImage = (
    { article }: Tile,
    imageConfig: Pick<TileConfig, "image" | "portrait">,
  ) => {
    if (
      !(
        imageConfig.image?.orientation === orientation ||
        imageConfig?.portrait ||
        !imageConfig.image?.orientation
      )
    ) {
      return null;
    }

    const imageRatio =
      imageConfig.portrait && orientation === "portrait"
        ? imageConfig.portrait.ratio
        : imageConfig.image?.ratio;

    if (!imageRatio) return null;

    const crop: Crop | null = getTileImage(tile, getCropByRatio(imageRatio));

    if (!crop) return null;

    const {
      relativeWidth,
      relativeHeight,
      relativeHorizontalOffset,
      relativeVerticalOffset,
      url,
    } = crop;

    return (
      <TileImage
        aspectRatio={getAspectRatio(imageRatio)}
        relativeWidth={relativeWidth}
        relativeHeight={relativeHeight}
        relativeHorizontalOffset={relativeHorizontalOffset}
        relativeVerticalOffset={relativeVerticalOffset}
        style={styles.imageContainer}
        uri={url}
        hasVideo={article?.hasVideo}
      />
    );
  };

  return (
    <TileLink onPress={onPress} style={styles.container} tile={tile}>
      <WithoutWhiteSpace
        render={(whiteSpaceHeight: number) => (
          <TileSummary
            headlineStyle={styles.headline}
            tile={tile}
            whiteSpaceHeight={whiteSpaceHeight}
            {...(config?.summary && {
              summary: getTileSummary(tile, config?.summary.length),
              summaryStyle: styles.summary,
            })}
          />
        )}
      />
      {config?.image && renderTileImage(tile, config)}
    </TileLink>
  );
};

export default withTileTracking(TileColImageBottom);
