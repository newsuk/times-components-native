import { getImage } from "../../src/utils";

describe("getImage", () => {
  it("should return empty object when cover.crops is empty array", () => {
    expect(getImage({ crops: [] })).toEqual({});
  });
  it("should return empty object when cover.crops is undefined", () => {
    expect(getImage({})).toEqual({});
  });
  it("should return image and ratio", () => {
    const exampleUrl =
      "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F9de951a0-5249-11e9-82c1-b5b0bbeb9bfd.jpg?crop=1050%2C1290%2C0%2C0";
    const cover = {
      crops: [
        {
          ratio: "35:43",
          url: exampleUrl,
        },
      ],
      id: "dummy-cover-id",
    };

    expect(getImage(cover)).toEqual({
      ratio: 35 / 43,
      url: exampleUrl,
    });
  });
});
