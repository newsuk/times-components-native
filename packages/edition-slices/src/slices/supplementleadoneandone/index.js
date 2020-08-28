import React, { Component } from "react";
import PropTypes from "prop-types";
import { LeadOneAndOneSlice } from "@times-components-native/slice-layout";
import { TileU, TileAX } from "../../tiles";
import { ResponsiveSlice } from "../shared";

import styleFactory from "./styles";

class SupplementLeadOneAndOne extends Component {
  constructor(props) {
    super(props);
    this.renderMedium = this.renderMedium.bind(this);
  }

  renderMedium(breakpoint) {
    const {
      onPress,
      slice: { lead, support },
    } = this.props;
    const styles = styleFactory(breakpoint);
    return (
      <LeadOneAndOneSlice
        breakpoint={breakpoint}
        lead={
          <TileU
            headlineStyle={styles.headlineStyle}
            onPress={onPress}
            tile={lead}
            tileName="lead"
          />
        }
        support={
          <TileAX
            breakpoint={breakpoint}
            onPress={onPress}
            tile={support}
            tileName="support"
          />
        }
      />
    );
  }

  render() {
    return (
      <ResponsiveSlice
        renderSmall={() => null}
        renderMedium={this.renderMedium}
      />
    );
  }
}

SupplementLeadOneAndOne.propTypes = {
  onPress: PropTypes.func.isRequired,
  slice: PropTypes.shape({
    lead: PropTypes.shape({}).isRequired,
    support: PropTypes.shape({}).isRequired,
  }).isRequired,
};

export default SupplementLeadOneAndOne;
