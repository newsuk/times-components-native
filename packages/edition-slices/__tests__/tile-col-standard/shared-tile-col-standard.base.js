import "../mocks-tiles";
import { testTile, tile } from "../shared-tile-utils";
import { TileColStandard } from "../../src/tiles";
import { editionBreakpoints } from "@times-components-native/styleguide";

export default () => {
  describe("tile col standard", () => {
    it("shows an image", () => {
      testTile(TileColStandard, editionBreakpoints.wide, {
        ...tile,
        config: { showImage: true },
      });
    });

    it("medium", () => {
      testTile(TileColStandard, editionBreakpoints.medium);
    });

    it("wide", () => {
      testTile(TileColStandard, editionBreakpoints.wide);
    });

    it("huge", () => {
      testTile(TileColStandard, editionBreakpoints.huge);
    });
  });
};
