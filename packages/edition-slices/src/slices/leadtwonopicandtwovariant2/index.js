import React, { Component } from "react";
import PropTypes from "prop-types";
import { LeadTwoNoPicAndTwoVariant2Slice } from "@times-components-native/slice-layout";
import { ResponsiveSlice } from "../shared";
import TileColStandard from "../../configured-tiles/tile-col-standard";
import TileColImageBottom from "../../configured-tiles/tile-col-image-bottom";

class LeadTwoNoPicAndTwoVariant2 extends Component {
  constructor(props) {
    super(props);
    this.renderMedium = this.renderMedium.bind(this);
  }

  renderMedium(breakpoint, orientation) {
    const {
      onPress,
      slice: { lead1, lead2, support1, support2 },
    } = this.props;

    const isLandscape = orientation === "landscape";

    const Support2 = isLandscape ? TileColStandard : TileColImageBottom;

    return (
      <LeadTwoNoPicAndTwoVariant2Slice
        orientation={orientation}
        breakpoint={breakpoint}
        lead1={
          <TileColStandard
            breakpoint={breakpoint}
            onPress={onPress}
            tile={lead1}
            tileName="lead1"
          />
        }
        lead2={
          <TileColStandard
            breakpoint={breakpoint}
            onPress={onPress}
            tile={lead2}
            tileName="lead2"
          />
        }
        support1={
          <TileColStandard
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
    return <ResponsiveSlice renderMedium={this.renderMedium} />;
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
