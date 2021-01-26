import React from "react";
import TestRenderer, { act } from "react-test-renderer";
import {
  addSerializers,
  compose,
  flattenStyleTransform,
  minimaliseTransform,
  minimalNativeTransform,
  print,
} from "@times-components-native/jest-serializer";
import { iterator } from "@times-components-native/test-utils";
import Responsive from "@times-components-native/responsive";
import { setIsTablet } from "./mocks";

import ModalImage from "../src/modal-image";

const props = {
  caption: {
    text: "Caption",
    credits: "Credits",
  },
  uri: "http://example.com/image.jpg?crop=1016%2C677%2C0%2C0",
};

jest.useFakeTimers();

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
      name: "landscape default modal",
      test: async () => {
        const testRenderer = TestRenderer.create(
          <Responsive>
            <ModalImage {...props} aspectRatio={2} />
          </Responsive>,
        );

        await act(async () => {
          jest.runAllImmediates();
        });

        expect(testRenderer).toMatchSnapshot();
      },
    },
    {
      name: "portrait default modal",
      test: async () => {
        const testRenderer = TestRenderer.create(
          <Responsive>
            <ModalImage {...props} aspectRatio={0.5} />
          </Responsive>,
        );
        await act(async () => {
          jest.runAllImmediates();
        });

        expect(testRenderer).toMatchSnapshot();
      },
    },
    {
      name: "tablet landscape default modal",
      test: async () => {
        setIsTablet(true);
        const testRenderer = TestRenderer.create(
          <Responsive>
            <ModalImage {...props} aspectRatio={2} onLayout={() => null} />
          </Responsive>,
        );

        await act(async () => {
          jest.runAllImmediates();
        });

        await act(async () => {
          jest.runAllImmediates();
        });

        expect(testRenderer).toMatchSnapshot();
      },
    },
    {
      name: "tablet portrait default modal",
      test: async () => {
        setIsTablet(true);
        const testRenderer = TestRenderer.create(
          <Responsive>
            <ModalImage {...props} aspectRatio={0.5} onLayout={() => null} />
          </Responsive>,
        );
        await act(async () => {
          jest.runAllImmediates();
        });

        await act(async () => {
          jest.runAllImmediates();
        });

        expect(testRenderer).toMatchSnapshot();
      },
    },
  ];

  iterator(tests);
};
