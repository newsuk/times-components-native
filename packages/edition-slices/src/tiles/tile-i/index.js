import React from "react";
import PropTypes from "prop-types";
import {
  getTileImage,
  TileLink,
  TileSummary,
  TileImage,
  withTileTracking,
} from "../shared";
import styles from "./styles";

const TileI = ({ onPress, tile }) => {
  const crop = getTileImage(tile, "crop169");

  if (!crop) {
    return null;
  }

  const {
    article: { hasVideo },
  } = tile;

  return (
    <TileLink onPress={onPress} tile={tile}>
      <TileImage
        aspectRatio={16 / 9}
        relativeWidth={crop.relativeWidth}
        relativeHeight={crop.relativeHeight}
        relativeHorizontalOffset={crop.relativeHorizontalOffset}
        relativeVerticalOffset={crop.relativeVerticalOffset}
        style={styles.imageContainer}
        uri={crop.url}
        hasVideo={hasVideo}
      />
      <TileSummary
        headlineStyle={styles.headline}
        style={styles.summaryContainer}
        tile={tile}
        centeredStar
        underneathTextStar
      />
    </TileLink>
  );
};

TileI.propTypes = {
  onPress: PropTypes.func.isRequired,
  tile: PropTypes.shape({}).isRequired,
};

export default withTileTracking(TileI);
