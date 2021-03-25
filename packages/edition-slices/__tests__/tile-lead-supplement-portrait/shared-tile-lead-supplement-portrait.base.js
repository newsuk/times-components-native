import "../mocks-tiles";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { testTile } from "../shared-tile-utils";
import { TileLeadSupplementPortrait } from "../../src/tiles";

export default () => {
  describe("tile lead supplement portrait", () => {
    it("smallTablet", () => {
      testTile(TileLeadSupplementPortrait, editionBreakpoints.smallTablet);
    });

    it("medium", () => {
      testTile(TileLeadSupplementPortrait, editionBreakpoints.medium);
    });

    it("wide", () => {
      testTile(TileLeadSupplementPortrait, editionBreakpoints.wide);
    });
  });
};
