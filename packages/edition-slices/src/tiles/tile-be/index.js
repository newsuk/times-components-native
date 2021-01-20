import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import {
  getTileImage,
  TileLink,
  TileSummary,
  TileImage,
  withTileTracking,
} from "../shared";
import styles from "./styles";

const TileBE = ({ onPress, tile }) => {
  const crop = getTileImage(tile, "crop11");

  if (!crop) return null;

  return (
    <TileLink onPress={onPress} style={styles.container} tile={tile}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
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
      </View>
      <TileSummary
        headlineStyle={styles.headline}
        style={styles.summaryContainer}
        tile={tile}
      />
    </TileLink>
  );
};

TileBE.propTypes = {
  onPress: PropTypes.func.isRequired,
  tile: PropTypes.shape({}).isRequired,
};

export default withTileTracking(TileBE);
