import React from "react";
import TestRenderer from "react-test-renderer";
import { iterator } from "@times-components-native/test-utils";
import ArticleSummary, { ArticleSummaryContent } from "../src/article-summary";
import { renderAst } from "../src/renderAst";
import { MarkAsRead } from "../src/MarkAsRead";
import defaultFixture from "../fixtures/default";
import withSummaryLinksFixture from "../fixtures/with-summary-links";
import articleMultiFixture from "../fixtures/article-multi";
import emptyParagraphFixture from "../fixtures/article-empty-paragraph";
import noBylineFixture from "../fixtures/no-byline";
import noLabelFixture from "../fixtures/no-label";
import reviewFixture from "../fixtures/review";
import blankFixture from "../fixtures/blank";
import noHeadline from "../fixtures/no-headline";
import noDatePublication from "../fixtures/no-datepublication";
import videoLabelFixture from "../fixtures/video-label";
import straplineFixture from "../fixtures/strapline";
import { ARTICLE_READ_ANIMATION } from "@times-components-native/styleguide";

jest.mock("@times-components-native/article-byline", () => ({
  __esModule: true,
  ArticleBylineOpinion: "ArticleBylineOpinion",
  default: "ArticleByline",
}));
jest.mock("@times-components-native/article-flag", () => ({
  ArticleFlags: "ArticleFlags",
}));
jest.mock("@times-components-native/article-label", () => "ArticleLabel");
jest.mock("@times-components-native/date-publication", () => "DatePublication");
jest.mock("@times-components-native/video-label", () => "VideoLabel");
jest.useFakeTimers();

