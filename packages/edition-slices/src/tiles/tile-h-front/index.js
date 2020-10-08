/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import { FrontTileSummary } from "@times-components-native/front-page";
import { getDimensions } from "@times-components-native/utils";
import { getTileStrapline, TileLink } from "../shared";
import { getStyle } from "./styles";

const TileHFront = ({ onPress, tile, orientation }) => {
  const { width: windowWidth } = getDimensions();
  const styles = getStyle(orientation, windowWidth);

  const { article } = tile;

  return (
    <TileLink onPress={onPress} style={styles.container} tile={tile}>
      <FrontTileSummary
        headlineStyle={styles.headline}
        strapline={getTileStrapline(tile)}
        straplineStyle={styles.strapline}
        summary={article.content}
        summaryStyle={styles.summary}
        tile={tile}
        bylines={article.bylines}
        template={article.template}
      />
    </TileLink>
  );
};

TileHFront.propTypes = {
  onPress: PropTypes.func.isRequired,
  tile: PropTypes.shape({}).isRequired,
};

export default TileHFront;
