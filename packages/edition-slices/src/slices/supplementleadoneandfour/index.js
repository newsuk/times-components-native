import React from "react";
import { SupplementLeadOneAndFourSlice } from "@times-components-native/slice-layout";
import { TileAC, TileAD } from "../../tiles";
import { ResponsiveSlice } from "../shared";

function renderMedium(props, breakpoint, orientation) {
  const {
    onPress,
    slice: { lead, support1, support2, support3, support4 },
  } = props;

  return (
    <SupplementLeadOneAndFourSlice
      breakpoint={breakpoint}
      orientation={orientation}
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

const SupplementLeadOneAndFour = (props) => {
  const renderSlice = (breakpoint, orientation) =>
    renderMedium(props, breakpoint, orientation);

  return <ResponsiveSlice renderMedium={renderSlice} grow />;
};

export default SupplementLeadOneAndFour;
