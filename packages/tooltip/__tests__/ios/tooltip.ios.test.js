import { delay } from "@times-components-native/test-utils";
import React from "react";
import { Animated } from "react-native";
import TestRenderer from "react-test-renderer";
import { Platform, Text } from "react-native";

import "../serializers-with-all-styles";

import Tooltip from "../../../tooltip";
import { withTabletContext } from "../shared";

describe("Tooltip", () => {
  Platform.OS = "ios";
  it("fades out when clicking the close button", async () => {
    const onTooltipPresentedMock = jest.fn();

    const output = TestRenderer.create(
      withTabletContext(
        <Tooltip
          content={<Text>foo</Text>}
          onTooltipPresented={onTooltipPresentedMock}
          type="testtype"
          tooltips={["testtype"]}
        >
          bar
        </Tooltip>,
      ),
    );

    const closeButton = output.root.findByProps({
      testID: "closeButton",
    });
    closeButton.props.onPress();
    await delay(250);

    expect(
      output.root.findByType(Animated.View).children[0].props.style.opacity
        ._value,
    ).toBe(0);
  });

  it("onClose is called correctly", async () => {
    const onTooltipPresentedMock = jest.fn();
    const onCloseMock = jest.fn();

    const output = TestRenderer.create(
      withTabletContext(
        <Tooltip
          content={<Text>foo</Text>}
          onClose={onCloseMock}
          onTooltipPresented={onTooltipPresentedMock}
          type="testtype"
          tooltips={["testtype"]}
        >
          bar
        </Tooltip>,
      ),
    );

    const closeButton = output.root.findByProps({
      testID: "closeButton",
    });
    closeButton.props.onPress();
    expect(onCloseMock).toBeCalled();
  });
});
