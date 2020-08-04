import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  getEditionBreakpoint,
  getNarrowArticleBreakpoint,
  tabletWidth,
} from "@times-components-native/styleguide";
import {
  getDimensions,
  addDimensionsListener,
  removeDimensionsListener,
} from "@times-components-native/utils";
import { NativeModules } from "react-native";
import ResponsiveContext from "./context";

const config = (NativeModules || {}).ReactConfig;

const calculateState = (width, fontScale) => ({
  editionBreakpoint: getEditionBreakpoint(width),
  narrowArticleBreakpoint: getNarrowArticleBreakpoint(width),
  fontScale,
  isTablet:
    (config && config.breakpoint && config.breakpoint !== "small") ||
    width >= tabletWidth,
  screenWidth: width,
});

class Responsive extends Component {
  constructor(props) {
    super(props);
    this.onDimensionChange = this.onDimensionChange.bind(this);
    const { fontScale, width } = getDimensions();
    this.state = calculateState(width, fontScale);
  }

  componentDidMount() {
    addDimensionsListener("change", this.onDimensionChange);
  }

  componentWillUnmount() {
    removeDimensionsListener("change", this.onDimensionChange);
  }

  onDimensionChange({ window: { fontScale, width } }) {
    const { fontScale: oldScale, screenWidth: oldWidth } = this.state;
    if (fontScale !== oldScale || (oldWidth && width !== oldWidth)) {
      console.log("UPDATE", fontScale, oldScale, width, oldWidth);
      this.setState(calculateState(width, fontScale));
    }
  }

  render() {
    const { children } = this.props;

    return (
      <ResponsiveContext.Provider value={this.state}>
        {children}
      </ResponsiveContext.Provider>
    );
  }
}

Responsive.propTypes = {
  children: PropTypes.node,
};

Responsive.defaultProps = {
  children: null,
};

export default Responsive;
export { ResponsiveContext };
