import React from "react";
import { iterator } from "@times-components-native/test-utils";
import createItem from "./utils";
import { FrontLeadOneSlice } from "../src/slice-layout";
import { getDimensions } from "@times-components-native/utils";
jest.mock("@times-components-native/slice-layout", () => ({
  HorizontalLayout: "HorizontalLayout",
  TabletContentContainer: "TabletContentContainer",
}));

jest.mock("@times-components-native/utils", () => {
  const actualUtils = jest.requireActual("../../utils");

  return {
    ...actualUtils,
    getDimensions: jest.fn(),
  };
});

const testFrontSlice = (renderComponent, width, orientation) => {
  getDimensions.mockImplementation(() => ({
    width: width,
    height: 500,
  }));

  const output = renderComponent(
    <FrontLeadOneSlice lead={createItem("lead")} orientation={orientation} />,
  );

  expect(output).toMatchSnapshot();
};
export default (renderComponent) => {
  const tests = [
    {
      name: "front lead one - portrait - 768",
      test() {
        testFrontSlice(renderComponent, 768, "portrait");
      },
    },
    {
      name: "front lead one - portrait - 810",
      test() {
        testFrontSlice(renderComponent, 810, "portrait");
      },
    },
    {
      name: "front lead one - portrait - 834",
      test() {
        testFrontSlice(renderComponent, 834, "portrait");
      },
    },
    {
      name: "front lead one - portrait - 1024",
      test() {
        testFrontSlice(renderComponent, 1024, "portrait");
      },
    },
    {
      name: "front lead one - landscape - 1024",
      test() {
        testFrontSlice(renderComponent, 1024, "landscape");
      },
    },
    {
      name: "front lead one - landscape - 1080",
      test() {
        testFrontSlice(renderComponent, 1080, "landscape");
      },
    },
    {
      name: "front lead one - landscape - 1366",
      test() {
        testFrontSlice(renderComponent, 1366, "landscape");
      },
    },
  ];

  iterator(tests);
};
