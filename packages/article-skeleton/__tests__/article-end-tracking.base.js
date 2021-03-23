import React from "react";
import mockDate from "mockdate";
import { create } from "react-test-renderer";
import { withTrackingContext } from "@times-components-native/tracking";

import ArticleEndTracking from "../src/article-body/article-end-tracking";

export default () => {
  describe("ArticleEndTracking", () => {
    beforeEach(() => {
      mockDate.set(1514764800000, 0);
    });

    afterEach(() => {
      mockDate.reset();
    });

    it("renders the component and triggers the onViewed callback when in viewport", () => {
      const mockedOnViewed = jest.fn();
      const mockedAnalyticsStream = jest.fn();

      const output = create(
        <ArticleEndTracking
          analyticsStream={mockedAnalyticsStream}
          onViewed={mockedOnViewed}
        />,
      );

      expect(output).toMatchSnapshot();
      const viewportAwareView = output.root.findByProps({
        testID: "viewportAwareView",
      });
      viewportAwareView.props.onViewportEnter();
      expect(mockedOnViewed).toHaveBeenCalledTimes(1);
    });

    it("should track the viewed component in analytics", () => {
      const mockedOnViewed = jest.fn();
      const mockedAnalyticsStream = jest.fn();

      const ArticleEndTrackingWithContext = withTrackingContext(
        ArticleEndTracking,
        {
          trackingObjectName: "Article",
        },
      );

      const output = create(
        <ArticleEndTrackingWithContext
          analyticsStream={mockedAnalyticsStream}
          onViewed={mockedOnViewed}
        />,
      );

      const viewportAwareView = output.root.findByProps({
        testID: "viewportAwareView",
      });
      viewportAwareView.props.onViewportEnter();
      expect(mockedAnalyticsStream.mock.calls).toMatchSnapshot();
    });
  });
};
