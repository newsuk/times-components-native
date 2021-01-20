import { getEmailPuzzlesUrl } from "../../src/utils";

describe("getEmailPuzzlesUrl", () => {
  it("should return the correct url when publishedTime is passed", () => {
    const publishedTime = "2020-01-06T12:00:00.000Z";
    expect(getEmailPuzzlesUrl(publishedTime)).toEqual(
      "https://times.formstack.com/forms/puzzles_06_01_2020",
    );
  });

  it("should return an empty string when publishedTime is falsey", () => {
    const publishedTime = "";
    expect(getEmailPuzzlesUrl(publishedTime)).toEqual("");
  });

  it("should return an empty string when publishedTime is not passed", () => {
    expect(getEmailPuzzlesUrl(undefined)).toEqual("");
  });
});
