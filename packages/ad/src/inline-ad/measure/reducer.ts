import { Reducer } from "react";
import { ContentMeasurements, Line } from "../types";

export const initialState: ContentMeasurements = {
  contents: {
    lines: {},
    heights: {},
  },
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

export type Action = SetInlineContentHeightAction | SetInlineContentLinesAction;

export const reducer: Reducer<ContentMeasurements, Action> = (
  state,
  action,
) => {
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
    default:
      return state;
  }
};
