import React, { Component, useContext } from "react";
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

const calculateState = (width, height, fontScale) => ({
  editionBreakpoint: getEditionBreakpoint(width),
  narrowArticleBreakpoint: getNarrowArticleBreakpoint(width),
  fontScale,
  isTablet:
    (config && config.breakpoint && config.breakpoint !== "small") ||
    width >= tabletWidth,
  screenWidth: width,
  orientation: height > width ? "portrait" : "landscape",
});

class Responsive extends Component {
  constructor(props) {
    super(props);
    this.onDimensionChange = this.onDimensionChange.bind(this);
    const { fontScale, width, height } = getDimensions();
    this.state = calculateState(width, height, fontScale);
  }

  componentDidMount() {
    addDimensionsListener("change", this.onDimensionChange);
  }

  componentWillUnmount() {
    removeDimensionsListener("change", this.onDimensionChange);
  }

  onDimensionChange({ window: { fontScale, width, height } }) {
    const { fontScale: oldScale, screenWidth: oldWidth } = this.state;
    if (fontScale !== oldScale || (oldWidth && width !== oldWidth)) {
      this.setState(calculateState(width, height, fontScale));
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

const useResponsiveContext = () => useContext(ResponsiveContext);

export { ResponsiveContext, useResponsiveContext };
export default Responsive;
