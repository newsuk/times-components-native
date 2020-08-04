import React from "react";
import { Dimensions, View } from "react-native";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { ItemColSeparator } from "../shared";
import stylesFactory, { landscapeStyles, portraitStyles } from "./styles";
import { spacing } from "@times-components-native/styleguide";

import VerticalLayout from "../verticallayout";

function calculateContentWidth(windowWidth) {
  if (windowWidth >= 1366) {
    return 1180;
  }
  if (windowWidth >= 1194) {
    return 980;
  }
  if (windowWidth >= 1112) {
    return 1000;
  }
  if (windowWidth >= 1080) {
    return 1000;
  }

  if (windowWidth >= 1024) {
    return 890;
  }

  return 1000;
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

  const wrappedLead1 = <View style={{ flex: 6 }}>{lead1}</View>;
  const wrappedLead2 = <View style={{ flex: 4 }}>{lead2}</View>;
  const wrappedSupport2 = <View style={{ flex: 1 }}>{support2}</View>;
  const windowWidth = Dimensions.get("window").width;

  if (orientation === "landscape") {
    return (
      <View
        style={[
          styles.containerLandscape,
          {
            width: calculateContentWidth(windowWidth) - spacing(4),
            alignSelf: "center",
          },
        ]}
        onLayout={(e) => console.log(e.nativeEvent.layout)}
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
        tiles={[support1, wrappedSupport2]}
        rowSeparatorStyle={styles.rowSeparatorStyle}
      />
    </View>
  );
};

export default FrontLeadTwoNoPicAndTwoSlice;
