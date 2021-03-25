import React from "react";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { iterator } from "@times-components-native/test-utils";
import createItem from "./utils";
import { SupplementSecondaryFourSlice } from "../src/slice-layout";

export default (renderComponent) => {
  const tests = [
    {
      name: "supplement secondary four - smallTablet",
      test() {
        const output = renderComponent(
          <SupplementSecondaryFourSlice
            breakpoint={editionBreakpoints.smallTablet}
            secondary1={createItem("secondary-1")}
            secondary2={createItem("secondary-2")}
            secondary3={createItem("secondary-3")}
            secondary4={createItem("secondary-4")}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
    {
      name: "supplement secondary four - medium",
      test() {
        const output = renderComponent(
          <SupplementSecondaryFourSlice
            breakpoint={editionBreakpoints.medium}
            secondary1={createItem("secondary-1")}
            secondary2={createItem("secondary-2")}
            secondary3={createItem("secondary-3")}
            secondary4={createItem("secondary-4")}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
    {
      name: "supplement secondary four - medium - with isConsecutive",
      test() {
        const output = renderComponent(
          <SupplementSecondaryFourSlice
            breakpoint={editionBreakpoints.medium}
            isConsecutive
            secondary1={createItem("secondary-1")}
            secondary2={createItem("secondary-2")}
            secondary3={createItem("secondary-3")}
            secondary4={createItem("secondary-4")}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
    {
      name: "supplement secondary four - wide",
      test() {
        const output = renderComponent(
          <SupplementSecondaryFourSlice
            breakpoint={editionBreakpoints.wide}
            secondary1={createItem("secondary-1")}
            secondary2={createItem("secondary-2")}
            secondary3={createItem("secondary-3")}
            secondary4={createItem("secondary-4")}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
    {
      name: "supplement secondary four - wide - with isConsecutive",
      test() {
        const output = renderComponent(
          <SupplementSecondaryFourSlice
            isConsecutive
            breakpoint={editionBreakpoints.wide}
            secondary1={createItem("secondary-1")}
            secondary2={createItem("secondary-2")}
            secondary3={createItem("secondary-3")}
            secondary4={createItem("secondary-4")}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
  ];

  iterator(tests);
};
