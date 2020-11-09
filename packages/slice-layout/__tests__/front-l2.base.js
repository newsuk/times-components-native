import React from "react";
import { iterator } from "@times-components-native/test-utils";
import createItem from "./utils";
import { FrontLeadTwoSlice } from "../src/slice-layout";
import ResponsiveContext from "@times-components-native/responsive/src/context";
import { calculateResponsiveContext } from "@times-components-native/responsive/src/calculateResponsiveContext";

jest.mock("../src/templates/horizontallayout", () => "HorizontalLayout");
jest.mock(
  "../src/templates/shared/TabletContentContainer",
  () => "TabletContentContainer",
);

const testFrontSlice = (renderComponent, width, height, orientation) => {
  const output = renderComponent(
    <ResponsiveContext.Provider
      value={calculateResponsiveContext(width, height, 1)}
    >
      <FrontLeadTwoSlice
        lead1={createItem("lead1")}
        lead2={createItem("lead2")}
        orientation={orientation}
        inTodaysEdition={createItem("inTheNews")}
      />
    </ResponsiveContext.Provider>,
  );

  expect(output).toMatchSnapshot();
};
export default (renderComponent) => {
  const tests = [
    {
      name: "front lead two - portrait - 768",
      test() {
        testFrontSlice(renderComponent, 768, 1024, "portrait");
      },
    },
    {
      name: "front lead two - portrait - 810",
      test() {
        testFrontSlice(renderComponent, 810, 1024, "portrait");
      },
    },
    {
      name: "front lead two - portrait - 834 - 0.75 ratio",
      test() {
        testFrontSlice(renderComponent, 834, 1112, "portrait");
      },
    },
    {
      name: "front lead two - portrait - 834 - less than 0.75 ratio",
      test() {
        testFrontSlice(renderComponent, 834, 1194, "portrait");
      },
    },
    {
      name: "front lead two - portrait - 1024",
      test() {
        testFrontSlice(renderComponent, 1024, 1366, "portrait");
      },
    },
    {
      name: "front lead two - landscape - 1024",
      test() {
        testFrontSlice(renderComponent, 1024, 768, "landscape");
      },
    },
    {
      name: "front lead two - landscape - 1080",
      test() {
        testFrontSlice(renderComponent, 1080, 810, "landscape");
      },
    },
    {
      name: "front lead two - landscape - 1112",
      test() {
        testFrontSlice(renderComponent, 1112, 834, "landscape");
      },
    },
    {
      name: "front lead two - landscape - 1366",
      test() {
        testFrontSlice(renderComponent, 1366, 1024, "landscape");
      },
    },
  ];

  iterator(tests);
};
