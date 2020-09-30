import InTodaysEdition from "../in-todays-edition";
import TestRenderer from "react-test-renderer";
import React from "react";
import { getDimensions } from "@times-components-native/utils";
import "./serializers-with-all-styles";

jest.mock("@times-components-native/icons", () => ({
  IconForwardArrow: "IconForwardArrow",
}));

jest.mock("@times-components-native/utils", () => {
  const actualUtils = jest.requireActual("../../utils");

  return {
    ...actualUtils,
    getDimensions: jest.fn(),
  };
});

import InTodaysEditionData from "../fixtures/in-todays-edition.json";

const renderComponent = (width, orientation) => {
  getDimensions.mockImplementation(() => ({
    width: width,
    height: 500,
  }));

  const tree = TestRenderer.create(
    <InTodaysEdition
      items={InTodaysEditionData}
      onArticlePress={() => null}
      onLinkPress={() => null}
      orientation={orientation}
    />,
  );
  expect(tree).toMatchSnapshot();
};

export default () => {
  describe("InTodaysEdition", () => {
    describe("portrait", () => {
      it("768", () => {
        renderComponent(768, "portrait");
      });

      it("810", () => {
        renderComponent(810, "portrait");
      });

      it("1024", () => {
        renderComponent(1024, "portrait");
      });
    });
    describe("landscape", () => {
      it("1024", () => {
        renderComponent(1024, "landscape");
      });
      it("1080", () => {
        renderComponent(1080, "landscape");
      });
      it("1112", () => {
        renderComponent(1112, "landscape");
      });
      it("1366", () => {
        renderComponent(1366, "landscape");
      });
    });
  });
};
