import lineHeightMapping from "./mapping";

const lineHeights = (scale) => ({ font, fontSize }) => {
  const mapping = lineHeightMapping({ scale });
  return mapping[font][fontSize];
};

export default lineHeights;
