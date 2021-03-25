import "../mocks-tiles";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { testTile } from "../shared-tile-utils";
import { TileE } from "../../src/tiles";

export default () => {
  describe("tile e", () => {
    describe("portrait", () => {
      it("small", () => {
        testTile(TileE, editionBreakpoints.small, undefined, {
          orientation: "portrait",
        });
      });

      it("smallTablet", () => {
        testTile(TileE, editionBreakpoints.smallTablet, undefined, {
          orientation: "portrait",
        });
      });

      it("medium", () => {
        testTile(TileE, editionBreakpoints.medium, undefined, {
          orientation: "portrait",
        });
      });

      it("wide", () => {
        testTile(TileE, editionBreakpoints.wide, undefined, {
          orientation: "portrait",
        });
      });

      it("huge", () => {
        testTile(TileE, editionBreakpoints.huge, undefined, {
          orientation: "portrait",
        });
      });
    });
    describe("landscape", () => {
      it("small", () => {
        testTile(TileE, editionBreakpoints.small, undefined, {
          orientation: "landscape",
        });
      });

      it("medium", () => {
        testTile(TileE, editionBreakpoints.medium, undefined, {
          orientation: "landscape",
        });
      });

      it("wide", () => {
        testTile(TileE, editionBreakpoints.wide, undefined, {
          orientation: "landscape",
        });
      });

      it("huge", () => {
        testTile(TileE, editionBreakpoints.huge, undefined, {
          orientation: "landscape",
        });
      });
    });
  });
};
