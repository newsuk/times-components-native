import { View, Text } from "react-native";
import React from "react";
import { ResponsiveSlice } from "@times-components-native/edition-slices/src/slices/shared";
import { FrontLeadTwoAndTwoSlice } from "@times-components-native/slice-layout";
import {
  TileDFront,
  TileEFront,
  TileXFront,
  TileYFront,
  TileALFront,
} from "@times-components-native/edition-slices/src/tiles";
import { testSlice } from "./testSlice";

function renderMedium(props, breakpoint, orientation) {
  // const {
  //   onPress,
  // slice: { lead1, lead2, support1, support2 },
  // } = props;

  const onPress = () => {};

  const { lead1, lead2, support1, support2 } = testSlice;
  const renderSupport1Component =
    orientation === "landscape" ? (
      <TileALFront
        breakpoint={breakpoint}
        onPress={onPress}
        tile={support1}
        tileName="support1"
      />
    ) : (
      <TileDFront
        breakpoint={breakpoint}
        onPress={onPress}
        tile={support1}
        tileName="support1"
      />
    );

  return (
    <FrontLeadTwoAndTwoSlice
      lead1={
        <View style={{ flex: 6 }}>
          <TileXFront
            breakpoint={breakpoint}
            onPress={onPress}
            tile={lead1}
            tileName="lead1"
            orientation={orientation}
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
            orientation={orientation}
          />
        </View>
      }
      support1={renderSupport1Component}
      support2={
        <View style={{ flex: 1 }}>
          <TileEFront
            breakpoint={breakpoint}
            onPress={onPress}
            tile={support2}
            tileName="support2"
            orientation={orientation}
          />
        </View>
      }
      breakpoint={breakpoint}
      orientation={orientation}
    />
  );
}

const FrontLeadTwoAndTwo = (props) => {
  return (
    <ResponsiveSlice
      renderSmall={(breakpoint, orientation) =>
        renderMedium(props, breakpoint, orientation)
      }
      renderMedium={(breakpoint, orientation) =>
        renderMedium(props, breakpoint, orientation)
      }
      renderWide={(breakpoint, orientation) =>
        renderMedium(props, breakpoint, orientation)
      }
      renderHuge={(breakpoint, orientation) =>
        renderMedium(props, breakpoint, orientation)
      }
      grow
    />
  );
};

export default FrontLeadTwoAndTwo;
