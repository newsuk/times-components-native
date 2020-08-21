/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { FrontTileSummary } from "@times-components-native/front-page";
import { getTileImage, TileLink, TileImage, withTileTracking } from "../shared";
import stylesFactory from "./styles";

const TileBFront = ({
  onPress,
  tile,
  orientation,
  breakpoint = editionBreakpoints.wide,
}) => {
  const showKeyline = orientation === "portrait";

  const crop = getTileImage(tile, "crop32");
  const styles = stylesFactory(breakpoint);

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
        headlineStyle={
          orientation === "portrait"
            ? styles.headlinePortrait
            : styles.headlineLandscape
        }
        summary={article.content}
        summaryStyle={
          article.template === "maincomment"
            ? styles.commentSummary
            : styles.summary
        }
        showKeyline={showKeyline}
        tile={tile}
        bylines={article.bylines}
        template={article.template}
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
