type ContentsLine = {
  text: string;
};

export interface Measurements {
  contents: {
    lines: { [key: string]: ContentsLine[] };
    heights: { [key: string]: number };
  };
  bylineHeight?: number | null;
  bylineMargin?: number | null;
  itemHeight?: number | null;
}
