import "../mocks-tiles";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { testTile } from "../shared-tile-utils";
import { TileAC } from "../../src/tiles";

export default () => {
  describe("tile ac", () => {
    it("smallTablet", () => {
      testTile(TileAC, editionBreakpoints.smallTablet);
    });

    it("medium", () => {
      testTile(TileAC, editionBreakpoints.medium);
    });

    it("wide", () => {
      testTile(TileAC, editionBreakpoints.wide);
    });

    it("huge", () => {
      testTile(TileAC, editionBreakpoints.huge);
    });

    it("without breakpoint should be like medium", () => {
      testTile(TileAC);
    });
  });
};
