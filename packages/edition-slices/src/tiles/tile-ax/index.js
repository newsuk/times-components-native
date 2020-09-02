/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import {
  getTileImage,
  TileLink,
  TileSummary,
  TileImage,
  withTileTracking,
} from "../shared";
import stylesFactory from "./styles";
import PositionedTileStar from "../shared/positioned-tile-star";
import { editionBreakpoints } from "@times-components-native/styleguide";

const TileAX = ({
  onPress,
  tile,
  orientation,
  breakpoint = editionBreakpoints.medium,
}) => {
  const styles = stylesFactory(breakpoint);
  const crop = getTileImage(tile, "crop32");

  if (!crop) return null;

  const {
    article: { hasVideo },
  } = tile;

  return (
    <TileLink onPress={onPress} style={styles.container} tile={tile}>
      <TileImage
        aspectRatio={3 / 2}
        relativeWidth={crop.relativeWidth}
        relativeHeight={crop.relativeHeight}
        relativeHorizontalOffset={crop.relativeHorizontalOffset}
        relativeVerticalOffset={crop.relativeVerticalOffset}
        style={styles.imageContainer}
        uri={crop.url}
        fill
        hasVideo={hasVideo}
      />
      <TileSummary
        headlineStyle={
          orientation === "landscape"
            ? styles.headlineLandscape
            : styles.headlinePortrait
        }
        tile={tile}
      />
      <PositionedTileStar articleId={tile.article.id} />
    </TileLink>
  );
};

TileAX.propTypes = {
  onPress: PropTypes.func.isRequired,
  tile: PropTypes.shape({}).isRequired,
  breakpoint: PropTypes.string,
};

export default withTileTracking(TileAX);
