import "../mocks-tiles";
import { testTile, tile } from "../shared-tile-utils";
import { TileVerticalA } from "../../src/tiles";
import { editionBreakpoints } from "@times-components-native/styleguide";

export default () => {
  describe("tile vertical a", () => {
    it("shows an image", () => {
      testTile(TileVerticalA, editionBreakpoints.wide, {
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
        TileVerticalA,
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
      testTile(TileVerticalA, editionBreakpoints.medium, {
        ...tile,
        config: {
          medium: {
            headline: { fontSize: 24 },
          },
        },
      });
    });

    it("wide", () => {
      testTile(TileVerticalA, editionBreakpoints.wide, {
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
      testTile(TileVerticalA, editionBreakpoints.huge, {
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
