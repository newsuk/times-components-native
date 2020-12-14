import { subscripts, superscripts, toSubscript, toSuperscript } from "../";

describe("should subscript characters", () => {
  it("should subscript one letter", () => {
    expect(toSubscript("0")).toBe(subscripts["0"]);
    expect(toSubscript("1")).toBe(subscripts["1"]);
  });

  it("should subscript one number", () => {
    expect(toSubscript(0)).toBe(subscripts[0]);
    expect(toSubscript(1)).toBe(subscripts[1]);
  });

  it("should return the input if not in table", () => {
    expect(toSubscript("F")).toBe("F");
    expect(toSubscript("f")).toBe("f");
    expect(toSubscript("GhJ")).toBe("GhJ");
  });

  it("should work with lowercase and uppercase input", () => {
    expect(toSubscript("E")).toBe(subscripts["e"]);
    expect(toSubscript("e")).toBe(subscripts["e"]);
  });

  it("should work with strings", () => {
    expect(toSubscript("123")).toBe(
      `${subscripts["1"]}${subscripts["2"]}${subscripts["3"]}`,
    );
  });
});

describe("should superscript characters", () => {
  it("should superscript one letter", () => {
    expect(toSuperscript("0")).toBe(superscripts["0"]);
    expect(toSuperscript("1")).toBe(superscripts["1"]);
  });

  it("should subscript one number", () => {
    expect(toSuperscript(2)).toBe(superscripts[2]);
    expect(toSuperscript(3)).toBe(superscripts[3]);
  });

  it("should return the input if not in table", () => {
    expect(toSuperscript("F")).toBe("F");
    expect(toSuperscript("f")).toBe("f");
    expect(toSubscript("GhJ")).toBe("GhJ");
  });

  it("should work with lowercase and uppercase input", () => {
    expect(toSuperscript("N")).toBe(superscripts["n"]);
    expect(toSuperscript("n")).toBe(superscripts["n"]);
  });

  it("should work with strings", () => {
    expect(toSuperscript("123")).toBe(
      `${superscripts["1"]}${superscripts["2"]}${superscripts["3"]}`,
    );
  });
});
