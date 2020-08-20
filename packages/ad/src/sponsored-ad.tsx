import React from "react";
import WebView from "react-native-webview";
import { Linking, View } from "react-native";
import { WebViewNavigation } from "react-native-webview/lib/WebViewTypes";

import styleguide from "@times-components-native/styleguide";

// @ts-ignore
const { colours } = styleguide();

const height = 350;

const handleRequest = (e: WebViewNavigation) => {
  if (e.navigationType !== "click") return true;

  Linking.openURL(e.url);
  return false;
};

interface Props {
  narrowContent?: boolean;
}

export const SponsoredAd: React.FC<Props> = ({ narrowContent = false }) => {
  const contextId = narrowContent ? "244" : "243";
  return (
    <View
      style={{
        borderTopWidth: 1,
        borderColor: colours.functional.keyline,
      }}
    >
      <WebView
        style={{
          flex: 0,
          height,
        }}
        originWhitelist={["*"]}
        onShouldStartLoadWithRequest={handleRequest}
        scrollEnabled={false}
        source={{
          html: `
<script type="text/javascript" id="dianomi_context_script" src="https://www.dianomi.com/js/contextfeed.js"></script>
<div class="dianomi_context" data-dianomi-context-id="${contextId}"></div>
`,
        }}
      />
    </View>
  );
};
