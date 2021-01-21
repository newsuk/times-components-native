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
  const {
    article: { hasVideo },
    config,
  } = tile;

  const styles = styleFactory(config, breakpoint);

  const crop =
    config?.image && getTileImage(tile, getCropByRatio(config?.image?.ratio));

  return (
    <TileLink onPress={onPress} style={styles.container} tile={tile}>
      {crop && config?.image && (
        <TileImage
          aspectRatio={getAspectRatio(config?.image?.ratio)}
          relativeWidth={crop.relativeWidth}
          relativeHeight={crop.relativeHeight}
          relativeHorizontalOffset={crop.relativeHorizontalOffset}
          relativeVerticalOffset={crop.relativeVerticalOffset}
          style={styles.imageContainer}
          uri={crop.url}
          hasVideo={hasVideo}
        />
      )}
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