export default () => {
  const byline = "A byline";
  const flags = [
    { expiryTime: "2020-03-13T12:00:00.000Z", type: "UPDATED" },
    { expiryTime: "2019-03-14T12:00:00.000Z", type: "EXCLUSIVE" },
  ];
  const headline = "Test Headline";
  const label = "Test label";
  const paragraph = "Test paragraph";
  const paragraph1 = "Test paragraph 1.";
  const paragraph2 = "Test paragraph 2";
  const strapline = "Test Strapline";
  const defaultContent = [
    {
      attributes: {},
      children: [
        {
          attributes: {
            value: paragraph,
          },
          children: [],
          name: "text",
        },
      ],
      name: "paragraph",
    },
  ];
  const isTablet = true;

  const tests = [
    {
      name: "article summary component with a single paragraph",
      test: () => {
        const testInstance = TestRenderer.create(
          <ArticleSummary
            {...defaultFixture({
              flags,
              headline,
              label,
              paragraph,
            })}
          />,
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
    {
      name: "article summary component with multiple paragraphs",
      test: () => {
        const testInstance = TestRenderer.create(
          <ArticleSummary
            {...articleMultiFixture({
              byline,
              headline,
              label,
              paragraph1,
              paragraph2,
            })}
          />,
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
    {
      name: "article summary component with content including line breaks",
      test: () => {
        const testInstance = TestRenderer.create(
          <ArticleSummary
            {...reviewFixture({
              headline,
              label,
              paragraph,
              review1Title: "Review 1",
              review2Title: "Review 2",
            })}
          />,
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
    {
      name: "article summary component containing links",
      test: () => {
        const testInstance = TestRenderer.create(
          <ArticleSummary
            {...withSummaryLinksFixture({
              headline,
              label,
            })}
          />,
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
    {
      name: "article summary component with headline and no content",
      test: () => {
        const testInstance = TestRenderer.create(
          <ArticleSummary
            {...blankFixture({
              headline,
              label,
            })}
          />,
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
    {
      name: "article summary component with empty content at the end trimmed",
      test: () => {
        const testInstance = TestRenderer.create(
          <ArticleSummary
            {...emptyParagraphFixture({
              byline,
              headline,
              label,
              paragraph1,
              paragraph2,
            })}
          />,
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
    {
      name: "article summary component with no byline",
      test: () => {
        const testInstance = TestRenderer.create(
          <ArticleSummary {...noBylineFixture({ headline, paragraph })} />,
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
    {
      name: "article summary component with no label",
      test: () => {
        const testInstance = TestRenderer.create(
          <ArticleSummary
            {...noLabelFixture({
              byline,
              headline,
              paragraph,
            })}
          />,
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
    {
      name: "article summary component with no headline",
      test: () => {
        const testInstance = TestRenderer.create(
          <ArticleSummary {...noHeadline({ label, paragraph })} />,
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
    {
      name: "article summary component with no date publication",
      test: () => {
        const testInstance = TestRenderer.create(
          <ArticleSummary
            {...noDatePublication({ byline, headline, label, paragraph })}
          />,
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
    {
      name: "article summary component with a video label",
      test: () => {
        const testInstance = TestRenderer.create(
          <ArticleSummary
            {...videoLabelFixture({ byline, headline, label, paragraph })}
          />,
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
    {
      name: "article summary component with a strapline",
      test: () => {
        const testInstance = TestRenderer.create(
          <ArticleSummary
            {...straplineFixture({
              flags,
              headline,
              label,
              paragraph,
              strapline,
            })}
          />,
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
    {
      name: "article summary content component without an AST to render null",
      test: () => {
        const testInstance = TestRenderer.create(
          <ArticleSummaryContent ast={[]} />,
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
    {
      name: "should handle rendering empty or undefined ast",
      test: () => {
        expect(renderAst([])).toEqual([]);
        expect(renderAst()).toEqual([]);
      },
    },
    {
      name: "article summary component with no headline and no label title",
      test: () => {
        const testInstance = TestRenderer.create(
          <ArticleSummary {...noHeadline({ label: null, paragraph })} />,
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
    {
      name: "article summary content component with white space height",
      test: () => {
        const testInstance = TestRenderer.create(
          <ArticleSummaryContent ast={defaultContent} whiteSpaceHeight={60} />,
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
    {
      name: "article summary content component without white space height",
      test: () => {
        const testInstance = TestRenderer.create(
          <ArticleSummaryContent ast={defaultContent} whiteSpaceHeight={0} />,
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
    {
      name:
        "article summary component with a single paragraph and flag on tablet",
      test: () => {
        const testInstance = TestRenderer.create(
          <ArticleSummary
            {...defaultFixture({
              flags,
              headline,
              paragraph,
            })}
            isTablet={isTablet}
          />,
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
    {
      name: "article summary component with a strapline and flag on tablet",
      test: () => {
        const testInstance = TestRenderer.create(
          <ArticleSummary
            {...straplineFixture({
              flags,
              headline,
              paragraph,
              strapline,
            })}
            isTablet={isTablet}
          />,
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
    {
      name: "article summary component with hidden label",
      test: () => {
        const testInstance = TestRenderer.create(
          <ArticleSummary
            {...defaultFixture({
              flags,
              headline,
              paragraph,
            })}
            {...{
              labelProps: {
                hide: true,
              },
            }}
          />,
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
    {
      name: "article summary component with byline on top",
      test: () => {
        const testInstance = TestRenderer.create(
          <ArticleSummary
            {...defaultFixture({
              bylineOnTop: true,
            })}
          />,
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
    {
      name:
        "article summary label has reduced opacity when article read state is read",
      async test() {
        const output = TestRenderer.create(
          <ArticleSummary
            {...defaultFixture({
              articleReadState: {
                read: true,
                animate: false,
              },
            })}
          />,
        );
        expect(
          output.root.findAllByType(MarkAsRead)[0].children[0].props.style
            .opacity,
        ).toEqual(0.57);
      },
    },
    {
      name:
        "article summary label has reduced opactiy after animating when article read state is set to animate",
      async test() {
        const output = TestRenderer.create(
          <ArticleSummary
            {...defaultFixture({
              articleReadState: {
                read: true,
                animate: true,
              },
            })}
          />,
        );
        expect(
          output.root.findAllByType(MarkAsRead)[0].children[0].props.style
            .opacity._value,
        ).toEqual(1);
        jest.advanceTimersByTime(
          ARTICLE_READ_ANIMATION.delay + ARTICLE_READ_ANIMATION.duration,
        );
        expect(
          output.root.findAllByType(MarkAsRead)[0].children[0].props.style
            .opacity._value,
        ).toEqual(0.57);
      },
    },
  ];

  iterator(tests);
};
