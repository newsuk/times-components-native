import React, { Component } from "react";
import { SupplementLeadOneAndFourSlice } from "@times-components-native/slice-layout";
import { TileAC, TileAD, TileI, TileJ } from "../../tiles";
import { ResponsiveSlice } from "../shared";

class SupplementLeadOneAndFour extends Component {
  constructor(props) {
    super(props);
    this.renderSmall = this.renderSmall.bind(this);
    this.renderMedium = this.renderMedium.bind(this);
  }

  renderSmall(breakpoint) {
    const {
      onPress,
      slice: { lead, support1, support2, support3, support4 },
    } = this.props;

    return (
      <SupplementLeadOneAndFourSlice
        breakpoint={breakpoint}
        lead={<TileI onPress={onPress} tile={lead} tileName="lead" />}
        support1={
          <TileJ onPress={onPress} tile={support1} tileName="support1" />
        }
        support2={
          <TileJ onPress={onPress} tile={support2} tileName="support2" />
        }
        support3={
          <TileJ onPress={onPress} tile={support3} tileName="support3" />
        }
        support4={
          <TileJ onPress={onPress} tile={support4} tileName="support4" />
        }
      />
    );
  }

  renderMedium(breakpoint) {
    const {
      onPress,
      slice: { lead, support1, support2, support3, support4 },
    } = this.props;

    return (
      <SupplementLeadOneAndFourSlice
        breakpoint={breakpoint}
        lead={
          <TileAC
            onPress={onPress}
            tile={lead}
            tileName="lead"
            breakpoint={breakpoint}
          />
        }
        support1={
          <TileAD
            breakpoint={breakpoint}
            onPress={onPress}
            tile={support1}
            tileName="support1"
          />
        }
        support2={
          <TileAD
            breakpoint={breakpoint}
            onPress={onPress}
            tile={support2}
            tileName="support2"
          />
        }
        support3={
          <TileAD
            breakpoint={breakpoint}
            onPress={onPress}
            tile={support3}
            tileName="support3"
          />
        }
        support4={
          <TileAD
            breakpoint={breakpoint}
            onPress={onPress}
            tile={support4}
            tileName="support4"
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

export default SupplementLeadOneAndFour;
