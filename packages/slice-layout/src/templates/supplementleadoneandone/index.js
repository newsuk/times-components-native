import React from "react";
import { editionBreakpoints } from "@times-components-native/styleguide";
import PropTypes from "prop-types";
import HorizontalLayout from "../horizontallayout";
import styleFactory from "./styles";

const supplementLeadOneAndOneSlice = ({ breakpoint, lead, support }) => {
  const styles = styleFactory(breakpoint);

  return (
    <HorizontalLayout
      containerStyle={styles.container}
      tiles={[
        { style: styles.leadItem, tile: lead },
        { style: styles.supportItem, tile: support },
      ]}
      colSeparatorStyle={styles.colSeparatorStyle}
    />
  );
};

supplementLeadOneAndOneSlice.propTypes = {
  breakpoint: PropTypes.string,
  lead: PropTypes.node.isRequired,
  support: PropTypes.node.isRequired,
};

supplementLeadOneAndOneSlice.defaultProps = {
  breakpoint: editionBreakpoints.small,
};

export default supplementLeadOneAndOneSlice;
