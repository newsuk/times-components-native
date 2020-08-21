import "../mocks-tiles";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { testTile } from "../shared-tile-utils";
import { TileAU } from "../../src/tiles";

export default () => {
  describe("tile au", () => {
    it("wide", () => {
      testTile(TileAU, editionBreakpoints.wide);
    });
  });
};
