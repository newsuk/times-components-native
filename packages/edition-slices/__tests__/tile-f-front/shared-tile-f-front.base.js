import "../mocks-tiles";
import { TileFFront } from "../../src/tiles";
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

const testFrontTile = (orientation, width, height = 500) => {
  getDimensions.mockImplementation(() => ({
    width,
    height,
  }));

  const tree = TestRenderer.create(
    <TileFFront onPress={() => null} tile={tile} orientation={orientation} />,
  );
  expect(tree).toMatchSnapshot();
};

export default () => {
  describe("tile f front", () => {
    describe("landscape", () => {
      it("1024", () => {
        testFrontTile("landscape", 1024);
      });

      it("1080", () => {
        testFrontTile("landscape", 1080);
      });

      it("1194", () => {
        testFrontTile("landscape", 1194);
      });

      it("1366", () => {
        testFrontTile("landscape", 1366);
      });
    });

    describe("portrait", () => {
      it("768", () => {
        testFrontTile("portrait", 768);
      });

      it("810", () => {
        testFrontTile("portrait", 810);
      });

      describe("834", () => {
        it("0.75 ratio", () => {
          testFrontTile("portrait", 834, 1112);
        });
        it("less than 0.75 ratio", () => {
          testFrontTile("portrait", 834, 1194);
        });
      });

      it("1024", () => {
        testFrontTile("portrait", 1024);
      });
    });
  });
};
