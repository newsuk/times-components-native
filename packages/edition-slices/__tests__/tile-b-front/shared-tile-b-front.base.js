import "../mocks-tiles";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { testTile } from "../shared-tile-utils";
import { TileBFront } from "../../src/tiles";
import TestRenderer from "react-test-renderer";
import React from "react";
import { MockArticle } from "@times-components-native/fixture-generator";

export default () => {
  describe("tile b front", () => {
    describe("landscape", () => {
      it("medium", () => {
        testTile(TileBFront, editionBreakpoints.medium, undefined, {
          orientation: "landscape",
        });
      });

      it("wide", () => {
        testTile(TileBFront, editionBreakpoints.wide, undefined, {
          orientation: "landscape",
        });
      });

      it("huge", () => {
        testTile(TileBFront, editionBreakpoints.huge, undefined, {
          orientation: "landscape",
        });
      });
    });

    describe("portrait", () => {
      it("medium", () => {
        testTile(TileBFront, editionBreakpoints.medium, undefined, {
          orientation: "portrait",
        });
      });

      it("wide", () => {
        testTile(TileBFront, editionBreakpoints.wide, undefined, {
          orientation: "portrait",
        });
      });

      it("huge", () => {
        testTile(TileBFront, editionBreakpoints.huge, undefined, {
          orientation: "portrait",
        });
      });
    });
  });

  it("renders maincomment with left aligned text", () => {
    const article = new MockArticle().setTemplate("maincomment").get();
    const output = TestRenderer.create(
      <TileBFront onPress={() => null} tile={{ article }} />,
    );
    expect(output).toMatchSnapshot();
  });
};
