/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import { editionBreakpoints } from "@times-components-native/styleguide";
import {
  TileLink,
  FrontTileSummary,
  withTileTracking,
  getTileSummary,
} from "../shared";
import stylesFactory from "./styles";

const TileYFront = ({
  onPress,
  tile,
  breakpoint = editionBreakpoints.medium,
}) => {
  const styles = stylesFactory(breakpoint);

  return (
    <TileLink onPress={onPress} style={styles.container} tile={tile}>
      <FrontTileSummary
        headlineStyle={styles.headline}
        summary={getTileSummary(tile, 300)}
        summaryStyle={styles.summary}
        tile={tile}
      />
    </TileLink>
  );
};

TileYFront.propTypes = {
  onPress: PropTypes.func.isRequired,
  tile: PropTypes.shape({}).isRequired,
  breakpoint: PropTypes.string,
};

export default withTileTracking(TileYFront);
