import "../mocks-tiles";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { testTile } from "../shared-tile-utils";
import { TileAZ } from "../../src/tiles";

export default () => {
  describe("tile az", () => {
    describe("portrait", () => {
      it("medium", () => {
        testTile(TileAZ, editionBreakpoints.medium, undefined, {
          orientation: "portrait",
        });
      });

      it("wide", () => {
        testTile(TileAZ, editionBreakpoints.wide, undefined, {
          orientation: "portrait",
        });
      });
    });
  });
};
