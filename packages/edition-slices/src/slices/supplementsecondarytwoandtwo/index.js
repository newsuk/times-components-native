import React from "react";
import PropTypes from "prop-types";
import { SupplementSecondaryTwoAndTwoSlice } from "@times-components-native/slice-layout";
import { TileG, TileV, TileAM, TileAN } from "../../tiles";
import { ResponsiveSlice } from "../shared";

const SupplementSecondaryTwoAndTwo = (props) => {
  const {
    onPress,
    slice: { secondary1, secondary2, support1, support2 },
  } = props;

  const renderMedium = (breakpoint) => (
    <SupplementSecondaryTwoAndTwoSlice
      breakpoint={breakpoint}
      secondary1={
        <TileV onPress={onPress} tile={secondary1} tileName="secondary1" />
      }
      secondary2={
        <TileV onPress={onPress} tile={secondary2} tileName="secondary2" />
      }
      support1={
        <TileG
          breakpoint={breakpoint}
          onPress={onPress}
          tile={support1}
          tileName="support1"
        />
      }
      support2={
        <TileG
          breakpoint={breakpoint}
          onPress={onPress}
          tile={support2}
          tileName="support2"
        />
      }
    />
  );

  const renderHuge = (breakpoint) => (
    <SupplementSecondaryTwoAndTwoSlice
      breakpoint={breakpoint}
      secondary1={
        <TileAM onPress={onPress} tile={secondary1} tileName="secondary1" />
      }
      secondary2={
        <TileAM onPress={onPress} tile={secondary2} tileName="secondary2" />
      }
      support1={
        <TileAN onPress={onPress} tile={support1} tileName="support1" />
      }
      support2={
        <TileAN onPress={onPress} tile={support2} tileName="support2" />
      }
    />
  );

  return (
    <ResponsiveSlice
      renderSmall={() => null}
      renderMedium={renderMedium}
      renderWide={renderMedium}
      renderHuge={renderHuge}
    />
  );
};

SupplementSecondaryTwoAndTwo.propTypes = {
  onPress: PropTypes.func.isRequired,
  slice: PropTypes.shape({
    secondary1: PropTypes.shape({}).isRequired,
    secondary2: PropTypes.shape({}).isRequired,
    support1: PropTypes.shape({}).isRequired,
    support2: PropTypes.shape({}).isRequired,
  }).isRequired,
};

export default SupplementSecondaryTwoAndTwo;
