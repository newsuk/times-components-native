export interface Byline {
  children: {
    attributes: {
      value: string;
      children: any[];
      name: string;
    };
  }[];
  name: string;
}

export interface Hit {
  algoliaData: {
    publishedTimestamp: number;
    recencyIndex: number;
  };
  byline: Byline[];
  commentsEnabled: boolean;
  commercialSectionTags: null | any;
  commercialTags: string[];
  content: string;
  date_timestamp: number;
  flags: any[];
  hasVideo: boolean;
  headline: string;
  id: string;
  keywords: string[];
  label: string;
  leadAsset: {
    caption: string;
    credits: string;
    crop: {
      ratio: string;
      url: string;
    };
    id: string;
    title: string;
  };
  objectID: string;
  publicationName?: "sundaytimes" | "times" | null;
  publishedTime: string;
  section: string;
  shortHeadline: string;
  url: string;
  _position: number;
  _snippetResult?:
    | {
        content:
          | {
              fullyHighlighted: boolean;
              matchLevel: string;
              matchedWords: string[];
              value: string;
            }
          | string;
      }
    | any;
  _highlightResult?: {
    byline: {
      children: {
        attributes: {
          value: {
            matchLevel: string;
            matchedWords: string[];
            value: string;
          };
        };
      }[];
    };
    content: {
      fullyHighlighted: boolean;
      matchLevel: string;
      matchedWords: string[];
      value: string;
    };
    headline: {
      matchLevel: string;
      matchedWords: string[];
      value: string;
    };
    label: {
      fullyHighlighted: boolean;
      matchLevel: string;
      matchedWords: string[];
      value: string;
    };
  };
}
