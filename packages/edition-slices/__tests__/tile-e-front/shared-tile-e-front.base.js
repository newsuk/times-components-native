import "../mocks-tiles";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { testTile } from "../shared-tile-utils";
import { TileEFront } from "../../src/tiles";

export default () => {
  describe("tile e front", () => {
    describe("landscape", () => {
      it("medium", () => {
        testTile(TileEFront, editionBreakpoints.medium, undefined, {
          orientation: "landscape",
        });
      });

      it("wide", () => {
        testTile(TileEFront, editionBreakpoints.wide, undefined, {
          orientation: "landscape",
        });
      });

      it("huge", () => {
        testTile(TileEFront, editionBreakpoints.huge, undefined, {
          orientation: "landscape",
        });
      });

      it("without breakpoint should be like small", () => {
        testTile(TileEFront, undefined, undefined, {
          orientation: "landscape",
        });
      });
    });

    describe("portrait", () => {
      it("medium", () => {
        testTile(TileEFront, editionBreakpoints.medium, undefined, {
          orientation: "portrait",
        });
      });

      it("wide", () => {
        testTile(TileEFront, editionBreakpoints.wide, undefined, {
          orientation: "portrait",
        });
      });

      it("huge", () => {
        testTile(TileEFront, editionBreakpoints.huge, undefined, {
          orientation: "portrait",
        });
      });

      it("without breakpoint should be like small", () => {
        testTile(TileEFront, undefined, undefined, {
          orientation: "portrait",
        });
      });
    });
  });
};
