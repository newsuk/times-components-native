/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import { editionBreakpoints } from "@times-components-native/styleguide";
import {
  TileLink,
  TileSummary,
  withTileTracking,
  getTileSummary,
} from "../shared";
import stylesFactory from "./styles";

const TileY = ({
  onPress,
  tile,
  breakpoint = editionBreakpoints.medium,
  orientation,
}) => {
  const styles = stylesFactory(breakpoint, orientation);
  const summaryLength =
    (breakpoint === "wide" && orientation === "portrait") ||
    breakpoint === "huge"
      ? 1000
      : 300;

  return (
    <TileLink onPress={onPress} style={styles.container} tile={tile}>
      <TileSummary
        headlineStyle={styles.headline}
        summary={getTileSummary(tile, summaryLength)}
        summaryStyle={styles.summary}
        tile={tile}
      />
    </TileLink>
  );
};

TileY.propTypes = {
  onPress: PropTypes.func.isRequired,
  tile: PropTypes.shape({}).isRequired,
  breakpoint: PropTypes.string,
};

export default withTileTracking(TileY);
