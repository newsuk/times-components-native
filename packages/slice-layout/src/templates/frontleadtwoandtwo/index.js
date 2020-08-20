import React from "react";
import { Dimensions, View } from "react-native";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { ItemColSeparator } from "../shared";
import stylesFactory from "./styles";

import VerticalLayout from "../verticallayout";

function calculateContentWidth(windowWidth) {
  if (windowWidth >= 1366) return 1180;
  if (windowWidth >= 1194) return 1024;
  if (windowWidth >= 1112) return 1000;
  if (windowWidth >= 1080) return 1000;
  if (windowWidth >= 1024) return 920;

  return 1000;
}

function calculateMarginTop(windowWidth) {
  if (windowWidth >= 1366) return 25;
  if (windowWidth >= 1194) return 20;
  if (windowWidth >= 1112) return 20;
  if (windowWidth >= 1080) return 15;
  if (windowWidth >= 1024) return 15;

  return 15;
}

const FrontLeadTwoNoPicAndTwoSlice = ({
  breakpoint,
  orientation,
  lead1,
  lead2,
  support1,
  support2,
}) => {
  // TODO check what we want to do about small breakpoints?
  if (breakpoint === editionBreakpoints.small) {
    return <VerticalLayout tiles={[lead1, lead2, support1, support2]} />;
  }
  const styles = stylesFactory(breakpoint);

  const wrappedLead1 = (
    <View style={{ flex: 6 }} tileName={lead1.props.tileName}>
      {lead1}
    </View>
  );
  const wrappedLead2 = (
    <View style={{ flex: 4 }} tileName={lead2.props.tileName}>
      {lead2}
    </View>
  );
  const wrappedSupport2 = (
    <View style={{ flex: 1 }} tileName={support2.props.tileName}>
      {support2}
    </View>
  );
  const windowWidth = Dimensions.get("window").width;

  if (orientation === "landscape") {
    return (
      <View
        style={[
          styles.containerLandscape,
          {
            width: calculateContentWidth(windowWidth),
            paddingTop: calculateMarginTop(windowWidth),
            alignSelf: "center",
          },
        ]}
      >
        <VerticalLayout
          style={styles.leftColumnLandscape}
          tiles={[wrappedLead1, wrappedLead2]}
          rowSeparatorStyle={styles.rowSeparatorStyle}
        />
        <ItemColSeparator style={styles.colSeparatorStyle} />
        <View style={styles.middleTileLandscape}>{support1}</View>
        <ItemColSeparator style={styles.colSeparatorStyle} />
        <View style={styles.rightColumnLandscape}>{wrappedSupport2}</View>
      </View>
    );
  }
  return (
    <View style={styles.containerPortrait}>
      <VerticalLayout
        style={styles.leftColumnPortrait}
        tiles={[wrappedLead1, wrappedLead2]}
        rowSeparatorStyle={styles.rowSeparatorStyle}
      />
      <ItemColSeparator style={styles.colSeparatorStyle} />
      <VerticalLayout
        style={styles.rightColumnPortrait}
        tiles={[wrappedSupport2, support1]}
        rowSeparatorStyle={styles.rowSeparatorStyle}
      />
    </View>
  );
};

export default FrontLeadTwoNoPicAndTwoSlice;
