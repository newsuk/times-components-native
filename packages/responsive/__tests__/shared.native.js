/* eslint-disable global-require */
import React from "react";
import TestRenderer from "react-test-renderer";
import { setDimension } from "@times-components-native/mocks/dimensions";
import Responsive, { ResponsiveContext } from "../src/responsive";
import shared from "./shared.base";

import * as Utils from "@times-components-native/utils";

jest.mock("@times-components-native/utils", () => ({
  __esModule: true,
  getDimensions: () => ({ width: 100, height: 100 }),
  addDimensionsListener: () => null,
  removeDimensionsListener: () => null,
}));

export default () => {
  shared();

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
    jest.spyOn(Utils, "addDimensionsListener");

    TestRenderer.create(
      <Responsive>{(context) => JSON.stringify(context)}</Responsive>,
    );

    TestRenderer.act(() => {
      expect(Utils.addDimensionsListener).toBeCalled();
    });
  });

  it("removeDimensionListener is called on mount", () => {
    jest.spyOn(Utils, "removeDimensionsListener");

    let reactTestRenderer = TestRenderer.create(
      <Responsive>{(context) => JSON.stringify(context)}</Responsive>,
    );
    reactTestRenderer.unmount();

    TestRenderer.act(() => {
      expect(Utils.removeDimensionsListener).toBeCalled();
    });
  });
};
