import { Puzzle } from "./types";
import UUID from "./mock-UUID";
import { TimesImage } from "@times-components-native/types";

class PuzzleImage {
  image: TimesImage;

  constructor() {
    this.image = {
      __typename: "Image",
      id: UUID(),
      crops: [],
      crop32: {
        url:
          "https://www.thetimes.co.uk/imageserver/image/%2Fpuzzles%2Ficons%2F33b27655-dcc9-421f-906f-b2b10dd26865.png?crop=1250%2C833%2C0%2C0",
      },
      crop11: null,
      crop23: null,
      crop169: null,
      crop45: null,
      crop54: null,
    };
  }

  get() {
    return this.image;
  }
}

class MockPuzzle {
  puzzle: Puzzle;

  constructor(hideOnMobile: boolean = false) {
    this.puzzle = {
      id: UUID(),
      title: "Times Concise medium No 7881",
      url: "/crossword/123",
      image: new PuzzleImage().get(),
      hideOnMobile,
    };
  }

  get() {
    return this.puzzle;
  }
}

export { PuzzleImage };
export default MockPuzzle;
