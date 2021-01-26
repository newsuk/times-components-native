import "../mocks-tiles";
import { testTile, tile } from "../shared-tile-utils";
import { TileColWithImageBottom } from "../../src/tiles";
import { editionBreakpoints } from "@times-components-native/styleguide";

export default () => {
  describe("tile column with image bottom", () => {
    it("shows an image", () => {
      testTile(TileColWithImageBottom, editionBreakpoints.wide, {
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
        TileColWithImageBottom,
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

    it("medium", () => {
      testTile(TileColWithImageBottom, editionBreakpoints.medium, {
        ...tile,
        config: {
          medium: {
            headline: { fontSize: 24 },
          },
        },
      });
    });

    it("wide", () => {
      testTile(TileColWithImageBottom, editionBreakpoints.wide, {
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
      testTile(TileColWithImageBottom, editionBreakpoints.huge, {
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
