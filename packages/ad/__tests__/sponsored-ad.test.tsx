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

  it("renders Dianomi script tag", () => {
    const ad = TestRenderer.create(<SponsoredAd />);
    const webView = ad.root.findByType(WebView);

    expect(webView.props.source.html).toMatchSnapshot();
  });

  it("renders webview with height", () => {
    const ad = TestRenderer.create(<SponsoredAd />);
    const webView = ad.root.findByType(WebView);

    expect(webView.props.style.height).toEqual(350);
  });

  it("opens external browser when link is clicked", () => {
    const ad = TestRenderer.create(<SponsoredAd />);
    const webView = ad.root.findByType(WebView);

    TestRenderer.act(() => {
      const result = webView.props.onShouldStartLoadWithRequest({
        navigationType: "click",
        url: "https://some-test-url",
      });

      expect(result).toEqual(false);
    });

    expect(Linking.openURL).toHaveBeenCalledWith(`https://some-test-url`);
  });

  it("handles network requests inside webview if not initiated with a click", () => {
    const ad = TestRenderer.create(<SponsoredAd />);
    const webView = ad.root.findByType(WebView);

    TestRenderer.act(() => {
      const result = webView.props.onShouldStartLoadWithRequest({
        navigationType: "other",
        url: "https://some-test-url",
      });

      expect(result).toEqual(true);
    });

    expect(Linking.openURL).not.toHaveBeenCalled();
  });
});
