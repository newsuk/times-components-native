import Tooltip from "../../../tooltip";
import TestRenderer from "react-test-renderer";
import { ResponsiveContext } from "@times-components-native/responsive";
import { shallow } from "enzyme";
import { TouchableOpacity } from "react-native";
import React from "react";
import { Text } from "react-native";
import "../serializers-with-all-styles";
import { Platform } from "react-native";

export const withTabletContext = (WrappedComponent, isTablet = true) => (
  <ResponsiveContext.Provider
    value={{
      isTablet: isTablet,
    }}
  >
    {WrappedComponent}
  </ResponsiveContext.Provider>
);

describe("Tooltip", () => {
  Platform.OS = "android";
  it("hides tooltip close button on android only", () => {
    Platform.OS = "android";

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

    expect(closeButton.exists()).toBeFalsy();
  });
});
