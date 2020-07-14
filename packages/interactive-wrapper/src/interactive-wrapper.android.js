import React, { Component } from "react";
import { Linking } from "react-native";
import PropTypes from "prop-types";
import AutoHeightWebView from "react-native-autoheight-webview";
import { WebView } from "react-native-webview";
import ResponsiveImageInteractive from "./responsive-image";

const editorialLambdaProtocol = "https://";
const editorialLambdaOrigin = "jotn9sgpg6.execute-api.eu-west-1.amazonaws.com";
const editorialLambdaSlug = "prod/component";

class InteractiveWrapper extends Component {
  static openURLInBrowser(url) {
    return Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          return console.error("Cant open url", url); // eslint-disable-line no-console
        }
        return Linking.openURL(url);
      })
      .catch(err => console.error("An error occurred", err)); // eslint-disable-line no-console
  }

  constructor() {
    super();
    this.state = {
      height: 1
    };
    this.handleOnShouldStartLoadWithRequest = this.handleOnShouldStartLoadWithRequest.bind(
      this
    );
    this.onMessage = this.onMessage.bind(this);
    this.onLoadEnd = this.onLoadEnd.bind(this);
  }

  onLoadEnd() {
    if (this.webview) {
      this.webview.postMessage("thetimes.co.uk", "*");
    }
  }

  updateHeight = passedHeight => {
    const { height } = this.state;
    if (passedHeight !== height && Math.abs(passedHeight - height) > 5) {
      this.setState({ height: passedHeight });
    }
  };

  onMessage(e) {
    if (
      (e && e.nativeEvent && e.nativeEvent.data) ||
      e.nativeEvent.data === "0"
    ) {
      const { height } = this.state;
      const newHeight = parseInt(e.nativeEvent.data, 10);

      if (newHeight && newHeight > height) {
        const updateState =
          newHeight < 30 ? { height: newHeight + 30 } : { height: newHeight };
        this.setState(updateState);
      }
    } else {
      console.error(`Invalid height received ${e.nativeEvent.data}`); // eslint-disable-line no-console
    }
  }

  // eslint-disable-next-line class-methods-use-this
  handleOnShouldStartLoadWithRequest(data) {
    if (
      !data.url.includes("data:text/html") &&
      data.url.includes("http") &&
      !data.url.includes(editorialLambdaOrigin)
    ) {
      InteractiveWrapper.openURLInBrowser(data.url);
      return false;
    }
    return true;
  }

  render() {
    const {
      config: { dev, environment, platform, version },
      id, isResponsiveGraphics
    } = this.props;
    const { height } = this.state;
    const uri = `${editorialLambdaProtocol}${editorialLambdaOrigin}/${editorialLambdaSlug}/${id}?dev=${dev}&env=${environment}&platform=${platform}&version=${version}`;
    const scriptToInject = `
      setTimeout(function() {
        window.ReactNativeWebView.postMessage(document.documentElement.scrollHeight);
      }, 500);
      true;
    `;
      const WebViewWrapper = isResponsiveGraphics ? WebView : AutoHeightWebView;

    return (
      <WebViewWrapper
        onSizeUpdated={size => this.updateHeight(size.height)}
        onMessage={this.onMessage}
        scalesPageToFit
        automaticallyAdjustContentInsets={false}
        injectedJavaScript={scriptToInject}
        onLoadEnd={this.onLoadEnd}
        ref={ref => {
          this.webview = ref;
        }}
        scrollEnabled={false}
        onShouldStartLoadWithRequest={this.handleOnShouldStartLoadWithRequest}
        source={{ uri }}
        style={{ height, width: "100%" }}
      />
    );
  }
}

InteractiveWrapper.propTypes = {
  config: PropTypes.shape({}),
  id: PropTypes.string.isRequired
};

InteractiveWrapper.defaultProps = {
  config: {}
};

InteractiveWrapper.ResponsiveImageInteractive = ResponsiveImageInteractive;

export default InteractiveWrapper;
