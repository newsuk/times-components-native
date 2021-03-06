import React from "react";
import PropTypes from "prop-types";
import {
  getTileImage,
  getTileSummary,
  TileLink,
  TileSummary,
  TileImage,
  withTileTracking,
} from "../shared";
import styles from "./styles";

const TileAN = ({ onPress, tile }) => {
  const crop = getTileImage(tile, "crop11");

  if (!crop) {
    return null;
  }

  return (
    <TileLink onPress={onPress} style={styles.container} tile={tile}>
      <TileImage
        aspectRatio={1}
        relativeWidth={crop.relativeWidth}
        relativeHeight={crop.relativeHeight}
        relativeHorizontalOffset={crop.relativeHorizontalOffset}
        relativeVerticalOffset={crop.relativeVerticalOffset}
        style={styles.imageContainer}
        uri={crop.url}
        rounded
        resizeMode="cover"
      />
      <TileSummary
        headlineStyle={styles.headline}
        style={styles.summaryContainer}
        summary={getTileSummary(tile, 125)}
        tile={tile}
      />
    </TileLink>
  );
};

TileAN.propTypes = {
  onPress: PropTypes.func.isRequired,
  tile: PropTypes.shape({}).isRequired,
};

export default withTileTracking(TileAN);
