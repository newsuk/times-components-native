import "../mocks-tiles";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { testTile } from "../shared-tile-utils";
import { TileBC } from "../../src/tiles";

export default () => {
  describe("tile bc", () => {
    it("without breakpoint", () => {
      testTile(TileBC);
    });

    it("smallTablet", () => {
      testTile(TileBC, editionBreakpoints.smallTablet, undefined);
    });

    it("medium", () => {
      testTile(TileBC, editionBreakpoints.medium, undefined);
    });

    it("wide", () => {
      testTile(TileBC, editionBreakpoints.wide, undefined);
    });

    it("huge", () => {
      testTile(TileBC, editionBreakpoints.huge, undefined);
    });
  });
};
