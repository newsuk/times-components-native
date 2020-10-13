import "../mocks-tiles";
import { TileBFront } from "../../src/tiles";
import TestRenderer from "react-test-renderer";
import React from "react";
import { mockEditionSlice } from "@times-components-native/fixture-generator";
import { getDimensions } from "@times-components-native/utils";

jest.mock("@times-components-native/utils", () => {
  const actualUtils = jest.requireActual("../../../utils");

  return {
    ...actualUtils,
    getDimensions: jest.fn(),
  };
});

export const tile = mockEditionSlice(1).items[0];

const testFrontTile = (width, orientation) => {
  getDimensions.mockImplementation(() => ({
    width: width,
    height: 500,
  }));

  const tree = TestRenderer.create(
    <TileBFront onPress={() => null} tile={tile} orientation={orientation} />,
  );
  expect(tree).toMatchSnapshot();
};

export default () => {
  describe("tile b front", () => {
    describe("landscape", () => {
      it("1024", () => {
        testFrontTile("1024", "landscape");
      });

      it("1080", () => {
        testFrontTile("1080", "landscape");
      });

      it("1194", () => {
        testFrontTile("1194", "landscape");
      });

      it("1366", () => {
        testFrontTile("1366", "landscape");
      });
    });

    describe("portrait", () => {
      it("768", () => {
        testFrontTile("768", "portrait");
      });

      it("810", () => {
        testFrontTile("810", "portrait");
      });

      it("834", () => {
        testFrontTile("834", "portrait");
      });

      it("1024", () => {
        testFrontTile("1024", "portrait");
      });
    });
  });
};
