import { FontStorage } from "@times-components-native/typeset";

export const getStringBounds = (fontSettings, string) => {
  const { fontSize } = fontSettings;
  const font = FontStorage.getFont(fontSettings);
  const glyphs = font.stringToGlyphs(string);
  let x1 = 0;
  let x2 = 0;
  let y1 = 0;
  let y2 = 0;
  glyphs.forEach((glyph) => {
    const bbox = glyph.getBoundingBox();
    x1 = Math.min(x1, bbox.x1);
    x2 = Math.max(x2, bbox.x2) + 100 * (glyphs.length - 1);
    y1 = Math.min(y1, bbox.y1);
    y2 = Math.max(y2, bbox.y2);
  });
  const width =
    (x2 * fontSize) / font.unitsPerEm - (x1 * fontSize) / font.unitsPerEm;
  const height =
    (y2 * fontSize) / font.unitsPerEm - (y1 * fontSize) / font.unitsPerEm;
  return { width, height };
};
