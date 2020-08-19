import "../mocks-tiles";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { testTile } from "../shared-tile-utils";
import { TileBFront } from "../../src/tiles";

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
};
