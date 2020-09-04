import "../mocks-tiles";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { testTile } from "../shared-tile-utils";
import { TileAW } from "../../src/tiles";

export default () => {
  describe("tile aw", () => {
    describe("landscape", () => {
      it("medium", () => {
        testTile(TileAW, editionBreakpoints.medium, undefined, {
          orientation: "landscape",
        });
      });

      it("wide", () => {
        testTile(TileAW, editionBreakpoints.wide, undefined, {
          orientation: "landscape",
        });
      });

      it("huge", () => {
        testTile(TileAW, editionBreakpoints.huge, undefined, {
          orientation: "landscape",
        });
      });
    });
  });
};
