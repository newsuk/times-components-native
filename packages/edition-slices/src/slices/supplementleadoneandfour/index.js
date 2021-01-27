import React from "react";
import { useResponsiveContext } from "@times-components-native/responsive";
import { SupplementLeadOneAndFourSlice } from "@times-components-native/slice-layout";
import { TileAW, TileAZ, TileBA, TileBB } from "../../tiles";
import { ResponsiveSlice, FlushResponsiveSlice } from "../shared";

const renderPortrait = (props, breakpoint, orientation) => {
  const {
    onPress,
    slice: { lead, support1, support2, support3, support4 },
  } = props;

  return (
    <SupplementLeadOneAndFourSlice
      breakpoint={breakpoint}
      orientation={orientation}
      lead={
        <TileAZ
          breakpoint={breakpoint}
          onPress={onPress}
          tile={lead}
          tileName="lead"
        />
      }
      support1={
        <TileBA
          breakpoint={breakpoint}
          onPress={onPress}
          tile={support1}
          tileName="support1"
        />
      }
      support2={
        <TileBA
          breakpoint={breakpoint}
          onPress={onPress}
          tile={support2}
          tileName="support2"
        />
      }
      support3={
        <TileBA
          breakpoint={breakpoint}
          onPress={onPress}
          tile={support3}
          tileName="support3"
        />
      }
      support4={
        <TileBA
          breakpoint={breakpoint}
          onPress={onPress}
          tile={support4}
          tileName="support4"
        />
      }
    />
  );
};

const renderLandscape = (props, breakpoint, orientation) => {
  const {
    onPress,
    slice: { lead, support1, support2, support3, support4 },
  } = props;

  return (
    <SupplementLeadOneAndFourSlice
      breakpoint={breakpoint}
      orientation={orientation}
      lead={
        <TileAW
          breakpoint={breakpoint}
          onPress={onPress}
          tile={lead}
          tileName="lead"
        />
      }
      support1={
        <TileBB
          breakpoint={breakpoint}
          onPress={onPress}
          tile={support1}
          tileName="support1"
        />
      }
      support2={
        <TileBB
          breakpoint={breakpoint}
          onPress={onPress}
          tile={support2}
          tileName="support2"
        />
      }
      support3={
        <TileBB
          breakpoint={breakpoint}
          onPress={onPress}
          tile={support3}
          tileName="support3"
        />
      }
      support4={
        <TileBB
          breakpoint={breakpoint}
          onPress={onPress}
          tile={support4}
          tileName="support4"
        />
      }
    />
  );
};

const SupplementLeadOneAndFour = (props) => {
  const { orientation } = useResponsiveContext();

  const renderPort = (breakpoint, orientation) =>
    renderPortrait(props, breakpoint, orientation);

  const renderLand = (breakpoint, orientation) =>
    renderLandscape(props, breakpoint, orientation);

  return orientation === "portrait" ? (
    <ResponsiveSlice renderMedium={renderPort} />
  ) : (
    <FlushResponsiveSlice renderMedium={renderLand} />
  );
};

export default SupplementLeadOneAndFour;
