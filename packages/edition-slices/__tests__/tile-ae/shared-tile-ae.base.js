import "../mocks-tiles";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { testTile } from "../shared-tile-utils";
import { TileAE } from "../../src/tiles";

export default () => {
  describe("tile ae", () => {
    it("smallTablet", () => {
      testTile(TileAE, editionBreakpoints.smallTablet);
    });

    it("medium", () => {
      testTile(TileAE, editionBreakpoints.medium);
    });

    it("wide", () => {
      testTile(TileAE, editionBreakpoints.wide);
    });

    it("huge", () => {
      testTile(TileAE, editionBreakpoints.huge);
    });

    it("without breakpoint should be like medium", () => {
      testTile(TileAE);
    });
  });
};
