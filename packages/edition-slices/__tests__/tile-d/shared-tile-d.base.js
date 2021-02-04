import "../mocks-tiles";
import { testTile } from "../shared-tile-utils";
import { TileD } from "../../src/tiles";

export default () => {
  describe("tile d", () => {
    it("all breakpoints", () => {
      testTile(TileD);
    });
  });
};
