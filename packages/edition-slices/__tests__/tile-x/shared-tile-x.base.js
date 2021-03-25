import "../mocks-tiles";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { testTile } from "../shared-tile-utils";
import { TileX } from "../../src/tiles";

export default () => {
  describe("tile x", () => {
    describe("portrait", () => {
      it("smallTablet", () => {
        testTile(TileX, editionBreakpoints.smallTablet, undefined, {
          orientation: "portrait",
        });
      });

      it("medium", () => {
        testTile(TileX, editionBreakpoints.medium, undefined, {
          orientation: "portrait",
        });
      });

      it("wide", () => {
        testTile(TileX, editionBreakpoints.wide, undefined, {
          orientation: "portrait",
        });
      });

      it("huge", () => {
        testTile(TileX, editionBreakpoints.huge, undefined, {
          orientation: "portrait",
        });
      });
    });
    describe("landscape", () => {
      it("smallTablet", () => {
        testTile(TileX, editionBreakpoints.smallTablet, undefined, {
          orientation: "landscape",
        });
      });

      it("medium", () => {
        testTile(TileX, editionBreakpoints.medium, undefined, {
          orientation: "landscape",
        });
      });

      it("wide", () => {
        testTile(TileX, editionBreakpoints.wide, undefined, {
          orientation: "landscape",
        });
      });

      it("huge", () => {
        testTile(TileX, editionBreakpoints.huge, undefined, {
          orientation: "landscape",
        });
      });
    });
  });
};
