import { SponsoredAd } from "@times-components-native/ad/src/sponsored-ad";
import TestRenderer from "react-test-renderer";
import React from "react";
import WebView from "react-native-webview";
import { Linking } from "react-native";

jest.mock("react-native", () => {
  const rn = jest.requireActual("react-native");
  rn.NativeModules.Linking = { openURL: jest.fn() };
  return rn;
});

describe("SponsoredAd", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("opens external browser when link is clicked", () => {
    const ad = TestRenderer.create(<SponsoredAd />);
    const webView = ad.root.findByType(WebView);

    TestRenderer.act(() => {
      const result = webView.props.onShouldStartLoadWithRequest({
        navigationType: "other",
        url: "https://some-test-url",
      });

      expect(result).toEqual(false);
    });

    expect(Linking.openURL).toHaveBeenCalledWith(`https://some-test-url`);
  });
});
