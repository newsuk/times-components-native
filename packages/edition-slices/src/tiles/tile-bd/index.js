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

const TileBD = ({ onPress, tile, breakpoint = editionBreakpoints.medium }) => {
  const crop = getTileImage(tile, "crop11");
  const styles = stylesFactory(breakpoint);

  if (!crop) return null;

  return (
    <TileLink onPress={onPress} style={styles.container} tile={tile}>
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <TileImage
            aspectRatio={1}
            relativeWidth={crop.relativeWidth}
            relativeHeight={crop.relativeHeight}
            relativeHorizontalOffset={crop.relativeHorizontalOffset}
            relativeVerticalOffset={crop.relativeVerticalOffset}
            style={styles.imageContainer}
            uri={crop.url}
            fill
            rounded
            resizeMode="cover"
          />
          <TileSummary
            headlineStyle={styles.headline}
            style={styles.summaryContainer}
            tile={tile}
            withStar={false}
          />
        </View>
        <PositionedTileStar
          customStyles={styles.customStarPosition}
          articleId={tile.article.id}
        />
      </View>
    </TileLink>
  );
};

TileBD.propTypes = {
  onPress: PropTypes.func.isRequired,
  tile: PropTypes.shape({}).isRequired,
  breakpoint: PropTypes.string,
};

export default withTileTracking(TileBD);
