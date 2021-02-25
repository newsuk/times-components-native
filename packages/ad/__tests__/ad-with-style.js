import React, { Fragment } from "react";
import TestRenderer from "react-test-renderer";
import {
  addSerializers,
  compose,
  flattenStyleTransform,
  hoistStyleTransform,
  minimaliseTransform,
  minimalNativeTransform,
  print,
} from "@times-components-native/jest-serializer";
import { iterator } from "@times-components-native/test-utils";
import adInit from "../src/utils/ad-init";
import adConfig from "../fixtures/article-ad-config.json";
import { AdBase } from "../src/ad";

jest.mock("../src/utils/ad-init");
adInit.mockImplementation(() => ({
  destroySlots: () => null,
  init: () => null,
}));

const props = {
  contextUrl:
    "https://www.thetimes.co.uk/edition/news/france-defies-may-over-russia-37b27qd2s",
  section: "news",
  style: {
    backgroundColor: "red",
  },
  screenWidth: 1024,
  orientation: "landscape",
  adConfig,
};

export default () => {
  addSerializers(
    expect,
    compose(
      print,
      minimalNativeTransform,
      flattenStyleTransform,
      hoistStyleTransform,
      minimaliseTransform(
        (value, key) => key === "source" || key === "injectedJavaScript",
      ),
    ),
  );

  const tests = [
    {
      name: "multiple ad slots",
      test: () => {
        const testInstance = TestRenderer.create(
          <Fragment>
            <AdBase {...props} slotName="header" />
            <AdBase {...props} slotName="pixel" />
          </Fragment>,
        );

        const AdComponent = testInstance.root.findAllByType(AdBase);
        AdComponent[0].instance.setAdReady();
        AdComponent[1].instance.setAdReady();

        expect(testInstance).toMatchSnapshot();
      },
    },
    {
      name: "return null if there is an error in the loading of scripts",
      test: () => {
        const testInstance = TestRenderer.create(
          <Fragment>
            <AdBase {...props} slotName="header" />
          </Fragment>,
        );

        const AdComponent = testInstance.root.findByType(AdBase);
        AdComponent.instance.setAdError();

        expect(testInstance).toMatchSnapshot();
      },
    },
  ];

  iterator(tests);
};
