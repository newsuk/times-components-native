import React from "react";
import PropTypes from "prop-types";
import { SupplementLeadOneAndOneSlice } from "@times-components-native/slice-layout";
import { TileU, TileAX } from "../../tiles";
import { ResponsiveSlice } from "../shared";

import styleFactory from "./styles";

const SupplementLeadOneAndOne = (props) => {
  const render = (breakpoint, orientation) => {
    const {
      onPress,
      slice: { lead, support },
    } = props;
    const styles = styleFactory(breakpoint);
    return (
      <SupplementLeadOneAndOneSlice
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
            orientation={orientation}
            tileName="support"
          />
        }
      />
    );
  };

  return <ResponsiveSlice renderSmall={() => null} renderMedium={render} />;
};

SupplementLeadOneAndOne.propTypes = {
  onPress: PropTypes.func.isRequired,
  slice: PropTypes.shape({
    lead: PropTypes.shape({}).isRequired,
    support: PropTypes.shape({}).isRequired,
  }).isRequired,
};

export default SupplementLeadOneAndOne;
