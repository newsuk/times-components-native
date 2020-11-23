import React from "react";
import { iterator } from "@times-components-native/test-utils";
import createItem from "./utils";
import { FrontLeadOneAndOneSlice } from "../src/slice-layout";
import ResponsiveContext from "@times-components-native/responsive/src/context";
import { calculateResponsiveContext } from "@times-components-native/responsive/src/calculateResponsiveContext";

jest.mock("../src/templates/horizontallayout", () => "HorizontalLayout");
jest.mock(
  "../src/templates/shared/TabletContentContainer",
  () => "TabletContentContainer",
);

const testFrontSlice = (renderComponent, width, orientation) => {
  const output = renderComponent(
    <ResponsiveContext.Provider
      value={calculateResponsiveContext(width, 500, 1)}
    >
      <FrontLeadOneAndOneSlice
        lead={createItem("lead")}
        support={createItem("support")}
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
      name: "front lead one - landscape - 1112",
      test() {
        testFrontSlice(renderComponent, 1112, "landscape");
      },
    },
    {
      name: "front lead one - landscape - 1194",
      test() {
        testFrontSlice(renderComponent, 1194, "landscape");
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
