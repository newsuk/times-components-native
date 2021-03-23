import Tooltip from "../tooltip";
import TestRenderer from "react-test-renderer";
import { ResponsiveContext } from "@times-components-native/responsive";
import React from "react";
import { Text } from "react-native";
import "./serializers-with-all-styles";

export const withTabletContext = (WrappedComponent, isArticleTablet = true) => (
  <ResponsiveContext.Provider
    value={{
      isArticleTablet: isArticleTablet,
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
        ),
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
            articleId={mockArticleId}
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
        withTabletContext(
          <Tooltip
            content={<Text>foo</Text>}
            onTooltipPresented={onTooltipPresentedMock}
            type="testtype"
            tooltips={["testtype"]}
            width={100}
            articleId={mockArticleId}
          >
            bar
          </Tooltip>,
        ),
      );
      expect(output).toMatchSnapshot();
    });

    it("renders correctly with supplied placement top", () => {
      const output = TestRenderer.create(
        withTabletContext(
          <Tooltip
            content={<Text>foo</Text>}
            onTooltipPresented={onTooltipPresentedMock}
            type="testtype"
            tooltips={["testtype"]}
            placement="top"
            articleId={mockArticleId}
          >
            bar
          </Tooltip>,
        ),
      );
      expect(output).toMatchSnapshot();
    });

    it("renders correctly with flexDirectionColumnReverse", () => {
      const output = TestRenderer.create(
        withTabletContext(
          <Tooltip
            content={<Text>foo</Text>}
            onTooltipPresented={onTooltipPresentedMock}
            type="testtype"
            tooltips={["testtype"]}
            flexDirectionColumnReverse
            articleId={mockArticleId}
          >
            bar
          </Tooltip>,
        ),
      );
      expect(output).toMatchSnapshot();
    });

    it("renders correctly with supplied placement right", () => {
      const output = TestRenderer.create(
        withTabletContext(
          <Tooltip
            content={<Text>foo</Text>}
            onTooltipPresented={onTooltipPresentedMock}
            type="testtype"
            tooltips={["testtype"]}
            placement="right"
            articleId={mockArticleId}
          >
            bar
          </Tooltip>,
        ),
      );
      expect(output).toMatchSnapshot();
    });

    it("renders correctly with supplied offsets", () => {
      const output = TestRenderer.create(
        withTabletContext(
          <Tooltip
            content={<Text>foo</Text>}
            onTooltipPresented={onTooltipPresentedMock}
            type="testtype"
            tooltips={["testtype"]}
            offsetX={10}
            offsetY={10}
            arrowOffset={10}
            articleId={mockArticleId}
          >
            bar
          </Tooltip>,
        ),
      );
      expect(output).toMatchSnapshot();
    });

    it("onTooltipPresented is called correctly on Viewport Enter", async () => {
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
        ),
      );
      const viewportAwareView = output.root.findByProps({
        testID: "viewportAwareView",
      });
      viewportAwareView.props.onViewportEnter();
      expect(onTooltipPresentedMock).toBeCalledWith("testtype", mockArticleId);
    });

    it("onTooltipPresented is called correctly if tooltip is displayed in view", async () => {
      TestRenderer.create(
        withTabletContext(
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
        ),
      );

      expect(onTooltipPresentedMock).toBeCalledWith("testtype", mockArticleId);
    });
  });
};
