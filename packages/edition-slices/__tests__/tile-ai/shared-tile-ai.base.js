import "../mocks-tiles";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { testTile } from "../shared-tile-utils";
import { TileAI } from "../../src/tiles";

export default () => {
  describe("tile ai", () => {
    it("smallTablet", () => {
      testTile(TileAI, editionBreakpoints.smallTablet);
    });

    it("medium", () => {
      testTile(TileAI, editionBreakpoints.medium);
    });

    it("wide", () => {
      testTile(TileAI, editionBreakpoints.wide);
    });

    it("huge", () => {
      testTile(TileAI, editionBreakpoints.huge);
    });

    it("without breakpoint should be like medium", () => {
      testTile(TileAI);
    });
  });
};
