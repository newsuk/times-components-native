import React, { Component } from "react";
import { TopSecondarySlice } from "@times-components-native/slice-layout";
import { TileAT, TileAU, TileAV } from "../../tiles";
import { ResponsiveSlice } from "../shared";

class TopSecondary extends Component {
  constructor(props) {
    super(props);
    this.renderMedium = this.renderMedium.bind(this);
    this.renderWide = this.renderWide.bind(this);
  }

  transformSliceItems(slice) {
    return slice.name === "TopSecondaryFourSlice"
      ? {
          lead: slice.secondary1,
          support1: slice.secondary2,
          support2: slice.secondary3,
          support3: slice.secondary4,
        }
      : {
          lead: slice.secondary1,
          support1: slice.secondary2,
          support2: slice.support1,
          support3: slice.support2,
        };
  }

  renderMedium(breakpoint) {
    const { onPress, slice } = this.props;

    const items = this.transformSliceItems(slice);

    return (
      <TopSecondarySlice
        breakpoint={breakpoint}
        lead={
          <TileAT
            onPress={onPress}
            tile={items.lead}
            tileName="lead"
            breakpoint={breakpoint}
          />
        }
        support1={
          <TileAV
            breakpoint={breakpoint}
            onPress={onPress}
            tile={items.support1}
            tileName="support1"
          />
        }
        support2={
          <TileAV
            breakpoint={breakpoint}
            onPress={onPress}
            tile={items.support2}
            tileName="support2"
          />
        }
        support3={
          <TileAV
            breakpoint={breakpoint}
            onPress={onPress}
            tile={items.support3}
            tileName="support3"
          />
        }
      />
    );
  }

  renderWide(breakpoint) {
    const { onPress, slice } = this.props;
    const items = this.transformSliceItems(slice);
    return (
      <TopSecondarySlice
        breakpoint={breakpoint}
        lead={
          <TileAU
            onPress={onPress}
            tile={items.lead}
            tileName="lead"
            breakpoint={breakpoint}
          />
        }
        support1={
          <TileAV
            breakpoint={breakpoint}
            onPress={onPress}
            tile={items.support1}
            tileName="support1"
          />
        }
        support2={
          <TileAV
            breakpoint={breakpoint}
            onPress={onPress}
            tile={items.support2}
            tileName="support2"
          />
        }
        support3={
          <TileAV
            breakpoint={breakpoint}
            onPress={onPress}
            tile={items.support3}
            tileName="support3"
          />
        }
      />
    );
  }

  render() {
    return (
      <ResponsiveSlice
        renderMedium={this.renderMedium}
        renderWide={this.renderWide}
      />
    );
  }
}

export default TopSecondary;
