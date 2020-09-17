import React from "react";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { iterator } from "@times-components-native/test-utils";
import createItem from "./utils";
import { SupplementSecondaryTwoAndTwoSlice } from "../src/slice-layout";
import styles from "../src/templates/supplementsecondarytwoandtwo/styles";

export default (renderComponent) => {
  const tests = [
    {
      name: "supplement secondary two and two - small",
      test() {
        const output = renderComponent(
          <SupplementSecondaryTwoAndTwoSlice
            secondary1={createItem("secondary-1")}
            secondary2={createItem("secondary-2")}
            support1={createItem("support-1")}
            support2={createItem("support-2")}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
    {
      name: "supplement secondary two and two - medium",
      test() {
        const output = renderComponent(
          <SupplementSecondaryTwoAndTwoSlice
            breakpoint={editionBreakpoints.medium}
            secondary1={createItem("secondary-1")}
            secondary2={createItem("secondary-2")}
            support1={createItem("support-1")}
            support2={createItem("support-2")}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
    {
      name: "supplement secondary two and two - wide",
      test() {
        const output = renderComponent(
          <SupplementSecondaryTwoAndTwoSlice
            breakpoint={editionBreakpoints.wide}
            secondary1={createItem("secondary-1")}
            secondary2={createItem("secondary-2")}
            support1={createItem("support-1")}
            support2={createItem("support-2")}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
    {
      name: "supplement secondary two and two - huge",
      test() {
        const output = renderComponent(
          <SupplementSecondaryTwoAndTwoSlice
            breakpoint={editionBreakpoints.huge}
            secondary1={createItem("secondary-1")}
            secondary2={createItem("secondary-2")}
            support1={createItem("support-1")}
            support2={createItem("support-2")}
          />,
        );

        expect(output).toMatchSnapshot();
      },
    },
    {
      name: "supplement secondary two and two - wrong breakpoint",
      test() {
        expect(styles("wrong-breakpoint")).toEqual(
          styles(editionBreakpoints.small),
        );
      },
    },
  ];

  iterator(tests);
};
