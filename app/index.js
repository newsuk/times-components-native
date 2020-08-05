import { Navigation } from "react-native-navigation";

import { FontStorage } from "@times-components-native/typeset";
import { registerScreens } from "./navigation";
import * as ViewsIDs from "./navigation/ids";
import ttf from "../fonts";

Object.keys(ttf).forEach((fontName) => {
  FontStorage.registerFont(fontName, ttf[fontName]);
});

const IconEdition = require("../assets/tabs/home.png");
const IconPast6Days = require("../assets/tabs/p6d.png");
const IconMyArticles = require("../assets/tabs/myarticles.png");
const IconMore = require("../assets/tabs/more.png");

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
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
                      topBar: {
                        largeTitle: {
                          visible: true,
                        },
                        title: {
                          text: "Times Components",
                        },
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: IconEdition,
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
                    name: ViewsIDs.VIEW_ID_STORYBOOK,
                    options: {
                      topBar: {
                        title: {
                          text: "Storybook",
                        },
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: IconMore,
                },
              },
            },
          },
        ],
      },
    },
  });
});
