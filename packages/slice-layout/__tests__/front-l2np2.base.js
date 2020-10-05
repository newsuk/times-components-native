import React from "react";
import { iterator } from "@times-components-native/test-utils";
import {
  editionBreakpoints,
  editionBreakpointWidths,
} from "@times-components-native/styleguide";
import createItem from "./utils";
import { FrontLeadTwoAndTwoSlice } from "../src/slice-layout";
import { getDimensions } from "@times-components-native/utils";

jest.mock("../src/templates/verticallayout", () => "VerticalLayout");
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

const testFrontLeadTwoAndTwoSlice = (
  renderComponent,
  breakpoint,
  orientation,
) => {
  getDimensions.mockImplementation(() => ({
    width: editionBreakpointWidths[breakpoint],
    height: 500,
  }));

  const output = renderComponent(
    <FrontLeadTwoAndTwoSlice
      breakpoint={breakpoint}
      lead1={createItem("lead-1")}
      lead2={createItem("lead-2")}
      support1={createItem("support-1")}
      support2={createItem("support-2")}
      orientation={orientation}
    />,
  );

  expect(output).toMatchSnapshot();
};

export default (renderComponent) => {
  const tests = [
    {
      name: "front lead two no pic and two - small - landscape",
      test() {
        testFrontLeadTwoAndTwoSlice(renderComponent, "small", "landscape");
      },
    },
    {
      name: "front lead two no pic and two - medium - landscape",
      test() {
        testFrontLeadTwoAndTwoSlice(
          renderComponent,
          editionBreakpoints.medium,
          "landscape",
        );
      },
    },
    {
      name: "front lead two no pic and two - wide - landscape",
      test() {
        testFrontLeadTwoAndTwoSlice(
          renderComponent,
          editionBreakpoints.wide,
          "landscape",
        );
      },
    },
    {
      name: "front lead two no pic and two - huge - landscape",
      test() {
        testFrontLeadTwoAndTwoSlice(
          renderComponent,
          editionBreakpoints.huge,
          "landscape",
        );
      },
    },
    {
      name: "front lead two no pic and two - small - portrait",
      test() {
        testFrontLeadTwoAndTwoSlice(renderComponent, "small", "portrait");
      },
    },
    {
      name: "front lead two no pic and two - medium - portrait",
      test() {
        testFrontLeadTwoAndTwoSlice(
          renderComponent,
          editionBreakpoints.medium,
          "portrait",
        );
      },
    },
    {
      name: "front lead two no pic and two - wide - portrait",
      test() {
        testFrontLeadTwoAndTwoSlice(
          renderComponent,
          editionBreakpoints.wide,
          "portrait",
        );
      },
    },
    {
      name: "front lead two no pic and two - huge - portrait",
      test() {
        testFrontLeadTwoAndTwoSlice(
          renderComponent,
          editionBreakpoints.huge,
          "portrait",
        );
      },
    },
  ];

  iterator(tests);
};
