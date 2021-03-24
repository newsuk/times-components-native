import "../mocks-tiles";
import { testTile } from "../shared-tile-utils";
import { TileLeadSupplementLandscape } from "../../src/tiles";
import { editionBreakpoints } from "@times-components-native/styleguide";

export default () => {
  describe("tile lead supplement landscape", () => {
    it("smallTablet", () => {
      testTile(TileLeadSupplementLandscape, editionBreakpoints.smallTablet);
    });

    it("medium", () => {
      testTile(TileLeadSupplementLandscape, editionBreakpoints.medium);
    });

    it("wide", () => {
      testTile(TileLeadSupplementLandscape, editionBreakpoints.wide);
    });

    it("huge", () => {
      testTile(TileLeadSupplementLandscape, editionBreakpoints.huge);
    });
  });
};
