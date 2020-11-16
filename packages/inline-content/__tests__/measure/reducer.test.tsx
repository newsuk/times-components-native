import { initialState, reducer } from "../../src/measure/reducer";
import { Measurements } from "@times-components-native/types";

describe("reducer", () => {
  it("returns state when unrecognised action provided", () => {
    // @ts-ignore deliberately setting invalid action
    const nextState = reducer(initialState, { type: "unknown" });

    expect(nextState).toEqual(initialState);
  });

  describe('when dispatching the "SET_INLINE_CONTENT_HEIGHT" action', () => {
    it("sets the measured height of a content item", () => {
      const nextState = reducer(initialState, {
        id: "someId",
        payload: 5,
        type: "SET_INLINE_CONTENT_HEIGHT",
      });

      expect(nextState).toEqual({
        contents: {
          heights: {
            someId: 5,
          },
          lines: {},
        },
        itemHeight: null,
      });
    });

    it("updates the measured height of a content item", () => {
      const prevState: Measurements = {
        ...initialState,
        contents: { heights: { someId: 1 }, lines: {} },
      };

      const nextState = reducer(prevState, {
        id: "someId",
        payload: 5,
        type: "SET_INLINE_CONTENT_HEIGHT",
      });

      expect(nextState).toEqual({
        contents: {
          heights: {
            someId: 5,
          },
          lines: {},
        },
        itemHeight: null,
      });
    });
  });

  describe('when dispatching the "SET_INLINE_CONTENT_LINES" action', () => {
    it("sets the measured lines of a content item", () => {
      const nextState = reducer(initialState, {
        id: "someId",
        payload: [{ text: "some text" }],
        type: "SET_INLINE_CONTENT_LINES",
      });

      expect(nextState).toEqual({
        contents: {
          heights: {},
          lines: { someId: [{ text: "some text" }] },
        },
        itemHeight: null,
      });
    });

    it("updates the measured lines of a content item", () => {
      const prevState: Measurements = {
        ...initialState,
        contents: {
          heights: {},
          lines: { someId: [{ text: "some other text" }] },
        },
      };

      const nextState = reducer(prevState, {
        id: "someId",
        payload: [{ text: "some text" }],
        type: "SET_INLINE_CONTENT_LINES",
      });

      expect(nextState).toEqual({
        contents: {
          heights: {},
          lines: { someId: [{ text: "some text" }] },
        },
        itemHeight: null,
      });
    });
  });
});

describe('when dispatching the "SET_INLINE_ITEM_HEIGHT" action', () => {
  it("sets the measured height of an inline item", () => {
    const nextState = reducer(initialState, {
      height: 5,
      type: "SET_INLINE_ITEM_HEIGHT",
    });

    expect(nextState).toEqual({
      ...initialState,
      itemHeight: 5,
    });
  });

  it("updates the measured height of an inline item", () => {
    const prevState: Measurements = {
      ...initialState,
      itemHeight: 5,
    };

    const nextState = reducer(prevState, {
      height: 10,
      type: "SET_INLINE_ITEM_HEIGHT",
    });

    expect(nextState).toEqual({
      ...prevState,
      itemHeight: 10,
    });
  });
});
