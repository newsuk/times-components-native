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
import { ConfiguredTile, OnArticlePress } from "@times-components-native/types";
import {
  getAspectRatio,
  getCropByRatio,
} from "@times-components-native/image/src/utils";

interface Props {
  onPress: OnArticlePress;
  tile: ConfiguredTile;
  breakpoint: string;
}

const TileColStandard: FC<Props> = ({ onPress, tile, breakpoint }) => {
  const { config } = tile;

  console.log("config", config, breakpoint);
  const tileConfig = config[breakpoint];
  console.log("tileConfig", tileConfig);

  const styles = styleFactory(tileConfig, breakpoint);

  const renderTileImage = ({ article: { hasVideo } }: any, imageProps: any) => {
    const crop = getTileImage(tile, getCropByRatio(imageProps?.ratio));

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
        aspectRatio={getAspectRatio(imageProps?.ratio)}
        relativeWidth={relativeWidth}
        relativeHeight={relativeHeight}
        relativeHorizontalOffset={relativeHorizontalOffset}
        relativeVerticalOffset={relativeVerticalOffset}
        style={styles.imageContainer}
        uri={url}
        hasVideo={hasVideo}
      />
    ) as any;
  };

  return (
    <TileLink onPress={onPress} style={styles.container} tile={tile}>
      {tileConfig.image && renderTileImage(tile, tileConfig.image)}
      <WithoutWhiteSpace
        render={(whiteSpaceHeight: number) => (
          <TileSummary
            headlineStyle={styles.headline}
            {...(tileConfig?.summary && {
              summary: getTileSummary(tile, tileConfig?.summary.length),
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
