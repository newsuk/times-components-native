import React from "react";
import { iterator } from "@times-components-native/test-utils";
import { editionBreakpoints } from "@times-components-native/styleguide";
import createItem from "./utils";
import { FrontLeadTwoAndTwoSlice } from "../src/slice-layout";

export default (renderComponent) => {
  const tests = [
    {
      name: "front lead two no pic and two - small - landscape",
      test() {
        const output = renderComponent(
          <FrontLeadTwoAndTwoSlice
            breakpoint={"small"}
            lead1={createItem("lead-1")}
            lead2={createItem("lead-2")}
            support1={createItem("support-1")}
            support2={createItem("support-2")}
            orientation={"landscape"}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
    {
      name: "front lead two no pic and two - medium - landscape",
      test() {
        const output = renderComponent(
          <FrontLeadTwoAndTwoSlice
            breakpoint={editionBreakpoints.medium}
            lead1={createItem("lead-1")}
            lead2={createItem("lead-2")}
            support1={createItem("support-1")}
            support2={createItem("support-2")}
            orientation={"landscape"}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
    {
      name: "front lead two no pic and two - wide - landscape",
      test() {
        const output = renderComponent(
          <FrontLeadTwoAndTwoSlice
            breakpoint={editionBreakpoints.wide}
            lead1={createItem("lead-1")}
            lead2={createItem("lead-2")}
            support1={createItem("support-1")}
            support2={createItem("support-2")}
            orientation={"landscape"}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
    {
      name: "front lead two no pic and two - huge - landscape",
      test() {
        const output = renderComponent(
          <FrontLeadTwoAndTwoSlice
            breakpoint={editionBreakpoints.huge}
            lead1={createItem("lead-1")}
            lead2={createItem("lead-2")}
            support1={createItem("support-1")}
            support2={createItem("support-2")}
            orientation={"landscape"}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
    {
      name: "front lead two no pic and two - small - portrait",
      test() {
        const output = renderComponent(
          <FrontLeadTwoAndTwoSlice
            breakpoint={"small"}
            lead1={createItem("lead-1")}
            lead2={createItem("lead-2")}
            support1={createItem("support-1")}
            support2={createItem("support-2")}
            orientation={"portrait"}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
    {
      name: "front lead two no pic and two - medium - portrait",
      test() {
        const output = renderComponent(
          <FrontLeadTwoAndTwoSlice
            breakpoint={editionBreakpoints.medium}
            lead1={createItem("lead-1")}
            lead2={createItem("lead-2")}
            support1={createItem("support-1")}
            support2={createItem("support-2")}
            orientation={"portrait"}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
    {
      name: "front lead two no pic and two - wide - portrait",
      test() {
        const output = renderComponent(
          <FrontLeadTwoAndTwoSlice
            breakpoint={editionBreakpoints.wide}
            lead1={createItem("lead-1")}
            lead2={createItem("lead-2")}
            support1={createItem("support-1")}
            support2={createItem("support-2")}
            orientation={"portrait"}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
    {
      name: "front lead two no pic and two - huge - portrait",
      test() {
        const output = renderComponent(
          <FrontLeadTwoAndTwoSlice
            breakpoint={editionBreakpoints.huge}
            lead1={createItem("lead-1")}
            lead2={createItem("lead-2")}
            support1={createItem("support-1")}
            support2={createItem("support-2")}
            orientation={"portrait"}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
  ];

  iterator(tests);
};
