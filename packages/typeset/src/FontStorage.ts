import * as opentype from "opentype.js";
import { TypographySettings } from "./AttributedString";

class FontStorage {
  private fonts: Record<string, opentype.Font>;

  constructor() {
    this.fonts = {};
  }

  public getFont(settings: TypographySettings): opentype.Font {
    const style =
      settings.fontStyle === "italic"
        ? settings.fontStyle
        : settings.fontWeight;
    const name = `${settings.fontFamily}${
      style ? "-" + style[0].toUpperCase() + style.slice(1) : ""
    }`;

    if (name in this.fonts) {
      return this.fonts[name];
    } else {
      throw new Error(`Could not find font with name: ${name}`);
    }
  }

  public registerFont(name: string, font: () => opentype.Font): boolean {
    if (name in this.fonts) {
      throw new Error(`Font ${name} already registered`);
    }
    this.fonts[name] = font();
    return true;
  }
}

export default new FontStorage();
