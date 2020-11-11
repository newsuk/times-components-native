import Tooltip from "../tooltip";
import TestRenderer from "react-test-renderer";
import { delay } from "@times-components-native/test-utils";
import { shallow } from "enzyme";
import { TouchableOpacity, Animated } from "react-native";
import React from "react";
import { Text } from "react-native";
import "./serializers-with-all-styles";

export default () => {
  describe("Tooltip", () => {
    it("renders correctly when type is in tooltips array", () => {
      const onTooltipPresentedMock = jest.fn();

      const output = TestRenderer.create(
        <Tooltip
          content={<Text>foo</Text>}
          onTooltipPresented={onTooltipPresentedMock}
          type="testtype"
          tooltips={["testtype"]}
        >
          bar
        </Tooltip>,
      );
      expect(output).toMatchSnapshot();
    });

    it("renders correctly when type is not in tooltips array", () => {
      const onTooltipPresentedMock = jest.fn();

      const output = TestRenderer.create(
        <Tooltip
          content={<Text>foo</Text>}
          onTooltipPresented={onTooltipPresentedMock}
          type="testtype"
          tooltips={[""]}
        >
          bar
        </Tooltip>,
      );
      expect(output).toMatchSnapshot();
    });

    it("closes when clicking the close button", async () => {
      const onTooltipPresentedMock = jest.fn();

      const output = shallow(
        <Tooltip
          content={<Text>foo</Text>}
          onTooltipPresented={onTooltipPresentedMock}
          type="testtype"
          tooltips={["testtype"]}
        >
          bar
        </Tooltip>,
      );

      const closeButton = output.find(TouchableOpacity);
      closeButton.simulate("press");
      await delay(201);
      expect(output.find(Animated.View).get(0).props.style.opacity._value).toBe(
        0,
      );
    });
  });
};
