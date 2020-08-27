import React, { Fragment } from "react";
import { View } from "react-native";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { ItemColSeparator } from "../shared";
import VerticalLayout from "../verticallayout";
import stylesFactory from "./styles";

const SupplementLeadOneAndFourSlice = ({
  breakpoint,
  lead,
  support1,
  support2,
  support3,
  support4,
}) => {
  const styles = stylesFactory(breakpoint);
  const { container, leadContainer, supportContainer } = styles;

  if (editionBreakpoints.small === breakpoint) {
    return (
      <Fragment>
        {lead}
        <VerticalLayout tiles={[support1, support2, support3, support4]} />
      </Fragment>
    );
  }

  return (
    <View style={container}>
      <View style={leadContainer}>{lead}</View>
      <ItemColSeparator />
      <VerticalLayout
        style={supportContainer}
        tiles={[support1, support2, support3, support4]}
      />
    </View>
  );
};

export default SupplementLeadOneAndFourSlice;
