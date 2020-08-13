import {
  initialState,
  reducer,
} from "@times-components-native/article-columns/measure/reducer";
import { ArticleMeasurements } from "@times-components-native/article-columns/types";

describe("reducer", () => {
  it("returns state when unrecognised action provided", () => {
    // @ts-ignore deliberately setting invalid action
    const nextState = reducer(initialState, { type: "unknown" });

    expect(nextState).toEqual(initialState);
  });

  describe('when dispatching the "SET_CONTENT_HEIGHT" action', () => {
    it("sets the measured height of a content item", () => {
      const nextState = reducer(initialState, {
        id: "someId",
        payload: 5,
        type: "SET_CONTENT_HEIGHT",
      });

      expect(nextState).toEqual({
        contents: {
          heights: {
            someId: 5,
          },
          lines: {},
        },
        bylineHeight: null,
      });
    });

    it("updates the measured height of a content item", () => {
      const prevState: ArticleMeasurements = {
        ...initialState,
        contents: { heights: { someId: 1 }, lines: {} },
      };

      const nextState = reducer(prevState, {
        id: "someId",
        payload: 5,
        type: "SET_CONTENT_HEIGHT",
      });

      expect(nextState).toEqual({
        contents: {
          heights: {
            someId: 5,
          },
          lines: {},
        },
        bylineHeight: null,
      });
    });
  });

  describe('when dispatching the "SET_CONTENT_LINES" action', () => {
    it("sets the measured lines of a content item", () => {
      const nextState = reducer(initialState, {
        id: "someId",
        payload: [{ text: "some text" }],
        type: "SET_CONTENT_LINES",
      });

      expect(nextState).toEqual({
        contents: {
          heights: {},
          lines: { someId: [{ text: "some text" }] },
        },
        bylineHeight: null,
      });
    });

    it("updates the measured lines of a content item", () => {
      const prevState: ArticleMeasurements = {
        ...initialState,
        contents: {
          heights: {},
          lines: { someId: [{ text: "some other text" }] },
        },
      };

      const nextState = reducer(prevState, {
        id: "someId",
        payload: [{ text: "some text" }],
        type: "SET_CONTENT_LINES",
      });

      expect(nextState).toEqual({
        contents: {
          heights: {},
          lines: { someId: [{ text: "some text" }] },
        },
        bylineHeight: null,
      });
    });
  });

  describe('when dispatching the "SET_BYLINE_HEIGHT" action', () => {
    it("sets the measured height of a byline", () => {
      const nextState = reducer(initialState, {
        payload: 5,
        type: "SET_BYLINE_HEIGHT",
      });

      expect(nextState).toEqual({
        contents: { heights: {}, lines: {} },
        bylineHeight: 5,
      });
    });

    it("updates the measured height of a content item", () => {
      const prevState = { ...initialState, bylineHeight: 2 };

      const nextState = reducer(prevState, {
        payload: 5,
        type: "SET_BYLINE_HEIGHT",
      });

      expect(nextState).toEqual({
        contents: { heights: {}, lines: {} },
        bylineHeight: 5,
      });
    });
  });
});
