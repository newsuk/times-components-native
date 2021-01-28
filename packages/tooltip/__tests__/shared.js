import Tooltip from "../tooltip";
import TestRenderer from "react-test-renderer";
import { ResponsiveContext } from "@times-components-native/responsive";
import { shallow } from "enzyme";
import React from "react";
import { Text } from "react-native";
import "./serializers-with-all-styles";

export const withTabletContext = (WrappedComponent, isTablet = true) => (
  <ResponsiveContext.Provider
    value={{
      isTablet: isTablet,
    }}
  >
    {WrappedComponent}
  </ResponsiveContext.Provider>
);

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

    it("does not render tooltip when tooltip type is not in tooltips array", () => {
      const onTooltipPresentedMock = jest.fn();

      const output = TestRenderer.create(
        withTabletContext(
          <Tooltip
            content={<Text>foo</Text>}
            onTooltipPresented={onTooltipPresentedMock}
            type="testtype"
            tooltips={[""]}
          >
            bar
          </Tooltip>,
        ),
      );
      expect(output).toMatchSnapshot();
    });

    it("does not render tooltip if not in tablet", () => {
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
          false,
        ),
      );
      expect(output).toMatchSnapshot();
    });

    it("renders correctly with supplied width", () => {
      const onTooltipPresentedMock = jest.fn();

      const output = TestRenderer.create(
        <Tooltip
          content={<Text>foo</Text>}
          onTooltipPresented={onTooltipPresentedMock}
          type="testtype"
          tooltips={["testtype"]}
          width={100}
        >
          bar
        </Tooltip>,
      );
      expect(output).toMatchSnapshot();
    });

    it("renders correctly with supplied placement top", () => {
      const onTooltipPresentedMock = jest.fn();

      const output = TestRenderer.create(
        <Tooltip
          content={<Text>foo</Text>}
          onTooltipPresented={onTooltipPresentedMock}
          type="testtype"
          tooltips={["testtype"]}
          placement="top"
        >
          bar
        </Tooltip>,
      );
      expect(output).toMatchSnapshot();
    });

    it("renders correctly with supplied placement right", () => {
      const onTooltipPresentedMock = jest.fn();

      const output = TestRenderer.create(
        <Tooltip
          content={<Text>foo</Text>}
          onTooltipPresented={onTooltipPresentedMock}
          type="testtype"
          tooltips={["testtype"]}
          placement="right"
        >
          bar
        </Tooltip>,
      );
      expect(output).toMatchSnapshot();
    });

    it("renders correctly with supplied offsets", () => {
      const onTooltipPresentedMock = jest.fn();

      const output = TestRenderer.create(
        <Tooltip
          content={<Text>foo</Text>}
          onTooltipPresented={onTooltipPresentedMock}
          type="testtype"
          tooltips={["testtype"]}
          offsetX={10}
          offsetY={10}
          arrowOffset={10}
        >
          bar
        </Tooltip>,
      );
      expect(output).toMatchSnapshot();
    });

    it("onTooltipPresented is called correctly on Viewport Enter", async () => {
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

    it("onTooltipPresented is called correctly if tooltip is displayed in view", async () => {
      const onTooltipPresentedMock = jest.fn();

      shallow(
        <Tooltip
          content={<Text>foo</Text>}
          displayedInView={true}
          onTooltipPresented={onTooltipPresentedMock}
          type="testtype"
          tooltips={["testtype"]}
        >
          bar
        </Tooltip>,
      );
      expect(onTooltipPresentedMock).toBeCalled();
    });
  });
};
