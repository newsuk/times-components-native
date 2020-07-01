/* eslint-disable no-undef,global-require,import/no-extraneous-dependencies */
function mockUserState() {
  jest.mock("@times-components-native/user-state", () => {
    const RealUserState = require.requireActual(
      "@times-components-native/user-state"
    ).default;

    function MockUserState({ state, children = null, fallback = null }) {
      return MockUserState.mockStates.find(s => s === state)
        ? children
        : fallback;
    }

    Object.keys(RealUserState).reduce((acc, key) => {
      acc[key] = RealUserState[key];

      return acc;
    }, MockUserState);

    MockUserState.mockReset = () => {
      MockUserState.mockStates = [
        RealUserState.fullArticle,
        RealUserState.loggedIn,
        RealUserState.loggedInOrShared,
        RealUserState.subscriber
      ];
    };

    MockUserState.mockReset();

    return MockUserState;
  });

  const UserState = require("@times-components-native/user-state");

  beforeEach(() => {
    UserState.mockReset();
  });

  return UserState;
}

export default mockUserState;
