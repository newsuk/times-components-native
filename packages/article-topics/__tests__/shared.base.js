import React from "react";
import mockDate from "mockdate";
import TestRenderer from "react-test-renderer";
import { mockNativeModules } from "@tcn/mocks";
import { iterator } from "@tcn/test-utils";
import Link from "@tcn/link";
import { withTrackingContext } from "@tcn/tracking";
import ArticleTopics from "../src/article-topics";
import ArticleTopic from "../src/article-topic";
import topicData from "../fixtures/topics";

mockNativeModules();
export default () => {
  beforeEach(() => {
    mockDate.set(1514764800000, 0);
  });

  afterEach(() => {
    mockDate.reset();
  });

  const tests = [
    {
      name: "group of topics",
      test: () => {
        const testInstance = TestRenderer.create(
          <ArticleTopics onPress={() => {}} topics={topicData} />
        );

        expect(testInstance).toMatchSnapshot();
      }
    },
    {
      name: "onPress handler is called with the expected args",
      test: () => {
        const onPress = jest.fn();

        const testInstance = TestRenderer.create(
          <ArticleTopics onPress={onPress} topics={topicData} />
        );

        const [link] = testInstance.root.findAll(node => node.type === Link);

        link.props.onPress("event");

        expect(onPress.mock.calls).toMatchSnapshot();
      }
    },
    {
      name: "onPress sends analytics",
      test: () => {
        const analyticsStream = jest.fn();

        const ArticleTopicsWithTracking = withTrackingContext(ArticleTopics, {
          trackingObjectName: "Article"
        });

        const testInstance = TestRenderer.create(
          <ArticleTopicsWithTracking
            analyticsStream={analyticsStream}
            onPress={() => {}}
            topics={topicData}
          />
        );

        const [link] = testInstance.root.findAll(node => node.type === Link);

        link.props.onPress("event");

        expect(analyticsStream.mock.calls).toMatchSnapshot();
      }
    },
    {
      name: "article topic",
      test: () => {
        const testInstance = TestRenderer.create(
          <ArticleTopic
            key="test-slug"
            name="Test"
            onPress={() => {}}
            slug="test-slug"
          />
        );

        expect(testInstance).toMatchSnapshot();
      }
    }
  ];

  iterator(tests);
};
