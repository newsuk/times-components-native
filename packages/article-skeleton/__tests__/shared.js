/* eslint-disable global-require */
import React from "react";
import TestRenderer from "react-test-renderer";
import mockDate from "mockdate";
import {
  addSerializers,
  compose,
  print,
  minimaliseTransform,
  minimalNativeTransform,
} from "@times-components-native/jest-serializer";
import { TextLink } from "@times-components-native/link";
import "./mocks";
import { FontStorage } from "@times-components-native/typeset";
import shared from "./shared.base";
import ArticleSkeleton from "../src/article-skeleton";
import articleFixture, {
  testFixture,
  longContent,
  contentWithItalicText,
} from "../fixtures/full-article";
import { adConfig } from "./ad-mock";
import articleSkeletonProps from "./shared-article-skeleton-props";
import { withMobileContext } from "@times-components-native/test-utils";

FontStorage.registerFont(
  "TimesDigitalW04",
  () => require("@times-components-native/test-utils").TestFont,
);
FontStorage.registerFont(
  "TimesDigitalW04-Bold",
  () => require("@times-components-native/test-utils").TestFont,
);
FontStorage.registerFont(
  "TimesDigitalW04-Italic",
  () => require("@times-components-native/test-utils").TestFont,
);
FontStorage.registerFont(
  "TimesModern-Regular",
  () => require("@times-components-native/test-utils").TestFont,
);

const omitKeys = new Set([
  "data",
  "disableVirtualization",
  "horizontal",
  "onViewableItemsChanged",
  "testID",
  "viewabilityConfig",
  "viewabilityConfigCallbackPairs",
]);

export default () => {
  addSerializers(
    expect,
    compose(
      print,
      minimalNativeTransform,
      minimaliseTransform((value, key) => omitKeys.has(key)),
    ),
  );

  beforeEach(() => {
    jest.useFakeTimers();
    mockDate.set(1514764800000, 0);
  });

  afterEach(() => {
    mockDate.reset();
  });

  const renderArticle = ({ onArticleRead, onLinkPress, stream }) =>
    withMobileContext(
      <ArticleSkeleton
        {...articleSkeletonProps}
        adConfig={adConfig}
        analyticsStream={stream || (() => null)}
        data={articleFixture({
          ...testFixture,
          content: [
            {
              children: [
                {
                  attributes: {
                    href: "https://link.io",
                    target: "_blank",
                  },
                  children: [
                    {
                      attributes: {
                        value: "Press Me",
                      },
                      children: [],
                      name: "text",
                    },
                  ],
                  name: "link",
                },
              ],
              name: "paragraph",
            },
          ],
        })}
        onArticleRead={onArticleRead || (() => null)}
        onAuthorPress={() => null}
        onCommentGuidelinesPress={() => null}
        onCommentsPress={() => null}
        onLinkPress={onLinkPress || (() => null)}
        onRelatedArticlePress={() => null}
        onTopicPress={() => null}
        onTwitterLinkPress={() => null}
        onVideoPress={() => null}
      />,
    );

  const renderArticleContent = (content, template) =>
    withMobileContext(
      <ArticleSkeleton
        {...articleSkeletonProps}
        adConfig={adConfig}
        analyticsStream={() => null}
        data={articleFixture({
          ...testFixture,
          content,
          template,
        })}
        onAuthorPress={() => null}
        onCommentGuidelinesPress={() => null}
        onCommentsPress={() => null}
        onLinkPress={() => null}
        onRelatedArticlePress={() => null}
        onTopicPress={() => null}
        onTwitterLinkPress={() => null}
        onVideoPress={() => null}
      />,
    );

  const tests = [
    {
      name: "an inline link uses the given onPress",
      test() {
        const onLinkPress = jest.fn();

        const testInstance = TestRenderer.create(
          renderArticle({ onLinkPress }),
        );

        const [link] = testInstance.root.findAllByType(TextLink);

        link.props.onPress();

        expect(onLinkPress).toHaveBeenCalled();
      },
    },
    {
      name: "an inline link reports analytics event on press",
      test() {
        const stream = jest.fn();

        const testInstance = TestRenderer.create(renderArticle({ stream }));

        const [link] = testInstance.root.findAllByType(TextLink);

        link.props.onPress();

        const [, [call]] = stream.mock.calls;

        expect(call).toMatchSnapshot();
      },
    },
    {
      name: "renders content",
      test() {
        const testInstance = TestRenderer.create(
          renderArticleContent(longContent),
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
    {
      name: "an article with inline paragraph",
      test() {
        const testInstance = TestRenderer.create(
          renderArticleContent(contentWithItalicText, "maincomment"),
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
  ];

  shared(TestRenderer.create, tests);
};
