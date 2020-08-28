import "../mocks-tiles";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { testTile } from "../shared-tile-utils";
import { TileAY } from "../../src/tiles";

export default () => {
  describe("tile ar", () => {
    it("medium", () => {
      testTile(TileAY, editionBreakpoints.medium);
    });

    it("wide", () => {
      testTile(TileAY, editionBreakpoints.wide);
    });

    it("huge", () => {
      testTile(TileAY, editionBreakpoints.huge);
    });

    it("without breakpoint should be like medium", () => {
      testTile(TileAY);
    });
  });
};
