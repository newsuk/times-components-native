import AttributedString, {
  isFontTag,
  isLinkTag,
  TypographySettings,
} from "./AttributedString";
import { Exclusion } from "./Exclusion";
import FontStorage from "./FontStorage";
import Point from "./Point";
import PositionedItem from "./PositionedItem";
import Span from "./Span";
import TextContainer from "./TextContainer";

import { NativeModules } from "react-native";

const getLeading = (text: AttributedString): number => {
  let leading = 0;
  for (const charAttrs of text.attributes) {
    for (const attr of charAttrs) {
      if (
        attr.tag === "FONT" &&
        attr.settings.lineHeight &&
        attr.settings.lineHeight > leading
      ) {
        leading = attr.settings.lineHeight;
      }
    }
  }
  return leading;
};

const getSettings = (text: AttributedString): TypographySettings => {
  return text.collapsedAttributes(0).filter(isFontTag)[0].settings;
};

export interface MeasuredItem {
  width: number;
  text: AttributedString;
}

async function layoutItemsFromString(
  s: AttributedString,
  measureFn: (word: AttributedString) => number,
): Promise<MeasuredItem[]> {
  const splits = s.split().filter((w) => w.length > 0);

  const spaceWidth = measureFn(
    new AttributedString(" ", [s.getTagsForIndex(0)]),
  );
  const isSpace = (word: AttributedString) => /\s/.test(word.charAt(0));

  return NativeModules.MeasureText.widths({
    texts: splits.map((s) => s.string),
    fontSize: 18,
    fontFamily: "TimesDigitalW04",
  }).then((results) => {
    const items = [];

    for (let i = 0; i < splits.length; i++) {
      const split = splits[i];
      if (split.string === "\n") {
        items.push({
          text: new AttributedString("\n", []),
          width: 0,
        });
      } else if (isSpace(split)) {
        items.push({
          text: new AttributedString(" ", split.attributes),
          width: spaceWidth,
        });
      }

      items.push({
        text: split,
        width: results[i],
      });
    }

    return items;
  });
}

export default class LayoutManager {
  public text: AttributedString;
  public containers: TextContainer[] = [];
  public positioned: PositionedItem[] = [];
  public exclusions: Exclusion[] = [];
  public processed: number = 0;

  constructor(
    text: AttributedString,
    containers: TextContainer[],
    exclusions: Exclusion[] = [],
  ) {
    this.text = text;
    this.containers = containers;
    this.exclusions = exclusions;
    this.measure = this.measure.bind(this);
  }

  public layout = async function (
    this: LayoutManager,
  ): Promise<PositionedItem[]> {
    const leading = getLeading(this.text);

    for (const childContainer of this.containers) {
      for (const exclusion of this.exclusions) {
        childContainer.addExclusion(
          exclusion.move(-childContainer.x, -childContainer.y),
        );
      }
    }

    const items = await layoutItemsFromString(this.text, this.measure);
    const result: PositionedItem[] = [];
    const containers = this.containers.slice();

    let container: TextContainer | undefined;
    let span: Span | false | undefined;
    let item: MeasuredItem | undefined;

    while (items.length || item) {
      if (!container) {
        container = containers.shift();
        if (!container) {
          break;
        }
      }
      if (!span) {
        span = container.nextSpan(leading);
        if (!span) {
          container = undefined;
          continue;
        }
      }
      if (!item) {
        item = items.shift();
        if (!item) {
          break;
        }
      }
      if (item.text.string === "\n") {
        span = undefined;
        item = undefined;
      } else if (span.end.x - span.start.x >= item.width) {
        const isLink = item.text.attributes[0].filter(isLinkTag).length > 0;
        if (item.text.string !== " " || isLink) {
          result.push({
            position: new Point(span.start.x, span.end.y),
            text: item.text,
          });
        }
        span.start.x += item.width;
        item = undefined;
      } else {
        span = undefined;
        if (item.text.string === " ") {
          item = undefined;
        }
      }
    }

    return result;
  };

  private measure(text: AttributedString): number {
    const settings = getSettings(text.attributes.length ? text : this.text);
    const font = FontStorage.getFont(settings);
    if (!settings.fontSize) {
      throw new Error("Invalid font size");
    }
    let advanceWidth = font.getAdvanceWidth(text.string, settings.fontSize);
    if (text.string === "Margaret") {
    }
    return advanceWidth;
  }
}
