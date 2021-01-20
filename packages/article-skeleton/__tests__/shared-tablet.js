/* eslint-disable global-require */
import TestRenderer from "react-test-renderer";
import {
  addSerializers,
  compose,
  flattenStyleTransform,
  print,
  minimaliseTransform,
  minimalNativeTransform,
} from "@times-components-native/jest-serializer";
import "./mocks.native";
import {
  iterator,
  withTabletContext,
} from "@times-components-native/test-utils";
import articleFixture from "../fixtures/full-article";
import { renderArticle, fixtureArgs } from "./shared.base";

export default () => {
  addSerializers(
    expect,
    compose(
      print,
      minimalNativeTransform,
      minimaliseTransform((value, key) => key !== "style"),
      flattenStyleTransform,
    ),
  );

  const tests = [
    {
      name: "with inline video",
      test: async () => {
        const article = articleFixture({
          ...fixtureArgs,
          content: [
            {
              attributes: {
                brightcoveAccountId: "57838016001",
                brightcovePolicyKey: "1.2.3.4",
                brightcoveVideoId: "4084164751001",
                caption: "This is video caption",
                display: "primary",
                posterImageId: "0c0309d4-1aeb-11e8-9010-1eef6ba5d3de",
                posterImageUrl: "https://image.io",
              },
              children: [],
              name: "video",
            },
          ],
        });

        const testInstance = TestRenderer.create(
          withTabletContext(renderArticle(article, undefined, true)),
        );

        expect(testInstance).toMatchSnapshot();
      },
    },
    {
      name: "with ad on mainstandard",
      test: async () => {
        const article = articleFixture({
          ...fixtureArgs,
          template: "mainstandard",
          content: [
            {
              attributes: {},
              children: [],
              name: "ad",
            },
          ],
        });

        const testInstance = TestRenderer.create(
          withTabletContext(renderArticle(article, undefined, true)),
        );

        expect(testInstance).toMatchSnapshot();
      },
    },
    {
      name: "with ad on maincomment",
      test: async () => {
        const article = articleFixture({
          ...fixtureArgs,
          template: "maincomment",
          content: [
            {
              attributes: {},
              children: [],
              name: "ad",
            },
          ],
        });

        const testInstance = TestRenderer.create(
          withTabletContext(renderArticle(article, undefined, true)),
        );

        expect(testInstance).toMatchSnapshot();
      },
    },
  ];

  iterator(tests);
};
