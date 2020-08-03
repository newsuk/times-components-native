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

  const wrappedLead1 = <View style={{ flex: 6 }}>{lead1}</View>;
  const wrappedLead2 = <View style={{ flex: 4 }}>{lead2}</View>;
  const wrappedSupport2 = <View style={{ flex: 1 }}>{support2}</View>;

  if (orientation === "landscape") {
    return (
      <View style={landscapeStyles.container}>
        <VerticalLayout
          style={landscapeStyles.column}
          tiles={[wrappedLead1, wrappedLead2]}
          rowSeparatorStyle={landscapeStyles.rowSeparatorStyle}
        />
        <ItemColSeparator style={landscapeStyles.colSeparatorStyle} />
        <View style={landscapeStyles.middleTile}>{support1}</View>
        <ItemColSeparator style={landscapeStyles.colSeparatorStyle} />
        <View style={landscapeStyles.column}>{wrappedSupport2}</View>
      </View>
    );
  }
  return (
    <View style={portraitStyles.container}>
      <VerticalLayout
        style={portraitStyles.leftColumn}
        tiles={[wrappedLead1, wrappedLead2]}
        rowSeparatorStyle={portraitStyles.rowSeparatorStyle}
      />
      <ItemColSeparator style={portraitStyles.colSeparatorStyle} />
      <VerticalLayout
        style={portraitStyles.rightColumn}
        tiles={[support1, wrappedSupport2]}
        rowSeparatorStyle={portraitStyles.rowSeparatorStyle}
      />
    </View>
  );
};

export default FrontLeadTwoNoPicAndTwoSlice;
