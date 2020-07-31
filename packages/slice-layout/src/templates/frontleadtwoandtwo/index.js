import React from "react";
import { View } from "react-native";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { ItemColSeparator } from "../shared";
import { landscapeStyles, portraitStyles } from "./styles";
import VerticalLayout from "../verticallayout";

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

  if (orientation === "landscape") {
    return (
      <View style={landscapeStyles.container}>
        <VerticalLayout style={landscapeStyles.column} tiles={[lead1, lead2]} />
        <ItemColSeparator style={landscapeStyles.colSeparatorStyle} />
        <View style={landscapeStyles.middleTile}>{support1}</View>
        <ItemColSeparator style={landscapeStyles.colSeparatorStyle} />
        <View style={landscapeStyles.column}>{support2}</View>
      </View>
    );
  }
  return (
    <View style={portraitStyles.container}>
      <VerticalLayout
        style={portraitStyles.leftColumn}
        tiles={[lead1, lead2]}
      />
      <ItemColSeparator style={portraitStyles.colSeparatorStyle} />
      <VerticalLayout
        style={portraitStyles.rightColumn}
        tiles={[support1, support2]}
      />
    </View>
  );
};

export default FrontLeadTwoNoPicAndTwoSlice;
