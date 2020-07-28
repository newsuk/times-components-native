import React from "react";
import WebView from "react-native-webview";
import { Linking } from "react-native";
import { WebViewNavigation } from "react-native-webview/lib/WebViewTypes";

const height = 350;

const handleRequest = (e: WebViewNavigation) => {
  if (e.navigationType !== "click") return true;

  Linking.openURL(e.url);
  return false;
};

export const SponsoredAd = () => (
  <WebView
    style={{ flex: 0, height }}
    originWhitelist={["*"]}
    onShouldStartLoadWithRequest={handleRequest}
    scrollEnabled={false}
    source={{
      html: `
<script type="text/javascript" id="dianomi_context_script" src="https://www.dianomi.com/js/contextfeed.js"></script>
<div class="dianomi_context" data-dianomi-context-id="225"></div>
`,
    }}
  />
);
