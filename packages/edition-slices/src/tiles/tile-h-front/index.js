/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import { FrontTileSummary } from "@times-components-native/front-page";
import { getDimensions } from "@times-components-native/utils";
import { getTileStrapline, TileLink } from "../shared";
import { getStyle } from "./styles";

const TileHFront = ({ onPress, tile, orientation }) => {
  const { width: windowWidth, height: windowHeight } = getDimensions();
  const styles = getStyle(orientation, windowWidth, windowHeight);

  const { article } = tile;

  let strapline = getTileStrapline(tile);
  return (
    <TileLink onPress={onPress} style={styles.container} tile={tile}>
      <FrontTileSummary
        headlineStyle={styles.headline}
        headlineMarginBottom={styles.headlineMarginBottom}
        strapline={strapline}
        straplineStyle={styles.strapline}
        straplineMarginTop={styles.straplineMarginTop}
        straplineMarginBottom={styles.straplineMarginBottom}
        summary={article.content}
        summaryStyle={styles.summary}
        summaryLineHeight={styles.summary.lineHeight}
        bylines={article.bylines}
        bylineMarginBottom={styles.bylineMarginBottom}
        justified={false}
        tile={tile}
      />
    </TileLink>
  );
};

TileHFront.propTypes = {
  onPress: PropTypes.func.isRequired,
  tile: PropTypes.shape({}).isRequired,
};

export default TileHFront;
