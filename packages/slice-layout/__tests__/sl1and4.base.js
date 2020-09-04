import React from "react";
import { iterator } from "@times-components-native/test-utils";
import { editionBreakpoints } from "@times-components-native/styleguide";
import createItem from "./utils";
import { SupplementLeadOneAndFourSlice } from "../src/slice-layout";

export default (renderComponent) => {
  const tests = [
    {
      name: "supplement lead one and four - medium",
      test() {
        const output = renderComponent(
          <SupplementLeadOneAndFourSlice
            breakpoint={editionBreakpoints.medium}
            lead={createItem("lead")}
            support1={createItem("support-1")}
            support2={createItem("support-2")}
            support3={createItem("support-3")}
            support4={createItem("support-4")}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
    {
      name: "supplement lead one and four - wide",
      test() {
        const output = renderComponent(
          <SupplementLeadOneAndFourSlice
            breakpoint={editionBreakpoints.wide}
            lead={createItem("lead")}
            support1={createItem("support-1")}
            support2={createItem("support-2")}
            support3={createItem("support-3")}
            support4={createItem("support-4")}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
    {
      name: "supplement lead one and four - huge",
      test() {
        const output = renderComponent(
          <SupplementLeadOneAndFourSlice
            breakpoint={editionBreakpoints.huge}
            lead={createItem("lead")}
            support1={createItem("support-1")}
            support2={createItem("support-2")}
            support3={createItem("support-3")}
            support4={createItem("support-4")}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
  ];

  iterator(tests);
};
