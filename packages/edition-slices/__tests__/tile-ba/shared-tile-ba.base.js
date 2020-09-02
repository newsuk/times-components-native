import "../mocks-tiles";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { testTile } from "../shared-tile-utils";
import { TileBA } from "../../src/tiles";

export default () => {
  describe("tile ba", () => {
    describe("portrait", () => {
      it("medium", () => {
        testTile(TileBA, editionBreakpoints.medium, undefined, {
          orientation: "portrait",
        });
      });

      it("wide", () => {
        testTile(TileBA, editionBreakpoints.wide, undefined, {
          orientation: "portrait",
        });
      });
    });
  });
};
