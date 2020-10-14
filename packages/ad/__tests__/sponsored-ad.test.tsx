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

  it("renders the require number of ad items", () => {
    const ad = TestRenderer.create(<SponsoredAd numberOfAds={2} />);
    const webView = ad.root.findByType(WebView);

    expect(webView.props.source.html).toMatchSnapshot();
  });

  it("renders 4 ad items if number not found in mapping", () => {
    const ad = TestRenderer.create(<SponsoredAd numberOfAds={123} />);
    const webView = ad.root.findByType(WebView);

    expect(webView.props.source.html).toMatchSnapshot();
  });
});
