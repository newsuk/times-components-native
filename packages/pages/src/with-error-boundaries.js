import React, { Component } from "react";
import { NativeModules } from "react-native";

import ArticleError from "@times-components-native/article-error";

const { componentCaughtError } = NativeModules.ReactAnalytics;

export const withErrorBoundaries = (WrappedComponent, extras = {}) =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
      return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
      componentCaughtError(error.message, errorInfo.componentStack);
    }

    render() {
      const { hasError } = this.state;

      return hasError ? (
        <ArticleError
          message={extras.message}
          buttonText={extras.buttonText}
          refetch={extras.onAction}
        />
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };

export default withErrorBoundaries;
