import React from "react";
import { iterator } from "@times-components-native/test-utils";
import { editionBreakpoints } from "@times-components-native/styleguide";
import createItem from "./utils";
import { FrontLeadOneAndOneSlice } from "../src/slice-layout";

export default (renderComponent) => {
  const tests = [
    {
      name: "front lead one and one - medium - portrait",
      test() {
        const output = renderComponent(
          <FrontLeadOneAndOneSlice
            breakpoint={editionBreakpoints.medium}
            lead={createItem("lead")}
            support={createItem("support")}
            orientation={"portrait"}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
    {
      name: "front lead one and one - wide - portrait",
      test() {
        const output = renderComponent(
          <FrontLeadOneAndOneSlice
            breakpoint={editionBreakpoints.wide}
            lead={createItem("lead")}
            support={createItem("support")}
            orientation={"portrait"}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
    {
      name: "front lead one and one - huge - portrait",
      test() {
        const output = renderComponent(
          <FrontLeadOneAndOneSlice
            breakpoint={editionBreakpoints.huge}
            lead={createItem("lead")}
            support={createItem("support")}
            orientation={"orientation"}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
    {
      name: "front lead one and one - medium - landscape",
      test() {
        const output = renderComponent(
          <FrontLeadOneAndOneSlice
            breakpoint={editionBreakpoints.medium}
            lead={createItem("lead")}
            support={createItem("support")}
            orientation={"landscape"}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
    {
      name: "front lead one and one - wide - landscape",
      test() {
        const output = renderComponent(
          <FrontLeadOneAndOneSlice
            breakpoint={editionBreakpoints.wide}
            lead={createItem("lead")}
            support={createItem("support")}
            orientation={"landscape"}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
    {
      name: "front lead one and one - huge - landscape",
      test() {
        const output = renderComponent(
          <FrontLeadOneAndOneSlice
            breakpoint={editionBreakpoints.huge}
            lead={createItem("lead")}
            support={createItem("support")}
            orientation={"orientation"}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
  ];

  iterator(tests);
};
