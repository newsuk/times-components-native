import React from "react";
import { iterator } from "@times-components-native/test-utils";
import { editionBreakpoints } from "@times-components-native/styleguide";
import createItem from "./utils";
import { SecondaryOneAndColumnistSlice } from "../src/slice-layout";

export default (renderComponent) => {
  const tests = [
    {
      name: "secondary one and columnist - small",
      test() {
        const output = renderComponent(
          <SecondaryOneAndColumnistSlice
            columnist={createItem("columnist")}
            secondary={createItem("secondary")}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
    {
      name: "secondary one and columnist - smallTablet",
      test() {
        const output = renderComponent(
          <SecondaryOneAndColumnistSlice
            breakpoint={editionBreakpoints.smallTablet}
            columnist={createItem("columnist")}
            secondary={createItem("secondary")}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
    {
      name: "secondary one and columnist - medium",
      test() {
        const output = renderComponent(
          <SecondaryOneAndColumnistSlice
            breakpoint={editionBreakpoints.medium}
            columnist={createItem("columnist")}
            secondary={createItem("secondary")}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
  ];

  iterator(tests);
};
