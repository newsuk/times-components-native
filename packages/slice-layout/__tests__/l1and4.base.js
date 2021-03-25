import React from "react";
import { iterator } from "@times-components-native/test-utils";
import { editionBreakpoints } from "@times-components-native/styleguide";
import createItem from "./utils";
import { LeadOneAndFourSlice } from "../src/slice-layout";

export default (renderComponent) => {
  const tests = [
    {
      name: "lead one and four - small",
      test() {
        const output = renderComponent(
          <LeadOneAndFourSlice
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
      name: "lead one and four - smallTablet",
      test() {
        const output = renderComponent(
          <LeadOneAndFourSlice
            breakpoint={editionBreakpoints.smallTablet}
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
      name: "lead one and four - medium",
      test() {
        const output = renderComponent(
          <LeadOneAndFourSlice
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
  ];

  iterator(tests);
};
