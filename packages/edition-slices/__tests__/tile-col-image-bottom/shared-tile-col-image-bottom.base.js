import "../mocks-tiles";
import { testTile, tile } from "../shared-tile-utils";
import { TileColImageBottom } from "../../src/tiles";
import { editionBreakpoints } from "@times-components-native/styleguide";

export default () => {
  describe("tile column with image bottom", () => {
    it("shows an image", () => {
      testTile(TileColImageBottom, editionBreakpoints.wide, {
        ...tile,
        config: {
          wide: {
            headline: { fontSize: 24 },
            image: { ratio: "4:5", orientation: "landscape" },
          },
        },
      });
    });

    it("shows portrait image when in portrait wide (ipad pro)", () => {
      testTile(
        TileColImageBottom,
        editionBreakpoints.wide,
        {
          ...tile,
          config: {
            wide: {
              headline: { fontSize: 24 },
              image: { ratio: "4:5", orientation: "landscape" },
              portrait: {
                ratio: "2:3",
              },
            },
          },
        },
        { orientation: "portrait" },
      );
    });

    it("smallTablet", () => {
      testTile(TileColImageBottom, editionBreakpoints.smallTablet, {
        ...tile,
        config: {
          smallTablet: {
            headline: { fontSize: 24 },
          },
        },
      });
    });

    it("medium", () => {
      testTile(TileColImageBottom, editionBreakpoints.medium, {
        ...tile,
        config: {
          medium: {
            headline: { fontSize: 24 },
          },
        },
      });
    });

    it("wide", () => {
      testTile(TileColImageBottom, editionBreakpoints.wide, {
        ...tile,
        config: {
          wide: {
            headline: { fontSize: 24 },
            summary: { length: 800 },
          },
        },
      });
    });

    it("huge", () => {
      testTile(TileColImageBottom, editionBreakpoints.huge, {
        ...tile,
        config: {
          huge: {
            headline: { fontSize: 24 },
            summary: { length: 800 },
          },
        },
      });
    });
  });
};
