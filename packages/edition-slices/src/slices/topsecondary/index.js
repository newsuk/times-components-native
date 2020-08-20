import React from "react";
import { TopSecondarySlice } from "@times-components-native/slice-layout";
import { TileAT, TileAU, TileAV } from "../../tiles";
import { ResponsiveSlice } from "../shared";

const renderPortrait = (props, breakpoint) => {
  const { onPress, slice } = props;

  const items = slice.items;

  return (
    <TopSecondarySlice
      breakpoint={breakpoint}
      lead={
        <TileAT
          onPress={onPress}
          tile={items[0]}
          tileName="lead"
          breakpoint={breakpoint}
        />
      }
      support1={
        <TileAV
          breakpoint={breakpoint}
          onPress={onPress}
          tile={items[1]}
          tileName="support1"
        />
      }
      support2={
        <TileAV
          breakpoint={breakpoint}
          onPress={onPress}
          tile={items[2]}
          tileName="support2"
        />
      }
      support3={
        <TileAV
          breakpoint={breakpoint}
          onPress={onPress}
          tile={items[3]}
          tileName="support3"
        />
      }
    />
  );
};

const renderLandscape = (props, breakpoint) => {
  const { onPress, slice } = props;
  const items = slice.items;
  return (
    <TopSecondarySlice
      breakpoint={breakpoint}
      lead={
        <TileAU
          onPress={onPress}
          tile={items[0]}
          tileName="lead"
          breakpoint={breakpoint}
        />
      }
      support1={
        <TileAV
          breakpoint={breakpoint}
          onPress={onPress}
          tile={items[1]}
          tileName="support1"
        />
      }
      support2={
        <TileAV
          breakpoint={breakpoint}
          onPress={onPress}
          tile={items[2]}
          tileName="support2"
        />
      }
      support3={
        <TileAV
          breakpoint={breakpoint}
          onPress={onPress}
          tile={items[3]}
          tileName="support3"
        />
      }
    />
  );
};

const TopSecondary = (props) => {
  const renderSlice = (breakpoint, orientation) =>
    orientation === "portrait"
      ? renderPortrait(props, breakpoint)
      : renderLandscape(props, breakpoint);

  return <ResponsiveSlice renderMedium={renderSlice} />;
};

export default TopSecondary;
