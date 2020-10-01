import InTodaysEdition from "../in-todays-edition";
import Item from "../item";
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

const renderInTodaysEdition = (width, orientation) => {
  getDimensions.mockImplementation(() => ({
    width: width,
    height: 500,
  }));

  const output = TestRenderer.create(
    <InTodaysEdition
      items={InTodaysEditionData}
      onArticlePress={() => null}
      onLinkPress={() => null}
      orientation={orientation}
    />,
  );
  expect(output).toMatchSnapshot();
};

export default () => {
  describe("InTodaysEdition", () => {
    describe("portrait", () => {
      it("768", () => {
        renderInTodaysEdition(768, "portrait");
      });

      it("810", () => {
        renderInTodaysEdition(810, "portrait");
      });

      it("1024", () => {
        renderInTodaysEdition(1024, "portrait");
      });
    });
    describe("landscape", () => {
      it("1024", () => {
        renderInTodaysEdition(1024, "landscape");
      });
      it("1080", () => {
        renderInTodaysEdition(1080, "landscape");
      });
      it("1112", () => {
        renderInTodaysEdition(1112, "landscape");
      });
      it("1366", () => {
        renderInTodaysEdition(1366, "landscape");
      });
    });
    describe("item", () => {
      it("onArticlePress is called correctly for item with article link", () => {
        const onArticlePressMock = jest.fn();
        const onLinkPressMock = jest.fn();
        getDimensions.mockImplementation(() => ({
          width: 300,
          height: 500,
        }));

        const item = TestRenderer.create(
          <Item
            item={InTodaysEditionData[0]}
            onArticlePress={onArticlePressMock}
            onLinkPress={onLinkPressMock}
            orientation="portrait"
          />,
        );

        item.root.findByType(Item).props.onArticlePress();

        expect(onArticlePressMock).toHaveBeenCalled();
        expect(onLinkPressMock).not.toHaveBeenCalled();
      });

      it("onLinkPress is called correctly for item with non-article link", () => {
        const onArticlePressMock = jest.fn();
        const onLinkPressMock = jest.fn();
        getDimensions.mockImplementation(() => ({
          width: 300,
          height: 500,
        }));

        const item = TestRenderer.create(
          <Item
            item={InTodaysEditionData[3]}
            onArticlePress={onArticlePressMock}
            onLinkPress={onLinkPressMock}
            orientation="portrait"
          />,
        );

        item.root.findByType(Item).props.onLinkPress();

        expect(onLinkPressMock).toHaveBeenCalled();
        expect(onArticlePressMock).not.toHaveBeenCalled();
      });
    });
  });
};
