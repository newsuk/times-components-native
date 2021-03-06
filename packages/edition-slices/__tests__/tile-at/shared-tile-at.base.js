import "../mocks-tiles";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { testTile } from "../shared-tile-utils";
import { TileAT } from "../../src/tiles";

export default () => {
  describe("tile at", () => {
    it("smallTablet", () => {
      testTile(TileAT, editionBreakpoints.smallTablet);
    });

    it("medium", () => {
      testTile(TileAT, editionBreakpoints.medium);
    });
  });
};
