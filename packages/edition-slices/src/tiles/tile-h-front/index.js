/* eslint-disable react/require-default-props */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { FrontTileSummary } from "@times-components-native/front-page";
import { getTileStrapline, TileLink } from "../shared";
import { getDynamicStyle } from "./styles";
import { FrontPageContext } from "@times-components-native/slice-layout/src/templates/frontleadtwo";

const TileHFront = ({ onPress, tile, orientation }) => {
  const frontPageContext = useContext(FrontPageContext);
  const styles = getDynamicStyle(frontPageContext.multiplier);

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
