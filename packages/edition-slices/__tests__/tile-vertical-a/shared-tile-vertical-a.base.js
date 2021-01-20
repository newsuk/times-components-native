import "../mocks-tiles";
import { testTile, tile } from "../shared-tile-utils";
import { TileVerticalA } from "../../src/tiles";
import { editionBreakpoints } from "@times-components-native/styleguide";

export default () => {
  describe("tile vertical a", () => {
    it("shows an image", () => {
      testTile(TileVerticalA, editionBreakpoints.wide, {
        ...tile,
        config: { showImage: true },
      });
    });

    it("medium", () => {
      testTile(TileVerticalA, editionBreakpoints.wide);
    });

    it("wide", () => {
      testTile(TileVerticalA, editionBreakpoints.wide);
    });

    it("huge", () => {
      testTile(TileVerticalA, editionBreakpoints.huge);
    });
  });
};
