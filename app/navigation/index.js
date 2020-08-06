import { Navigation } from "react-native-navigation";

import * as ViewsIDs from "./ids";
import { EditionView } from "../views/Edition";
import { PastSixDaysView } from "../views/PastSixDays";
import { MyArticlesView } from "../views/MyArticles";
import { MoreView } from "../views/More";
import { StorybookUIRoot } from "../storybook/";

// prettier-ignore
export const registerScreens = () => {
    Navigation.registerComponent(ViewsIDs.VIEW_ID_EDITION, () => EditionView);
    Navigation.registerComponent(ViewsIDs.VIEW_ID_P6D, () => PastSixDaysView);
    Navigation.registerComponent(ViewsIDs.VIEW_ID_MY_ARTICLES, () => MyArticlesView);
    Navigation.registerComponent(ViewsIDs.VIEW_ID_MORE, () => MoreView);

    // Misc
    Navigation.registerComponent(ViewsIDs.VIEW_ID_STORYBOOK, () => StorybookUIRoot);
};
