import "../mocks-tiles";
import { testTile } from "../shared-tile-utils";
import { TileU } from "../../src/tiles";
import { editionBreakpoints } from "@times-components-native/styleguide";

export default () => {
  describe("tile u", () => {
    it("without breakpoint", () => {
      testTile(TileU);
    });

    it("with headline style", () => {
      testTile(TileU, editionBreakpoints.medium, undefined, {
        headlineStyle: { backgroundColor: "red" },
      });
    });
  });
};
