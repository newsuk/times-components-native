import React from "react";
import { iterator } from "@times-components-native/test-utils";
import { editionBreakpoints } from "@times-components-native/styleguide";
import createItem from "./utils";
import { FrontLeadOneSlice } from "../src/slice-layout";

export default (renderComponent) => {
  const tests = [
    {
      name: "front lead one - medium - portrait",
      test() {
        const output = renderComponent(
          <FrontLeadOneSlice
            breakpoint={editionBreakpoints.medium}
            lead={createItem("lead")}
            orientation={"portrait"}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
    {
      name: "front lead one - wide - portrait",
      test() {
        const output = renderComponent(
          <FrontLeadOneSlice
            breakpoint={editionBreakpoints.wide}
            lead={createItem("lead")}
            orientation={"portrait"}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
    {
      name: "front lead one - huge - portrait",
      test() {
        const output = renderComponent(
          <FrontLeadOneSlice
            breakpoint={editionBreakpoints.huge}
            lead={createItem("lead")}
            orientation={"orientation"}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
    {
      name: "front lead one - medium - landscape",
      test() {
        const output = renderComponent(
          <FrontLeadOneSlice
            breakpoint={editionBreakpoints.medium}
            lead={createItem("lead")}
            orientation={"landscape"}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
    {
      name: "front lead one - wide - landscape",
      test() {
        const output = renderComponent(
          <FrontLeadOneSlice
            breakpoint={editionBreakpoints.wide}
            lead={createItem("lead")}
            orientation={"landscape"}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
    {
      name: "front lead one - huge - landscape",
      test() {
        const output = renderComponent(
          <FrontLeadOneSlice
            breakpoint={editionBreakpoints.huge}
            lead={createItem("lead")}
            orientation={"orientation"}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
  ];

  iterator(tests);
};
