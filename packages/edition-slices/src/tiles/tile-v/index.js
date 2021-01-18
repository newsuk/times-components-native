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

const TileV = ({
  onPress,
  tile,
  imageAspectRatio: { width = 16, height = 9 },
}) => {
  const crop = getTileImage(tile, `crop${width}${height}`);

  if (!crop) {
    return null;
  }

  const {
    article: { hasVideo },
  } = tile;

  return (
    <TileLink onPress={onPress} style={styles.container} tile={tile}>
      <TileImage
        aspectRatio={width / height}
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
        headlineStyle={styles.headline}
        tile={tile}
        style={styles.summaryContainer}
      />
    </TileLink>
  );
};

TileV.propTypes = {
  onPress: PropTypes.func.isRequired,
  tile: PropTypes.shape({}).isRequired,
  imageAspectRatio: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
};

export default withTileTracking(TileV);
