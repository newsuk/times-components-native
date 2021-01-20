import { isSupplementSection } from "../../src/utils";

describe("isSupplementSection", () => {
  it("should return true for a known supplement section", () => {
    expect(isSupplementSection("Times2")).toBeTruthy;
  });

  it("should return false for a unknown supplement section", () => {
    expect(isSupplementSection("foo")).toBeFalsy;
  });
});
