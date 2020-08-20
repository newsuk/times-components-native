/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { FrontTileSummary } from "@times-components-native/front-page";
import { TileLink, withTileTracking } from "../shared";
import stylesFactory from "./styles";

const TileYFront = ({
  onPress,
  tile,
  orientation,
  breakpoint = editionBreakpoints.medium,
}) => {
  const styles = stylesFactory(breakpoint);

  return (
    <TileLink onPress={onPress} style={styles.container} tile={tile}>
      <FrontTileSummary
        headlineStyle={
          orientation === "landscape"
            ? styles.headlineLandscape
            : styles.headlinePortrait
        }
        summary={tile.article.content}
        summaryStyle={styles.summary}
        tile={tile}
        bylines={tile.article.bylines}
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
