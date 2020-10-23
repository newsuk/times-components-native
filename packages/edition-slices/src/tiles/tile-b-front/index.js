/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import { FrontTileSummary } from "@times-components-native/front-page";
import { getDimensions } from "@times-components-native/utils";
import { getTileImage, TileLink, TileImage, withTileTracking } from "../shared";
import { getStyle } from "./styles";

const TileBFront = ({ onPress, tile, orientation }) => {
  const isPortrait = orientation === "portrait";
  const showKeyline = isPortrait;

  const crop = getTileImage(tile, "crop32");
  const { width: windowWidth, height: windowHeight } = getDimensions();
  const styles = getStyle(orientation, windowWidth, windowHeight);

  if (!crop) return null;

  const { article } = tile;

  return (
    <TileLink onPress={onPress} style={styles.container} tile={tile}>
      <TileImage
        aspectRatio={3 / 2}
        relativeWidth={crop.relativeWidth}
        relativeHeight={crop.relativeHeight}
        relativeHorizontalOffset={crop.relativeHorizontalOffset}
        relativeVerticalOffset={crop.relativeVerticalOffset}
        style={styles.imageContainer}
        uri={crop.url}
        fill
        hasVideo={article.hasVideo}
      />
      <FrontTileSummary
        headlineStyle={styles.headline}
        headlineMarginBottom={styles.headlineMarginBottom}
        bylineMarginBottom={styles.bylineMarginBottom}
        straplineMarginTop={0}
        straplineMarginBottom={0}
        summaryLineHeight={styles.summary.lineHeight}
        summary={article.content}
        justified={false}
        summaryStyle={styles.summary}
        showKeyline={showKeyline}
        tile={tile}
        bylines={article.bylines}
      />
    </TileLink>
  );
};

TileBFront.propTypes = {
  onPress: PropTypes.func.isRequired,
  tile: PropTypes.shape({}).isRequired,
  breakpoint: PropTypes.string,
};

export default withTileTracking(TileBFront);
