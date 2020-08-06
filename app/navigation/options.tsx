import { Options, OptionsBottomTab } from "react-native-navigation";

import { TIMES_BLUE } from "../utils/colors";
import { GillSansMTStdMedium, TimesModern } from "../utils/fonts";

export const getOptions = (title: string, opts: Options = {}): Options => {
  return {
    ...opts,
    topBar: {
      ...opts.topBar,
      background: {
        color: "black",
        ...(opts.topBar || {}).background,
      },
      title: {
        color: "white",
        fontFamily: TimesModern.Bold,
        fontSize: 20,
        text: title,
        ...(opts.topBar || {}).title,
      },
    },
    statusBar: {
      style: "light",
      ...opts.statusBar,
    },
  };
};

export const bottomTabOptions: OptionsBottomTab = {
  iconColor: "#C2C2C2",
  textColor: "#C2C2C2",
  selectedIconColor: TIMES_BLUE,
  selectedTextColor: TIMES_BLUE,
  fontFamily: GillSansMTStdMedium,
  fontSize: 12,
};
