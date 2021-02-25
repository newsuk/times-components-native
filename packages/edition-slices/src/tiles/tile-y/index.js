/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import { editionBreakpoints } from "@times-components-native/styleguide";
import WithoutWhiteSpace from "../shared/without-white-space";
import { TileLink, TileSummary, withTileTracking } from "../shared";
import stylesFactory from "./styles";

const TileY = ({
  onPress,
  tile,
  breakpoint = editionBreakpoints.medium,
  orientation,
}) => {
  const styles = stylesFactory(breakpoint, orientation);

  return (
    <TileLink onPress={onPress} style={styles.container} tile={tile}>
      <WithoutWhiteSpace
        render={(whiteSpaceHeight) => (
          <TileSummary
            headlineStyle={styles.headline}
            summary={tile.article.content}
            summaryStyle={styles.summary}
            tile={tile}
            whiteSpaceHeight={whiteSpaceHeight}
          />
        )}
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
