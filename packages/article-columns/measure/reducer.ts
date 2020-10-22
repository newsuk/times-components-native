import { Reducer } from "react";
import { Measurements } from "@times-components-native/types";
import { Line } from "../types";

export const initialState: Measurements = {
  contents: {
    lines: {},
    heights: {},
  },
  bylineHeight: null,
  bylineMargin: null,
};

interface SetContentHeightAction {
  type: "SET_CONTENT_HEIGHT";
  id: string;
  payload: number;
}

interface SetContentLinesAction {
  type: "SET_CONTENT_LINES";
  id: string;
  payload: Line[];
}

interface SetBylineAction {
  type: "SET_BYLINE_HEIGHT";
  height: number;
  margin: number;
}

export type Action =
  | SetContentHeightAction
  | SetContentLinesAction
  | SetBylineAction;

export const reducer: Reducer<Measurements, Action> = (state, action) => {
  switch (action.type) {
    case "SET_CONTENT_HEIGHT":
      return {
        ...state,
        contents: {
          ...state.contents,
          heights: { ...state.contents.heights, [action.id]: action.payload },
        },
      };
    case "SET_CONTENT_LINES":
      return {
        ...state,
        contents: {
          ...state.contents,
          lines: { ...state.contents.lines, [action.id]: action.payload },
        },
      };
    case "SET_BYLINE_HEIGHT":
      return {
        ...state,
        bylineHeight: action.height,
        bylineMargin: action.margin,
      };
    default:
      return state;
  }
};
