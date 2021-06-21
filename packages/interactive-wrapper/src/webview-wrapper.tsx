import React, { useRef, useState } from "react";
import { Linking, Platform } from "react-native";
import {
  WebView,
  WebViewMessageEvent,
  WebViewNavigation,
} from "react-native-webview";
import webviewEventCallbackSetup from "./webview-event-callback-setup";

type TConfig = {
  dev: boolean;
  environment: string;
  platform: string; // "ios or android?"
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

  // const handleNavigationStateChange = (event: WebViewNavigation) => {
  //   if (Platform.OS === "android") {
  //     // if (event.url === uri) {
  //     //   return;
  //     // }
  //     // // webview.current?.stopLoading();
  //     // //webview.current?.goBack();
  //     // webview.current?.reload();
  //     // openURLInBrowser(event.url);
  //     if (
  //       !event.url.includes("data:text/html") &&
  //       event.url.includes("http") &&
  //       !event.url.includes(editorialLambdaOrigin)
  //     ) {
  //       openURLInBrowser(event.url);
  //       webview.current?.reload();
  //     }
  //   }
  // };

  return (
    <WebView
      injectedJavaScriptBeforeContentLoaded={scriptToInject}
      onMessage={handleOnMessage}
      // onNavigationStateChange={handleNavigationStateChange}
      ref={webview}
      scrollEnabled={false}
      source={{ uri }}
      style={{ height }}
    />
  );
}

export default WebviewWrapper;
