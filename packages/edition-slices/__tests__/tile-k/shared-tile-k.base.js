import "../mocks-tiles";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { testTile } from "../shared-tile-utils";
import { TileK } from "../../src/tiles";

export default () => {
  describe("tile k", () => {
    it("small", () => {
      testTile(TileK, editionBreakpoints.small);
    });

    it("smallTablet", () => {
      testTile(TileK, editionBreakpoints.smallTablet);
    });

    it("medium", () => {
      testTile(TileK, editionBreakpoints.medium);
    });

    it("wide", () => {
      testTile(TileK, editionBreakpoints.wide);
    });

    it("huge", () => {
      testTile(TileK, editionBreakpoints.huge);
    });

    it("without breakpoint should be like small", () => {
      testTile(TileK);
    });
  });
};
