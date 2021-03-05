import { View } from "react-native";
import { connectSearchBox } from "react-instantsearch-native";

const React = require("react");
// eslint-disable-next-line no-undef
const MockReactInstantSearch = jest.genMockFromModule(
  "react-instantsearch-native",
);

const fakeHits = require("./mock-hits.json");

MockReactInstantSearch.connectInfiniteHits = (Component) => () => (
  <Component
    hits={fakeHits}
    refineNext={() => null}
    hasMore={false}
    onArticlePress={() => null}
    currentRefinement="Elvis"
  />
);
MockReactInstantSearch.connectHighlight = (Component) => () => (
  <Component
    hits={fakeHits}
    highlight={() => [
      { value: "Elvis", isHighlighted: true },
      { value: "is the king", isHighlighted: false },
    ]}
  />
);
MockReactInstantSearch.connectSearchBox = (Component) => () => (
  <Component hits={fakeHits} />
);
MockReactInstantSearch.InstantSearch = (Component) => () => (
  <Component />
);
module.exports = MockReactInstantSearch;
