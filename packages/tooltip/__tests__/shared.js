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
    it("renders correctly", () => {
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

    it("renders correctly width supplied width", () => {
      const onTooltipPresentedMock = jest.fn();

      const output = TestRenderer.create(
        <Tooltip
          content={<Text>foo</Text>}
          onTooltipPresented={onTooltipPresentedMock}
          type="testtype"
          tooltips={["testtype"]}
          width="100"
        >
          bar
        </Tooltip>,
      );
      expect(output).toMatchSnapshot();
    });

    it("fades out when clicking the close button", async () => {
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
      await delay(250);
      expect(output.find(Animated.View).get(0).props.style.opacity._value).toBe(
        0,
      );
    });

    it("onTooltipPresented is called correctly", async () => {
      const onTooltipPresentedMock = jest.fn();

      const testInstance = shallow(
        <Tooltip
          content={<Text>foo</Text>}
          onTooltipPresented={onTooltipPresentedMock}
          type="testtype"
          tooltips={["testtype"]}
        >
          bar
        </Tooltip>,
      );
      testInstance.children().at(0).props().onViewportEnter();
      expect(onTooltipPresentedMock).toBeCalled();
    });

    it("onClose is called correctly", async () => {
      const onTooltipPresentedMock = jest.fn();
      const onCloseMock = jest.fn();

      const testInstance = shallow(
        <Tooltip
          content={<Text>foo</Text>}
          onClose={onCloseMock}
          onTooltipPresented={onTooltipPresentedMock}
          type="testtype"
          tooltips={["testtype"]}
        >
          bar
        </Tooltip>,
      );

      const closeButton = testInstance.find(TouchableOpacity);
      closeButton.simulate("press");
      expect(onCloseMock).toBeCalled();
    });
  });
};
