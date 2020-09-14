/* eslint-disable react/require-default-props */
import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { editionBreakpoints } from "@times-components-native/styleguide";
import {
  getTileImage,
  TileLink,
  TileSummary,
  TileImage,
  withTileTracking,
} from "../shared";
import stylesFactory from "./styles";
import PositionedTileStar from "../shared/positioned-tile-star";

const TileBF = ({ onPress, tile, breakpoint = editionBreakpoints.medium }) => {
  const styles = stylesFactory(breakpoint);
  const crop = getTileImage(tile, "crop169");

  if (!crop) return null;

  const {
    article: { hasVideo },
  } = tile;

  return (
    <TileLink onPress={onPress} style={styles.container} tile={tile}>
      <View style={styles.summaryContainer}>
        <TileSummary
          headlineStyle={styles.headline}
          tile={tile}
          withStar={false}
        />
        <PositionedTileStar articleId={tile.article.id} />
      </View>

      <View style={styles.imageOuterContainer}>
        <TileImage
          aspectRatio={16 / 9}
          relativeWidth={crop.relativeWidth}
          relativeHeight={crop.relativeHeight}
          relativeHorizontalOffset={crop.relativeHorizontalOffset}
          relativeVerticalOffset={crop.relativeVerticalOffset}
          uri={crop.url}
          fill
          hasVideo={hasVideo}
        />
      </View>
    </TileLink>
  );
};

TileBF.propTypes = {
  onPress: PropTypes.func.isRequired,
  tile: PropTypes.shape({}).isRequired,
  breakpoint: PropTypes.string,
};

export default withTileTracking(TileBF);
