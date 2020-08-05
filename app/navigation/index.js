import { Navigation } from "react-native-navigation";

import * as ViewsIDs from "./ids";
import { EditionView } from "../views/Edition";
import { StorybookUIRoot } from "../storybook/";

// prettier-ignore
export const registerScreens = () => {
    Navigation.registerComponent(ViewsIDs.VIEW_ID_EDITION, () => EditionView);
    Navigation.registerComponent(ViewsIDs.VIEW_ID_P6D, () => EditionView);
    Navigation.registerComponent(ViewsIDs.VIEW_ID_MY_ARTICLES, () => EditionView);
    Navigation.registerComponent(ViewsIDs.VIEW_ID_MORE, () => EditionView);

    // Misc
    Navigation.registerComponent(ViewsIDs.VIEW_ID_STORYBOOK, () => StorybookUIRoot);
};
