import { Navigation } from "react-native-navigation";

import { bottomTabOptions, getOptions } from "./navigation/options";
import { FontStorage } from "@times-components-native/typeset";
import { registerScreens } from "./navigation";
import { TIMES_TEAL } from "./utils/colors";
import * as ViewsIDs from "./navigation/ids";
import ttf from "../fonts";

Object.keys(ttf).forEach((fontName) => {
  FontStorage.registerFont(fontName, (ttf as any)[fontName]);
});

const IconEdition = require("../assets/tabs/home.png");
const IconPast6Days = require("../assets/tabs/p6d.png");
const IconMyArticles = require("../assets/tabs/myarticles.png");
const IconMore = require("../assets/tabs/more.png");

registerScreens();

const storybookMode = true;

const startTabs = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: "BOTTOM_TABS_LAYOUT",
        children: [
          {
            stack: {
              id: ViewsIDs.TAB_ID_HOME,
              children: [
                {
                  component: {
                    name: ViewsIDs.VIEW_ID_EDITION,
                    options: {
                      ...getOptions("Times Components", {
                        topBar: {
                          background: {
                            color: TIMES_TEAL,
                          },
                        },
                      }),
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  ...bottomTabOptions,
                  testID: "HOME_TAB_ICON_ID",
                  text: "Home",
                  icon: IconEdition,
                },
              },
            },
          },
          {
            stack: {
              id: ViewsIDs.TAB_ID_P6D,
              children: [
                {
                  component: {
                    name: ViewsIDs.VIEW_ID_P6D,
                    options: {
                      ...getOptions("Past Six Days"),
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  ...bottomTabOptions,
                  testID: "P6D_TAB_ICON_ID",
                  text: "Past six days",
                  icon: IconPast6Days,
                },
              },
            },
          },
          {
            stack: {
              id: ViewsIDs.TAB_ID_MY_ARTICLES,
              children: [
                {
                  component: {
                    name: ViewsIDs.VIEW_ID_MY_ARTICLES,
                    options: {
                      ...getOptions("My Articles"),
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  ...bottomTabOptions,
                  testID: "MY_ARTICLES_TAB_ICON_ID",
                  text: "My articles",
                  icon: IconMyArticles,
                },
              },
            },
          },
          {
            stack: {
              id: ViewsIDs.TAB_ID_MORE,
              children: [
                {
                  component: {
                    name: ViewsIDs.VIEW_ID_MORE,
                    options: {
                      ...getOptions("More", {
                        topBar: {
                          background: {
                            color: "clear",
                          },
                          title: {
                            color: "black",
                          },
                        },
                        statusBar: {
                          style: "dark",
                        },
                      }),
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  ...bottomTabOptions,
                  testID: "MORE_TAB_ICON_ID",
                  text: "More",
                  icon: IconMore,
                },
              },
            },
          },
        ],
      },
    },
  });
};

const startStorybook = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: ViewsIDs.VIEW_ID_STORYBOOK,
              options: {
                ...getOptions("Storybook"),
              },
            },
          },
        ],
      },
    },
  });
};

Navigation.events().registerAppLaunchedListener(() => {
  if (storybookMode) {
    return startStorybook();
  }

  return startTabs();
});
