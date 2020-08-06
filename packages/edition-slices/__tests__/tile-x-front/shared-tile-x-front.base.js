import "../mocks-tiles";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { testTile } from "../shared-tile-utils";
import { TileXFront } from "../../src/tiles";

export default () => {
  describe("tile x front", () => {
    describe("landscape", () => {
      it("medium", () => {
        testTile(TileXFront, editionBreakpoints.medium, undefined, {
          orientation: "landscape",
        });
      });

      it("wide", () => {
        testTile(TileXFront, editionBreakpoints.wide, undefined, {
          orientation: "landscape",
        });
      });

      it("huge", () => {
        testTile(TileXFront, editionBreakpoints.huge, undefined, {
          orientation: "landscape",
        });
      });
    });

    describe("portrait", () => {
      it("medium", () => {
        testTile(TileXFront, editionBreakpoints.medium, undefined, {
          orientation: "portrait",
        });
      });

      it("wide", () => {
        testTile(TileXFront, editionBreakpoints.wide, undefined, {
          orientation: "portrait",
        });
      });

      it("huge", () => {
        testTile(TileXFront, editionBreakpoints.huge, undefined, {
          orientation: "portrait",
        });
      });
    });
  });
};
