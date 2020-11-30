import FloatingActionButton from "../floating-action-button";
import TestRenderer from "react-test-renderer";
import { IconEmail } from "@times-components-native/icons";
import { shallow } from "enzyme";
import { TouchableOpacity } from "react-native";
import React from "react";
import "./serializers-with-all-styles";
const onPressMock = jest.fn();
const animatedWidthMock = jest.fn();

export default () => {
  describe("FloatingActionButton", () => {
    it("renders correctly with icon", () => {
      const output = TestRenderer.create(
        <FloatingActionButton
          text="foo"
          onPress={onPressMock}
          icon={<IconEmail />}
          extendedWidth={200}
          animatedWidth={animatedWidthMock}
        />,
      );
      expect(output).toMatchSnapshot();
    });

    it("renders correctly without icon", () => {
      const output = TestRenderer.create(
        <FloatingActionButton
          text="foo"
          onPress={onPressMock}
          extendedWidth={200}
          animatedWidth={animatedWidthMock}
        />,
      );
      expect(output).toMatchSnapshot();
    });

    it("onPress is called correctly", async () => {
      const testInstance = shallow(
        <FloatingActionButton
          text="foo"
          onPress={onPressMock}
          extendedWidth={200}
          animatedWidth={animatedWidthMock}
        />,
      );

      const button = testInstance.find(TouchableOpacity);
      button.simulate("press");
      expect(onPressMock).toBeCalled();
    });
  });
};
