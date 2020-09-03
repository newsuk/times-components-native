import React from "react";
import { iterator } from "@times-components-native/test-utils";
import { editionBreakpoints } from "@times-components-native/styleguide";
import createItem from "./utils";
import { SupplementLeadOneAndOneSlice } from "../src/slice-layout";

export default (renderComponent) => {
  const tests = [
    {
      name: "supplement lead one and one - medium",
      test() {
        const output = renderComponent(
          <SupplementLeadOneAndOneSlice
            breakpoint={editionBreakpoints.medium}
            lead={createItem("lead")}
            support={createItem("support")}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
    {
      name: "supplement lead one and one - wide",
      test() {
        const output = renderComponent(
          <SupplementLeadOneAndOneSlice
            breakpoint={editionBreakpoints.wide}
            lead={createItem("lead")}
            support={createItem("support")}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
    {
      name: "supplement lead one and one - huge",
      test() {
        const output = renderComponent(
          <SupplementLeadOneAndOneSlice
            breakpoint={editionBreakpoints.huge}
            lead={createItem("lead")}
            support={createItem("support")}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
  ];

  iterator(tests);
};
