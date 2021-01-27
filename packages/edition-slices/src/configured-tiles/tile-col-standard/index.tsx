import React, { FC } from "react";
import {
  getTileImage,
  getTileSummary,
  TileImage,
  TileLink,
  TileSummary,
  withTileTracking,
} from "../../tiles/shared";

import styleFactory from "./styles";
import WithoutWhiteSpace from "../../tiles/shared/without-white-space";
import PositionedTileStar from "../../tiles/shared/positioned-tile-star";
import {
  TransformConfiguredTile,
  OnArticlePress,
  EditionBreakpointKeys,
  TileConfig,
} from "@times-components-native/types";
import {
  getAspectRatio,
  getCropByRatio,
} from "@times-components-native/image/src/utils";
import {
  Crop,
  Tile,
} from "@times-components-native/fixture-generator/src/types";
import { Orientation } from "@times-components-native/responsive/src/context";

interface Props {
  onPress: OnArticlePress;
  tile: TransformConfiguredTile;
  breakpoint: EditionBreakpointKeys;
  orientation: Orientation;
}

const TileColStandard: FC<Props> = ({
  onPress,
  tile,
  breakpoint,
  orientation,
}) => {
  if (!tile.config) return null;

  const config = tile.config[breakpoint];

  const styles = styleFactory(config as TileConfig);

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

    const crop: Crop = getTileImage(tile, getCropByRatio(imageRatio));

    if (!crop) {
      return null;
    }

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
        hasVideo={article.hasVideo}
      />
    );
  };

  return (
    <TileLink onPress={onPress} style={styles.container} tile={tile}>
      {config?.image && renderTileImage(tile, config)}
      <WithoutWhiteSpace
        render={(whiteSpaceHeight: number) => (
          <TileSummary
            headlineStyle={styles.headline}
            {...(config?.summary && {
              summary: getTileSummary(tile, config?.summary.length),
              summaryStyle: styles.summary,
            })}
            tile={tile}
            whiteSpaceHeight={whiteSpaceHeight}
            withStar={false}
          />
        )}
      />
      <PositionedTileStar articleId={tile.article.id} />
    </TileLink>
  );
};

export default withTileTracking(TileColStandard);
