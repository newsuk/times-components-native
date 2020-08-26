import "../mocks-tiles";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { testTile } from "../shared-tile-utils";
import { TileAV } from "../../src/tiles";

export default () => {
  describe("tile as", () => {
    it("medium", () => {
      testTile(TileAV, editionBreakpoints.medium);
    });

    it("wide", () => {
      testTile(TileAV, editionBreakpoints.wide);
    });

    it("huge", () => {
      testTile(TileAV, editionBreakpoints.huge);
    });
  });
};
