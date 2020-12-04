export const superscripts = {
  "0": "⁰",
  "1": "¹",
  "2": "²",
  "3": "³",
  "4": "⁴",
  "5": "⁵",
  "6": "⁶",
  "7": "⁷",
  "8": "⁸",
  "9": "⁹",
  "+": "⁺",
  "-": "⁻",
  "=": "⁼",
  "(": "⁽",
  ")": "⁾",
  n: "ⁿ",
  i: "ⁱ",
};

export const subscripts = {
  "0": "₀",
  "1": "₁",
  "2": "₂",
  "3": "₃",
  "4": "₄",
  "5": "₅",
  "6": "₆",
  "7": "₇",
  "8": "₈",
  "9": "₉",
  "+": "₊",
  "-": "₋",
  "=": "₌",
  "(": "₍",
  ")": "₎",
  a: "ₐ",
  e: "ₑ",
  o: "ₒ",
  x: "ₓ",
};

type Chart = typeof subscripts | typeof superscripts;

function parse(input: string | number) {
  return (input + "").split("");
}

function isValidInput(input: string): input is keyof Chart {
  return input in superscripts || input in subscripts;
}

function to(chart: Chart) {
  return function (input: string) {
    const lowerCasedInput = input.toLowerCase();
    if (isValidInput(lowerCasedInput)) {
      return chart[lowerCasedInput];
    }
    return input;
  };
}

export const toSuperscript = function (input: string | number) {
  return parse(input).map(to(superscripts)).join("");
};

export const toSubscript = function (input: string | number) {
  return parse(input).map(to(subscripts)).join("");
};
