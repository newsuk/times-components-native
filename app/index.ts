import { Navigation, OptionsBottomTab } from "react-native-navigation";

import { FontStorage } from "@times-components-native/typeset";
import { registerScreens } from "./navigation";
import { TIMES_BLUE } from "./utils/colors";
import { GillSansMTStdMedium } from "./utils/fonts";
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

const bottomTabOptions: OptionsBottomTab = {
  iconColor: "#C2C2C2",
  textColor: "#C2C2C2",
  selectedIconColor: TIMES_BLUE,
  selectedTextColor: TIMES_BLUE,
  fontFamily: GillSansMTStdMedium,
  fontSize: 12,
};

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
                  ...bottomTabOptions,
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
                      topBar: {
                        title: {
                          text: "Past Six Days",
                        },
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  ...bottomTabOptions,
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
                      topBar: {
                        title: {
                          text: "My Articles",
                        },
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  ...bottomTabOptions,
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
                      topBar: {
                        title: {
                          text: "More",
                        },
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  ...bottomTabOptions,
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
});
