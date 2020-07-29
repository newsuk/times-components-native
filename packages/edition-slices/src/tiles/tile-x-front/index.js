/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import editionBreakpoints from "@times-components-native/styleguide";
import {
  getTileStrapline,
  TileLink,
  FrontTileSummary,
  getTileSummary,
} from "../shared";
import stylesFactory from "./styles";
import WithoutWhiteSpace from "../shared/without-white-space";
import PositionedTileStar from "../shared/positioned-tile-star";

const TileXFront = ({
  onPress,
  tile,
  breakpoint = editionBreakpoints.medium,
}) => {
  const styles = stylesFactory(breakpoint);

  return (
    <TileLink onPress={onPress} style={styles.container} tile={tile}>
      <WithoutWhiteSpace
        render={(whiteSpaceHeight) => (
          <FrontTileSummary
            headlineStyle={styles.headline}
            strapline={getTileStrapline(tile)}
            straplineStyle={styles.strapline}
            summary={getTileSummary(tile, 1000)}
            summaryStyle={styles.summary}
            tile={tile}
            whiteSpaceHeight={whiteSpaceHeight}
            withStar={false}
          />
        )}
      />
      <PositionedTileStar articleId={tile.article.id} />
    </TileLink>
  );
};

TileXFront.propTypes = {
  onPress: PropTypes.func.isRequired,
  tile: PropTypes.shape({}).isRequired,
  breakpoint: PropTypes.string,
};

export default TileXFront;
