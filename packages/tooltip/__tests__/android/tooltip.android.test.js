import Tooltip from "../../../tooltip";
import TestRenderer from "react-test-renderer";
import React from "react";
import { Text } from "react-native";
import "../serializers-with-all-styles";
import { Platform } from "react-native";

import { withTabletContext } from "../shared";

describe("Tooltip", () => {
  Platform.OS = "android";
  it("hides tooltip close button on android only", () => {
    Platform.OS = "android";

    const onTooltipPresentedMock = jest.fn();

    const output = TestRenderer.create(
      withTabletContext(
        <Tooltip
          content={<Text>foo</Text>}
          onTooltipPresented={onTooltipPresentedMock}
          type="testtype"
          tooltips={["testtype"]}
          placement="top"
        >
          bar
        </Tooltip>,
      ),
    );
    expect(output).toMatchSnapshot();
  });
});
