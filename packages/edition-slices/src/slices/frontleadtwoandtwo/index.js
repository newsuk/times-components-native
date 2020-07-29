import { View, Text } from "react-native";
import React from "react";
import { ResponsiveSlice } from "@times-components-native/edition-slices/src/slices/shared";
import { FrontLeadTwoAndTwoSlice } from "@times-components-native/slice-layout";
import {
  TileDFront,
  TileEFront,
  TileXFront,
  TileYFront,
} from "@times-components-native/edition-slices/src/tiles";

function renderSmall(props) {
  return (
    <View>
      <Text>TODO: Small frontleadtwoandtwo</Text>
    </View>
  );
}

function renderMedium(props, breakpoint) {
  const {
    onPress,
    slice: { lead1, lead2, support1, support2 },
  } = props;

  return (
    <FrontLeadTwoAndTwoSlice
      lead1={
        <View style={{ flex: 6 }}>
          <TileXFront
            breakpoint={breakpoint}
            onPress={onPress}
            tile={lead1}
            tileName="lead1"
          />
        </View>
      }
      lead2={
        <View style={{ flex: 4 }}>
          <TileYFront
            breakpoint={breakpoint}
            onPress={onPress}
            tile={lead2}
            tileName="lead2"
          />
        </View>
      }
      support1={
        <View style={{ flex: 2 }}>
          <TileDFront
            breakpoint={breakpoint}
            onPress={onPress}
            tile={support1}
            tileName="support1"
          />
        </View>
      }
      support2={
        <View style={{ flex: 8 }}>
          <TileEFront
            breakpoint={breakpoint}
            onPress={onPress}
            tile={support2}
            tileName="support2"
          />
        </View>
      }
      breakpoint={breakpoint}
    />
  );
}

function renderHuge(props) {
  return (
    <View>
      <Text>TODO: Huge frontleadtwoandtwo</Text>
    </View>
  );
}

function renderWide(props) {
  return (
    <View>
      <Text>TODO: Wide frontleadtwoandtwo</Text>
    </View>
  );
}

const FrontLeadTwoAndTwo = (props) => {
  return (
    <ResponsiveSlice
      renderSmall={(breakpoint) => renderSmall(props, breakpoint)}
      renderMedium={(breakpoint) => renderMedium(props, breakpoint)}
      renderWide={(breakpoint) => renderWide(props, breakpoint)}
      renderHuge={(breakpoint) => renderHuge(props, breakpoint)}
      grow
    />
  );
};

export default FrontLeadTwoAndTwo;
