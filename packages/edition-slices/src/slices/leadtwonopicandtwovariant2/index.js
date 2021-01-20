import React, { Component } from "react";
import PropTypes from "prop-types";
import { LeadTwoNoPicAndTwoVariant2Slice } from "@times-components-native/slice-layout";
import {
  TileB,
  TileD,
  TileA,
  TileF,
  TileX,
  TileY,
  TileAL,
  TileV,
} from "../../tiles";
import { ResponsiveSlice } from "../shared";
import TileVerticalA from "../../configured-tiles/tile-vertical-a";
import TileColWithImageBottom from "../../configured-tiles/tile-col-with-image-bottom";

class LeadTwoNoPicAndTwoVariant2 extends Component {
  constructor(props) {
    super(props);
    this.renderSmall = this.renderSmall.bind(this);
    this.renderMedium = this.renderMedium.bind(this);
  }

  renderSmall(breakpoint, orientation) {
    const {
      onPress,
      slice: { lead1, lead2, support1, support2 },
    } = this.props;
    return (
      <LeadTwoNoPicAndTwoVariant2Slice
        breakpoint={breakpoint}
        orientation={orientation}
        lead1={<TileF onPress={onPress} tile={lead1} tileName="lead1" />}
        lead2={<TileF onPress={onPress} tile={lead2} tileName="lead2" />}
        support1={
          <TileD onPress={onPress} tile={support1} tileName="support1" />
        }
        support2={
          <TileA onPress={onPress} tile={support2} tileName="support2" />
        }
      />
    );
  }

  renderMedium(breakpoint, orientation) {
    const {
      onPress,
      slice: { lead1, lead2, support1, support2 },
    } = this.props;

    const isLandscape = orientation === "landscape";

    // const Support2 = isLandscape ? TileV : TileA;
    const Support2 = isLandscape ? TileVerticalA : TileColWithImageBottom;

    const Support1 = isLandscape ? TileAL : TileB;

    return (
      <LeadTwoNoPicAndTwoVariant2Slice
        orientation={orientation}
        breakpoint={breakpoint}
        lead1={
          <TileX
            breakpoint={breakpoint}
            onPress={onPress}
            tile={lead1}
            tileName="lead1"
          />
        }
        lead2={
          <TileY
            breakpoint={breakpoint}
            onPress={onPress}
            tile={lead2}
            tileName="lead2"
          />
        }
        support1={
          <TileVerticalA
            breakpoint={breakpoint}
            onPress={onPress}
            tile={support1}
            tileName="support1"
            orientation={orientation}
          />
        }
        support2={
          <Support2
            breakpoint={breakpoint}
            onPress={onPress}
            tile={support2}
            tileName="support2"
            orientation={orientation}
          />
        }
      />
    );
  }

  render() {
    return (
      <ResponsiveSlice
        renderSmall={this.renderSmall}
        renderMedium={this.renderMedium}
      />
    );
  }
}

LeadTwoNoPicAndTwoVariant2.propTypes = {
  onPress: PropTypes.func.isRequired,
  slice: PropTypes.shape({
    lead1: PropTypes.shape({}).isRequired,
    lead2: PropTypes.shape({}).isRequired,
    support1: PropTypes.shape({}).isRequired,
    support2: PropTypes.shape({}).isRequired,
  }).isRequired,
};

export default LeadTwoNoPicAndTwoVariant2;
