interface TextContentChild {
  name: "text";
  children: ParagraphContentChild[];
  attributes: {
    value: string;
  };
}

interface LinkContentChild {
  name: "link";
  attributes?: any;
  children: ParagraphContentChild[];
}

interface ItalicContentChild {
  name: "italic";
  attributes?: any;
  children: ParagraphContentChild[];
}

interface BoldContentChild {
  name: "bold";
  attributes?: any;
  children: ParagraphContentChild[];
}

interface BreakContentChild {
  name: "break";
  attributes?: any;
  children: ParagraphContentChild[];
}

interface InvisibleContentChild {
  name: "invisible";
  children: ParagraphContentChild[];
  attributes: {
    value: string;
  };
}

export type ParagraphContentChild =
  | TextContentChild
  | ItalicContentChild
  | LinkContentChild
  | BreakContentChild
  | BoldContentChild
  | InvisibleContentChild;

export interface ContentMetadata {
  id?: string;
  split?: boolean;
}

export interface ParagraphContent extends ContentMetadata {
  name: "paragraph";
  children: ParagraphContentChild[];
  attributes?: {
    tab?: boolean;
    split?: boolean;
  };
}

interface InteractiveContent extends ContentMetadata {
  name: "interactive";
  children: [];
}

export interface ImageContent extends ContentMetadata {
  name: "image";
  attributes: {
    display: string;
    caption: string;
    credits: string;
    url: string;
    relativeHorizontalOffset: number;
    relativeVerticalOffset: number;
    relativeWidth: number;
    relativeHeight: number;
    ratio: string;
  };
  children: [];
}

interface AdContent extends ContentMetadata {
  name: "ad";
  children: [];
}

export type ArticleContent =
  | ParagraphContent
  | InteractiveContent
  | ImageContent
  | AdContent;

export type SliceName =
  | "LeadOneAndOneSlice"
  | "LeadOneAndFourSlice"
  | "TopSecondaryFourSlice"
  | "SecondaryFourSlice"
  | "CommentLeadAndCartoonSlice"
  | "DailyUniversalRegister"
  | "LeadersSlice"
  | "LeadOneFullWidthSlice"
  | "LeadTwoNoPicAndTwoSlice"
  | "Puzzle"
  | "SecondaryOneAndColumnistSlice"
  | "SecondaryOneAndFourSlice"
  | "SecondaryOneSlice"
  | "SecondaryTwoAndTwoSlice"
  | "SecondaryTwoNoPicAndTwoSlice"
  | "StandardSlice"
  | "TwoPicAndSixNoPicSlice"
  | "LeadTwoFrontSlice"
  | "LeadOneAndOneFrontSlice"
  | "LeadOneFullWidthFrontSlice"
  | "TopSecondaryTwoAndTwoSlice"
  | "TopSecondaryTwoNoPicAndTwoSlice"
  | "SectionAd";
