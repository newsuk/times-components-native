/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import editionBreakpoints from "@times-components-native/styleguide";
import { FrontTileSummary } from "@times-components-native/front-page";
import { getTileImage, TileLink, withTileTracking, TileImage } from "../shared";
import stylesFactory from "./styles";
import WithoutWhiteSpace from "@times-components-native/edition-slices/src/tiles/shared/without-white-space";

const TileDFront = ({
  onPress,
  tile,
  breakpoint = editionBreakpoints.small,
}) => {
  const crop = getTileImage(tile, "crop32");
  const styles = stylesFactory(breakpoint);

  if (!crop) return null;

  const {
    article: { hasVideo },
  } = tile;

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
        hasVideo={hasVideo}
      />
      <WithoutWhiteSpace
        render={(whiteSpaceHeight) => (
          <FrontTileSummary
            headlineStyle={styles.headline}
            containerStyle={styles.summaryContainer}
            summaryStyle={styles.summary}
            tile={tile}
            bylines={tile.article.bylines}
            summary={tile.article.content}
            linesOfTeaserToRender={1}
            whiteSpaceHeight={whiteSpaceHeight}
          />
        )}
      />
    </TileLink>
  );
};

TileDFront.propTypes = {
  onPress: PropTypes.func.isRequired,
  tile: PropTypes.shape({}).isRequired,
  breakpoint: PropTypes.string,
};

export default withTileTracking(TileDFront);
