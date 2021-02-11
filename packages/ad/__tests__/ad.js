import React, { Fragment } from "react";
import TestRenderer from "react-test-renderer";
import {
  addSerializers,
  compose,
  flattenStyleTransform,
  minimaliseTransform,
  minimalNativeTransform,
  print,
} from "@times-components-native/jest-serializer";
import { iterator } from "@times-components-native/test-utils";
import adConfig from "../fixtures/article-ad-config.json";
import Ad from "../src/ad";

export default () => {
  addSerializers(
    expect,
    compose(
      print,
      minimaliseTransform((value, key) => key === "style"),
      minimalNativeTransform,
      flattenStyleTransform,
    ),
  );

  const articleContextURL =
    "https://www.thetimes.co.uk/edition/news/france-defies-may-over-russia-37b27qd2s";

  const tests = [
    {
      name: "one ad slot",
      test: () => {
        const testInstance = TestRenderer.create(
          <Ad
            contextUrl={articleContextURL}
            section="news"
            slotName="header"
            adConfig={adConfig}
          />,
        );

        expect(testInstance).toMatchSnapshot();
      },
    },
    {
      name: "two ad slots",
      test: () => {
        const testInstance = TestRenderer.create(
          <Fragment>
            <Ad
              contextUrl={articleContextURL}
              section="news"
              slotName="header"
              adConfig={adConfig}
            />
            <Ad
              contextUrl={articleContextURL}
              section="news"
              slotName="intervention"
              adConfig={adConfig}
            />
          </Fragment>,
        );

        expect(testInstance).toMatchSnapshot();
      },
    },
  ];

  iterator(tests);
};
