import React from "react";
import { iterator } from "@times-components-native/test-utils";
import { editionBreakpoints } from "@times-components-native/styleguide";
import createItem from "./utils";
import { LeadTwoNoPicAndTwoSlice } from "../src/slice-layout";

export default (renderComponent) => {
  const tests = [
    {
      name: "lead two no pic and two - small",
      test() {
        const output = renderComponent(
          <LeadTwoNoPicAndTwoSlice
            lead1={createItem("lead-1")}
            lead2={createItem("lead-2")}
            support1={createItem("support-1")}
            support2={createItem("support-2")}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
    {
      name: "lead two no pic and two - tablet - landscape",
      test() {
        const output = renderComponent(
          <LeadTwoNoPicAndTwoSlice
            breakpoint={editionBreakpoints.wide}
            orientation={"landscape"}
            lead1={createItem("lead-1")}
            lead2={createItem("lead-2")}
            support1={createItem("support-1")}
            support2={createItem("support-2")}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
    {
      name: "lead two no pic and two - tablet - portrait",
      test() {
        const output = renderComponent(
          <LeadTwoNoPicAndTwoSlice
            breakpoint={editionBreakpoints.wide}
            orientation={"portrait"}
            lead1={createItem("lead-1")}
            lead2={createItem("lead-2")}
            support1={createItem("support-1")}
            support2={createItem("support-2")}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
  ];

  iterator(tests);
};
