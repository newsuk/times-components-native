import React from "react";
import { useResponsiveContext } from "@times-components-native/responsive";
import { SupplementLeadOneAndFourV2Slice } from "@times-components-native/slice-layout";
import { TileAW, TileLeadSupplementPortrait, TileBC } from "../../tiles";

const SupplementLeadOneAndFourV2 = (props) => {
  const { editionBreakpoint: breakpoint, orientation } = useResponsiveContext();

  const {
    onPress,
    slice: { lead, support1, support2, support3, support4 },
  } = props;

  const LeadTile =
    orientation === "portrait" ? TileLeadSupplementPortrait : TileAW;

  return (
    <SupplementLeadOneAndFourV2Slice
      breakpoint={breakpoint}
      orientation={orientation}
      lead={
        <LeadTile
          breakpoint={breakpoint}
          onPress={onPress}
          tile={lead}
          tileName="lead"
        />
      }
      support1={
        <TileBC
          breakpoint={breakpoint}
          onPress={onPress}
          tile={support1}
          tileName="support1"
        />
      }
      support2={
        <TileBC
          breakpoint={breakpoint}
          onPress={onPress}
          tile={support2}
          tileName="support2"
        />
      }
      support3={
        <TileBC
          breakpoint={breakpoint}
          onPress={onPress}
          tile={support3}
          tileName="support3"
        />
      }
      support4={
        <TileBC
          breakpoint={breakpoint}
          onPress={onPress}
          tile={support4}
          tileName="support4"
        />
      }
    />
  );
};

export default SupplementLeadOneAndFourV2;
