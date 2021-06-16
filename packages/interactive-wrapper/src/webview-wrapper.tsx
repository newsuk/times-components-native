import React, { useRef, useState } from "react";
import { Linking } from "react-native";
import { WebView, WebViewNavigation } from "react-native-webview";
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

  const handleOnLoadEnd = () => {
    setHeight(2000);
  };

  const handleOnMessage = () => {
    console.log("handle on message");
  };

  const handleNavigationStateChange = (event: WebViewNavigation) => {
    console.log("handle navigation state change", event);
    if (event.url === uri) {
      console.log("url is the same");
      return;
    }
    webview.current?.stopLoading();
    webview.current?.goBack();
    ///webview.current?.reload();
    openURLInBrowser(event.url);
    console.log("url is different");
  };

  //    <WebView
  //       ref={(ref) => { this.webview = ref; }}
  //       source={{ uri }}
  //       onNavigationStateChange={(event) => {
  //         if (event.url !== uri) {
  //           this.webview.stopLoading();
  //           Linking.openURL(event.url);
  //         }
  //       }}
  //     />

  return (
    <WebView
      injectedJavaScriptBeforeContentLoaded={scriptToInject}
      onLoadEnd={handleOnLoadEnd}
      onMessage={handleOnMessage}
      onNavigationStateChange={handleNavigationStateChange}
      ref={webview}
      scrollEnabled={false}
      source={{ uri }}
      style={{ height }}
    />
  );
}

export default WebviewWrapper;
