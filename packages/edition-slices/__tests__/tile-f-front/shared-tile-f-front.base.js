import "../mocks-tiles";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { testTile } from "../shared-tile-utils";
import { TileFFront } from "../../src/tiles";

export default () => {
  describe("tile f front", () => {
    describe("landscape", () => {
      it("medium", () => {
        testTile(TileFFront, editionBreakpoints.medium, undefined, {
          orientation: "landscape",
        });
      });

      it("wide", () => {
        testTile(TileFFront, editionBreakpoints.wide, undefined, {
          orientation: "landscape",
        });
      });

      it("huge", () => {
        testTile(TileFFront, editionBreakpoints.huge, undefined, {
          orientation: "landscape",
        });
      });
    });

    describe("portrait", () => {
      it("medium", () => {
        testTile(TileFFront, editionBreakpoints.medium, undefined, {
          orientation: "portrait",
        });
      });

      it("wide", () => {
        testTile(TileFFront, editionBreakpoints.wide, undefined, {
          orientation: "portrait",
        });
      });

      it("huge", () => {
        testTile(TileFFront, editionBreakpoints.huge, undefined, {
          orientation: "portrait",
        });
      });
    });
  });
};
