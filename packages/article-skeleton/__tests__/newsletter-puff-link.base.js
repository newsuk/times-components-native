import React from "react";
import { create } from "react-test-renderer";
import Link from "@times-components-native/link";
import mockDate from "mockdate";

import NewsletterPuffLink from "../src/article-body/newsletter-puff-link";
import { ResponsiveContext } from "@times-components-native/responsive";

export default () => {
  describe("NewsletterPuffLink", () => {
    beforeEach(() => {
      mockDate.set(1514764800000, 0);
    });

    afterEach(() => {
      jest.clearAllMocks();
      mockDate.reset();
    });

    afterEach(() => null);

    it("renders the link with the text `Manage preferences here`", () => {
      const mockedOnPress = jest.fn();
      const mockedAnalyticsStream = jest.fn();

      const component = create(
        <ResponsiveContext.Provider value={{ editionBreakpoint: "small" }}>
          <NewsletterPuffLink
            analyticsStream={mockedAnalyticsStream}
            onPress={mockedOnPress}
          />
        </ResponsiveContext.Provider>,
      );

      expect(component).toMatchSnapshot();
    });

    it("should track link viewed in analytics", () => {
      const mockedAnalyticsStream = jest.fn();
      const onPress = jest.fn();

      create(
        <ResponsiveContext.Provider value={{ editionBreakpoint: "small" }}>
          <NewsletterPuffLink
            onPress={onPress}
            analyticsStream={mockedAnalyticsStream}
          />
        </ResponsiveContext.Provider>,
      );

      expect(mockedAnalyticsStream.mock.calls).toMatchSnapshot({});
    });

    it("should track link viewed and clicked in analytics", () => {
      const mockedAnalyticsStream = jest.fn();
      const onPress = jest.fn();

      const testInstance = create(
        <ResponsiveContext.Provider value={{ editionBreakpoint: "small" }}>
          <NewsletterPuffLink
            onPress={onPress}
            analyticsStream={mockedAnalyticsStream}
          />
        </ResponsiveContext.Provider>,
      );

      testInstance.root.findByType(Link).props.onPress();

      expect(mockedAnalyticsStream.mock.calls).toMatchSnapshot({});
    });
  });
};
