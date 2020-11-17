import { Reducer } from "react";

import { Measurements } from "@times-components-native/types";
import { Line } from "../types";

export const initialState: Measurements = {
  contents: {
    lines: {},
    heights: {},
  },
  itemHeight: null,
};

interface SetInlineContentHeightAction {
  type: "SET_INLINE_CONTENT_HEIGHT";
  id: string;
  payload: number;
}

interface SetInlineContentLinesAction {
  type: "SET_INLINE_CONTENT_LINES";
  id: string;
  payload: Line[];
}

interface SetInlineItemHeightAction {
  type: "SET_INLINE_ITEM_HEIGHT";
  height: number;
}

export type Action =
  | SetInlineContentHeightAction
  | SetInlineContentLinesAction
  | SetInlineItemHeightAction;

export const reducer: Reducer<Measurements, Action> = (state, action) => {
  switch (action.type) {
    case "SET_INLINE_CONTENT_HEIGHT":
      return {
        ...state,
        contents: {
          ...state.contents,
          heights: { ...state.contents.heights, [action.id]: action.payload },
        },
      };
    case "SET_INLINE_CONTENT_LINES":
      return {
        ...state,
        contents: {
          ...state.contents,
          lines: { ...state.contents.lines, [action.id]: action.payload },
        },
      };
    case "SET_INLINE_ITEM_HEIGHT":
      return {
        ...state,
        itemHeight: action.height,
      };
    default:
      return state;
  }
};
