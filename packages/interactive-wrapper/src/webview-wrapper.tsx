import React, { useRef, useState } from "react";
import { Linking } from "react-native";
import { WebView, WebViewMessageEvent } from "react-native-webview";
import webviewEventCallbackSetup from "./webview-event-callback-setup";

type TConfig = {
  dev: boolean;
  environment: string;
  platform: string;
  version: string;
};

interface IProps {
  config: TConfig;
  id: string;
}

const editorialLambdaProtocol = "https://";
const editorialLambdaOrigin = "jotn9sgpg6.execute-api.eu-west-1.amazonaws.com";
const editorialLambdaSlug = "prod/component";
const minimumDifferenceInPixels = 5;
const smallInteractiveAdditionalHeight = 30;

function WebviewWrapper({ config, id }: IProps) {
  const { dev, environment, platform, version } = config;
  const uri = `${editorialLambdaProtocol}${editorialLambdaOrigin}/${editorialLambdaSlug}/${id}?dev=${dev}&env=${environment}&platform=${platform}&version=${version}`;
  const scriptToInject = `window.postMessage = function(data) {window.ReactNativeWebView.postMessage(data);};(${webviewEventCallbackSetup})({window});`;
  const [height, setHeight] = useState(1);
  const webview = useRef<WebView>(null);

  const openURLInBrowser = (url: string) => {
    return Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          return console.error("Cant open url", url); // eslint-disable-line no-console
        }
        return Linking.openURL(url);
      })
      .catch((err) => console.error("An error occurred", err)); // eslint-disable-line no-console
  };

  const handleOnMessage = (event: WebViewMessageEvent) => {
    event.persist();

    if (event.nativeEvent.url !== uri) {
      webview.current?.stopLoading();
      webview.current?.goBack();
      openURLInBrowser(event.nativeEvent.url);
      return;
    }

    const newHeight = parseInt(event.nativeEvent.data, 10);

    if (isNaN(newHeight)) {
      return;
    }

    if (newHeight && Math.abs(newHeight - height) > minimumDifferenceInPixels) {
      const updatedHeight =
        newHeight < smallInteractiveAdditionalHeight
          ? newHeight + smallInteractiveAdditionalHeight
          : newHeight;
      setHeight(updatedHeight);
    }
  };

  return (
    <WebView
      injectedJavaScriptBeforeContentLoaded={scriptToInject}
      onMessage={handleOnMessage}
      ref={webview}
      scrollEnabled={false}
      source={{ uri }}
      style={{ height }}
    />
  );
}

export default WebviewWrapper;
