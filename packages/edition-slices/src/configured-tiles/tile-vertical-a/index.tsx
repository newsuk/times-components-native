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
  ConfiguredTile,
  OnArticlePress,
  EditionBreakpointKeys,
  Orientation,
  TileConfig,
} from "@times-components-native/types";
import {
  Tile,
  Crop,
} from "@times-components-native/fixture-generator/src/types";
import {
  getAspectRatio,
  getCropByRatio,
} from "@times-components-native/image/src/utils";

interface Props {
  onPress: OnArticlePress;
  tile: ConfiguredTile;
  breakpoint: EditionBreakpointKeys;
  orientation: Orientation;
}

const TileVerticalA: FC<Props> = ({
  onPress,
  tile,
  breakpoint,
  orientation,
}) => {
  if (!tile.config) return null;

  const config = tile.config[breakpoint];

  const styles = styleFactory(config);

  const renderTileImage = ({ article }: Tile, imageProps: TileConfig) => {
    const imageRatio =
      imageProps.portrait && orientation === "portrait"
        ? imageProps.portrait.ratio
        : imageProps.image?.ratio;

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
        hasVideo={article?.hasVideo}
      />
    );
  };

  return (
    <TileLink onPress={onPress} style={styles.container} tile={tile}>
      {config?.image &&
        (config.image?.orientation === orientation || config?.portrait) &&
        renderTileImage(tile, config)}
      <WithoutWhiteSpace
        render={(whiteSpaceHeight: number) => (
          <TileSummary
            headlineStyle={styles.headline}
            tile={tile}
            whiteSpaceHeight={whiteSpaceHeight}
            withStar={false}
            {...(config?.summary && {
              summary: getTileSummary(tile, config?.summary.length),
              summaryStyle: styles.summary,
            })}
          />
        )}
      />
      <PositionedTileStar articleId={tile.article?.id} />
    </TileLink>
  );
};

export default withTileTracking(TileVerticalA);
