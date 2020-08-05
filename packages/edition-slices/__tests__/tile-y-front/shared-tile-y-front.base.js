import "../mocks-tiles";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { testTile } from "../shared-tile-utils";
import { TileYFront } from "../../src/tiles";

export default () => {
  describe("tile y front", () => {
    describe("landscape", () => {
      it("small", () => {
        testTile(TileYFront, editionBreakpoints.small, undefined, {
          orientation: "landscape",
        });
      });

      it("medium", () => {
        testTile(TileYFront, editionBreakpoints.medium, undefined, {
          orientation: "landscape",
        });
      });

      it("wide", () => {
        testTile(TileYFront, editionBreakpoints.wide, undefined, {
          orientation: "landscape",
        });
      });

      it("huge", () => {
        testTile(TileYFront, editionBreakpoints.huge, undefined, {
          orientation: "landscape",
        });
      });

      it("without breakpoint should be like small", () => {
        testTile(TileYFront, undefined, undefined, {
          orientation: "landscape",
        });
      });
    });

    describe("portrait", () => {
      it("small", () => {
        testTile(TileYFront, editionBreakpoints.small, undefined, {
          orientation: "portrait",
        });
      });

      it("medium", () => {
        testTile(TileYFront, editionBreakpoints.medium, undefined, {
          orientation: "portrait",
        });
      });

      it("wide", () => {
        testTile(TileYFront, editionBreakpoints.wide, undefined, {
          orientation: "portrait",
        });
      });

      it("huge", () => {
        testTile(TileYFront, editionBreakpoints.huge, undefined, {
          orientation: "portrait",
        });
      });

      it("without breakpoint should be like small", () => {
        testTile(TileYFront, undefined, undefined, {
          orientation: "portrait",
        });
      });
    });
  });
};
