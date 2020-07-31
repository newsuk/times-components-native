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
import WithoutWhiteSpace from "@times-components-native/edition-slices/src/tiles/shared/without-white-space";

const TileYFront = ({
  onPress,
  tile,
  orientation,
  breakpoint = editionBreakpoints.medium,
}) => {
  const styles = stylesFactory(breakpoint);

  return (
    <TileLink onPress={onPress} style={styles.container} tile={tile}>
      <WithoutWhiteSpace
        render={(whiteSpaceHeight) => (
          <FrontTileSummary
            headlineStyle={
              orientation === "landscape"
                ? styles.headlineLandscape
                : styles.headlinePortrait
            }
            summary={getTileSummary(tile, 1000)}
            summaryStyle={styles.summary}
            tile={tile}
            bylines={tile.article.bylines}
            whiteSpaceHeight={whiteSpaceHeight}
          />
        )}
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
