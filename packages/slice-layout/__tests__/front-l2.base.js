import React from "react";
import { iterator } from "@times-components-native/test-utils";
import createItem from "./utils";
import { FrontLeadTwoSlice } from "../src/slice-layout";
import { getDimensions } from "@times-components-native/utils";

jest.mock("../src/templates/horizontallayout", () => "HorizontalLayout");
jest.mock(
  "../src/templates/shared/TabletContentContainer",
  () => "TabletContentContainer",
);

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
    <FrontLeadTwoSlice
      lead1={createItem("lead1")}
      lead2={createItem("lead2")}
      orientation={orientation}
      inTodaysEdition={createItem("inTheNews")}
    />,
  );

  expect(output).toMatchSnapshot();
};
export default (renderComponent) => {
  const tests = [
    {
      name: "front lead two - portrait - 768",
      test() {
        testFrontSlice(renderComponent, 768, "portrait");
      },
    },
    {
      name: "front lead two - portrait - 810",
      test() {
        testFrontSlice(renderComponent, 810, "portrait");
      },
    },
    {
      name: "front lead two - portrait - 834",
      test() {
        testFrontSlice(renderComponent, 834, "portrait");
      },
    },
    {
      name: "front lead two - portrait - 1024",
      test() {
        testFrontSlice(renderComponent, 1024, "portrait");
      },
    },
    {
      name: "front lead two - landscape - 1024",
      test() {
        testFrontSlice(renderComponent, 1024, "landscape");
      },
    },
    {
      name: "front lead two - landscape - 1080",
      test() {
        testFrontSlice(renderComponent, 1080, "landscape");
      },
    },
    {
      name: "front lead two - landscape - 1112",
      test() {
        testFrontSlice(renderComponent, 1112, "landscape");
      },
    },
    {
      name: "front lead two - landscape - 1366",
      test() {
        testFrontSlice(renderComponent, 1366, "landscape");
      },
    },
  ];

  iterator(tests);
};
