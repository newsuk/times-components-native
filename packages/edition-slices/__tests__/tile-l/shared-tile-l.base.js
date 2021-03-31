import "../mocks-tiles";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { testTile } from "../shared-tile-utils";
import { TileL } from "../../src/tiles";

export default () => {
  describe("tile l", () => {
    it("small", () => {
      testTile(TileL, editionBreakpoints.small);
    });

    it("smallTablet", () => {
      testTile(TileL, editionBreakpoints.smallTablet);
    });

    it("medium", () => {
      testTile(TileL, editionBreakpoints.medium);
    });

    it("wide", () => {
      testTile(TileL, editionBreakpoints.wide);
    });

    it("huge", () => {
      testTile(TileL, editionBreakpoints.huge);
    });

    it("without breakpoint should be like small", () => {
      testTile(TileL);
    });
  });
};
