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
    const mockArticleId = "mockArticleId";
    const onTooltipPresentedMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    it("renders correctly when type is in tooltips array", () => {
      const output = TestRenderer.create(
        <Tooltip
          content={<Text>foo</Text>}
          onTooltipPresented={onTooltipPresentedMock}
          type="testtype"
          tooltips={["testtype"]}
          articleId={mockArticleId}
        >
          bar
        </Tooltip>,
      );
      expect(output).toMatchSnapshot();
    });

    it("does not render tooltip when tooltip type is not in tooltips array", () => {
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
      const output = TestRenderer.create(
        withTabletContext(
          <Tooltip
            content={<Text>foo</Text>}
            onTooltipPresented={onTooltipPresentedMock}
            type="testtype"
            tooltips={["testtype"]}
            articleId={mockArticleId}
          >
            bar
          </Tooltip>,
          false,
        ),
      );
      expect(output).toMatchSnapshot();
    });

    it("renders correctly with supplied width", () => {
      const output = TestRenderer.create(
        <Tooltip
          content={<Text>foo</Text>}
          onTooltipPresented={onTooltipPresentedMock}
          type="testtype"
          tooltips={["testtype"]}
          articleId={mockArticleId}
          width={100}
        >
          bar
        </Tooltip>,
      );
      expect(output).toMatchSnapshot();
    });

    it("renders correctly with supplied placement top", () => {
      const output = TestRenderer.create(
        <Tooltip
          content={<Text>foo</Text>}
          onTooltipPresented={onTooltipPresentedMock}
          type="testtype"
          tooltips={["testtype"]}
          articleId={mockArticleId}
          placement="top"
        >
          bar
        </Tooltip>,
      );
      expect(output).toMatchSnapshot();
    });

    it("renders correctly with supplied placement right", () => {
      const output = TestRenderer.create(
        <Tooltip
          content={<Text>foo</Text>}
          onTooltipPresented={onTooltipPresentedMock}
          type="testtype"
          tooltips={["testtype"]}
          articleId={mockArticleId}
          placement="right"
        >
          bar
        </Tooltip>,
      );
      expect(output).toMatchSnapshot();
    });

    it("renders correctly with supplied offsets", () => {
      const output = TestRenderer.create(
        <Tooltip
          content={<Text>foo</Text>}
          onTooltipPresented={onTooltipPresentedMock}
          type="testtype"
          tooltips={["testtype"]}
          articleId={mockArticleId}
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
      const testInstance = shallow(
        <Tooltip
          content={<Text>foo</Text>}
          onTooltipPresented={onTooltipPresentedMock}
          type="testtype"
          tooltips={["testtype"]}
          articleId={mockArticleId}
        >
          bar
        </Tooltip>,
      );
      testInstance.children().at(0).props().onViewportEnter();

      expect(onTooltipPresentedMock).toBeCalledWith("testtype", mockArticleId);
    });

    it("onTooltipPresented is called correctly if tooltip is displayed in view", async () => {
      shallow(
        <Tooltip
          content={<Text>foo</Text>}
          displayedInView={true}
          onTooltipPresented={onTooltipPresentedMock}
          type="testtype"
          tooltips={["testtype"]}
          articleId={mockArticleId}
        >
          bar
        </Tooltip>,
      );

      expect(onTooltipPresentedMock).toBeCalledWith("testtype", mockArticleId);
    });
  });
};
