import "../mocks-tiles";
import { testTile } from "../shared-tile-utils";
import { TileBE } from "../../src/tiles";

export default () => {
  describe("tile be", () => {
    it("without breakpoint", () => {
      testTile(TileBE);
    });
  });
};
