import React, { MutableRefObject } from "react";
import WebView from "react-native-webview";
import { Linking } from "react-native";
import {
  WebViewMessageEvent,
  WebViewNavigation,
} from "react-native-webview/lib/WebViewTypes";

const handleRequest = (e: WebViewNavigation) => {
  if (e.navigationType !== "click") {
    return true;
  }
  Linking.openURL(e.url);
  return false;
};

export const updateHeight = (webViewRef: MutableRefObject<WebView | null>) => {
  const run = `
      if (document && document.body && window.ReactNativeWebView) window.ReactNativeWebView.postMessage(document.body.scrollHeight)
      `;
  if (webViewRef && webViewRef.current) {
    webViewRef.current.injectJavaScript(run);
  }
};

export const SponsoredAd = () => {
  const [height, setHeight] = React.useState(250);
  const webViewRef = React.useRef<WebView>(null);

  const onWebViewMessage = (event: WebViewMessageEvent) => {
    const updatedHeight = Number(event.nativeEvent.data);
    setHeight(updatedHeight);
  };

  React.useEffect(() => {
    // it's not possible to know when the webview is finished rendering the content, so we periodically check the height to ensure we capture the height once it's fully rendered
    const interval = setInterval(() => updateHeight(webViewRef), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <WebView
      style={{ flex: 0, height }}
      originWhitelist={["*"]}
      onMessage={onWebViewMessage}
      onShouldStartLoadWithRequest={handleRequest}
      scrollEnabled={false}
      ref={webViewRef}
      source={{
        html: `
<script type="text/javascript" id="dianomi_context_script" src="https://www.dianomi.com/js/contextfeed.js"></script>
<div class="dianomi_context" data-dianomi-context-id="225"></div>
`,
      }}
    />
  );
};
