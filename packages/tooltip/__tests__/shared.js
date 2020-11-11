import Tooltip from "../tooltip";
import TestRenderer from "react-test-renderer";
import { delay } from "@times-components-native/test-utils";
import { shallow } from "enzyme";
import { TouchableOpacity } from "react-native";
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

    it("onTooltipPresented is called correctly", () => {
      const onTooltipPresentedMock = jest.fn();

      TestRenderer.create(
        <Tooltip
          content={<Text>foo</Text>}
          onTooltipPresented={onTooltipPresentedMock}
          type="testtype"
          tooltips={["testtype"]}
        >
          bar
        </Tooltip>,
      );

      expect(onTooltipPresentedMock).toHaveBeenCalledWith("testtype");
    });

    // it("closes when clicking the close button", async () => {
    //   const onTooltipPresentedMock = jest.fn();

    //   const output = shallow(
    //     <Tooltip
    //       content={<Text>foo</Text>}
    //       onTooltipPresented={onTooltipPresentedMock}
    //       type="testtype"
    //       tooltips={["testtype"]}
    //     >
    //       bar
    //     </Tooltip>,
    //   );

    //   const closeButton = output.find(TouchableOpacity);
    //   closeButton.simulate("press");
    //   delay(250);
    //   expect(closeButton).to.have.css("opacity", 0);
    // });
  });
};
