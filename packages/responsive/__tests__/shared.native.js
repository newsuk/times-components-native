/* eslint-disable global-require */
import React from "react";
import TestRenderer from "react-test-renderer";
import { setDimension } from "@times-components-native/mocks/dimensions";
import Responsive, { ResponsiveContext } from "../src/responsive";
import shared from "./shared.base";

export default () => {
  shared();

  beforeEach(() => {
    jest.resetModules();
  });

  it("width values should update on device rotation", () => {
    const testInstance = TestRenderer.create(
      <Responsive>
        <ResponsiveContext.Consumer>
          {(context) => JSON.stringify(context)}
        </ResponsiveContext.Consumer>
      </Responsive>,
    );

    expect(testInstance).toMatchSnapshot();
    setDimension({ height: 500, width: 1000 });
    expect(testInstance).toMatchSnapshot("after width update");
  });

  it("addDimensionListener is called on mount", () => {
    jest.doMock("@times-components-native/utils", () => {
      const actualUtils = jest.requireActual("../../utils");

      return {
        ...actualUtils,
        __esModule: true,
        addDimensionsListener: jest.fn().mockImplementation(() => null),
        removeDimensionsListener: jest.fn(),
      };
    });

    const { addDimensionsListener } = require("@times-components-native/utils");
    // eslint-disable-next-line no-shadow
    const Responsive = require("../src/responsive").default;

    TestRenderer.create(
      <Responsive>
        <ResponsiveContext.Consumer>
          {(context) => JSON.stringify(context)}
        </ResponsiveContext.Consumer>
      </Responsive>,
    );

    expect(addDimensionsListener).toBeCalled();
  });

  it("removeDimensionListener is called on unmount", () => {
    jest.doMock("@times-components-native/utils", () => {
      const actualUtils = jest.requireActual("../../utils");

      return {
        ...actualUtils,
        __esModule: true,
        addDimensionsListener: jest.fn(),
        removeDimensionsListener: jest.fn().mockImplementation(() => null),
      };
    });

    const {
      removeDimensionsListener,
    } = require("@times-components-native/utils");
    // eslint-disable-next-line no-shadow
    const Responsive = require("../src/responsive").default;

    const testInstance = TestRenderer.create(
      <Responsive>
        <ResponsiveContext.Consumer>
          {(context) => JSON.stringify(context)}
        </ResponsiveContext.Consumer>
      </Responsive>,
    );

    testInstance.unmount();

    expect(removeDimensionsListener).toBeCalled();
  });
};
