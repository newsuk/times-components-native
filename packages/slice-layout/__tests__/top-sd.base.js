import React from "react";
import { iterator } from "@times-components-native/test-utils";
import createItem from "./utils";
import { TopSecondarySlice } from "../src/slice-layout";

export default (renderComponent) => {
  const tests = [
    {
      name: "top secondary",
      test() {
        const output = renderComponent(
          <TopSecondarySlice
            lead={createItem("lead")}
            support1={createItem("support-1")}
            support2={createItem("support-2")}
            support3={createItem("support-3")}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
  ];

  iterator(tests);
};
