import React, { Component } from "react";
import trackingContextTypes from "../src/tracking-context-types";

export default (WrappedComponent) => {
  class TestContext extends Component {
    getChildContext() {
      return {
        tracking: {
          analytics: (...args) => {
            this.props.analyticsStream(...args);
          },
        },
      };
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  TestContext.childContextTypes = trackingContextTypes;

  return TestContext;
};
