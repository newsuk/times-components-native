import "../mocks-tiles";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { testTile } from "../shared-tile-utils";
import { TileAR } from "../../src/tiles";

export default () => {
  describe("tile ar", () => {
    it("smallTablet", () => {
      testTile(TileAR, editionBreakpoints.smallTablet);
    });

    it("medium", () => {
      testTile(TileAR, editionBreakpoints.medium);
    });

    it("wide", () => {
      testTile(TileAR, editionBreakpoints.wide);
    });

    it("huge", () => {
      testTile(TileAR, editionBreakpoints.huge);
    });

    it("without breakpoint should be like medium", () => {
      testTile(TileAR);
    });
  });
};
