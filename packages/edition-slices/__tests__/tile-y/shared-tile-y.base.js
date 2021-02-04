import "../mocks-tiles";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { testTile } from "../shared-tile-utils";
import { TileY } from "../../src/tiles";

export default () => {
  describe("tile y", () => {
    describe("portrait", () => {
      it("medium", () => {
        testTile(TileY, editionBreakpoints.medium, undefined, {
          orientation: "portrait",
        });
      });

      it("wide", () => {
        testTile(TileY, editionBreakpoints.wide, undefined, {
          orientation: "portrait",
        });
      });

      it("huge", () => {
        testTile(TileY, editionBreakpoints.huge, undefined, {
          orientation: "portrait",
        });
      });
    });
    describe("landscape", () => {
      it("medium", () => {
        testTile(TileY, editionBreakpoints.medium, undefined, {
          orientation: "landscape",
        });
      });

      it("wide", () => {
        testTile(TileY, editionBreakpoints.wide, undefined, {
          orientation: "landscape",
        });
      });

      it("huge", () => {
        testTile(TileY, editionBreakpoints.huge, undefined, {
          orientation: "landscape",
        });
      });
    });
  });
};
