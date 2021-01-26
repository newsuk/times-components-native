import React, { Component } from "react";
import PropTypes from "prop-types";
import { SecondaryFourSlice } from "@times-components-native/slice-layout";
import { TileC, TileAR, TileB } from "../../tiles";
import { ResponsiveSlice } from "../shared";
import stylesFactory from "./styles";

class SecondaryFour extends Component {
  constructor(props) {
    super(props);
    this.renderSmall = this.renderSmall.bind(this);
    this.renderMedium = this.renderMedium.bind(this);
  }

  renderSmall(breakpoint) {
    const {
      onPress,
      slice: { secondary1, secondary2, secondary3, secondary4 },
    } = this.props;

    return (
      <SecondaryFourSlice
        breakpoint={breakpoint}
        secondary1={
          <TileC onPress={onPress} tile={secondary1} tileName="secondary1" />
        }
        secondary2={
          <TileC onPress={onPress} tile={secondary2} tileName="secondary2" />
        }
        secondary3={
          <TileC onPress={onPress} tile={secondary3} tileName="secondary3" />
        }
        secondary4={
          <TileC onPress={onPress} tile={secondary4} tileName="secondary4" />
        }
      />
    );
  }

  renderMedium(breakpoint) {
    const {
      onPress,
      slice: { isConsecutive, secondary1, secondary2, secondary3, secondary4 },
    } = this.props;

    const tiles = isConsecutive
      ? [secondary3, secondary4, secondary1, secondary2]
      : [secondary1, secondary2, secondary3, secondary4];

    return (
      <SecondaryFourSlice
        breakpoint={breakpoint}
        isConsecutive={isConsecutive}
        secondary1={
          <TileAR
            breakpoint={breakpoint}
            onPress={onPress}
            tile={tiles[0]}
            tileName="secondary1"
          />
        }
        secondary2={
          <TileAR
            breakpoint={breakpoint}
            onPress={onPress}
            tile={tiles[1]}
            tileName="secondary2"
          />
        }
        secondary3={
          <TileB
            breakpoint={breakpoint}
            onPress={onPress}
            tile={tiles[2]}
            tileName="secondary3"
            additionalHeadlineStyles={stylesFactory(breakpoint)}
          />
        }
        secondary4={
          <TileB
            breakpoint={breakpoint}
            onPress={onPress}
            tile={tiles[3]}
            tileName="secondary4"
            additionalHeadlineStyles={stylesFactory(breakpoint)}
          />
        }
      />
    );
  }

  render() {
    return (
      <ResponsiveSlice
        renderSmall={this.renderSmall}
        renderMedium={this.renderMedium}
      />
    );
  }
}

SecondaryFour.propTypes = {
  onPress: PropTypes.func.isRequired,
  slice: PropTypes.shape({
    isConsecutive: PropTypes.bool,
    secondary1: PropTypes.shape({}).isRequired,
    secondary2: PropTypes.shape({}).isRequired,
    secondary3: PropTypes.shape({}).isRequired,
    secondary4: PropTypes.shape({}).isRequired,
  }).isRequired,
};

export default SecondaryFour;
