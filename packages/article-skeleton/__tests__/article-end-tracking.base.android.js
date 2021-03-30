import React from "react";
import mockDate from "mockdate";
import { create } from "react-test-renderer";

import ArticleEndTracking from "../src/article-body/article-end-tracking";

export default () => {
  describe("ArticleEndTracking", () => {
    beforeEach(() => {
      mockDate.set(1514764800000, 0);
    });

    afterEach(() => {
      mockDate.reset();
    });

    it("does not render the component for Android", () => {
      const mockedOnViewed = jest.fn();
      const mockedAnalyticsStream = jest.fn();

      const output = create(
        <ArticleEndTracking
          analyticsStream={mockedAnalyticsStream}
          onViewed={mockedOnViewed}
        />,
      );

      expect(output).toMatchSnapshot();
    });
  });
};
