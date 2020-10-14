import React from "react";
import WebView from "react-native-webview";
import { Linking, Platform, View } from "react-native";
import { WebViewNavigation } from "react-native-webview/lib/WebViewTypes";

import styles from "./styles";

const isIOS = Platform.OS === "ios";

const handleRequest = (e: WebViewNavigation) => {
  if (isIOS && e.navigationType !== "click") return true;
  if (!isIOS && e.url.slice(0, 4) !== "http") return true;

  Linking.openURL(e.url);
  return false;
};

interface Props {
  numberOfAds?: number;
}

export const SponsoredAd: React.FC<Props> = ({ numberOfAds = 4 }) => {
  const numberToContextID: Record<number, string> = {
    1: "251",
    2: "250",
    3: "244",
    4: "243",
  };

  const contextId = numberToContextID[numberOfAds] || numberToContextID[4];
  return (
    <View style={styles.sponsoredAdWrapper}>
      <WebView
        style={styles.sponsoredAd}
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
