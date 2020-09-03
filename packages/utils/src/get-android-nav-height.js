import { Dimensions } from "react-native";

const getAndroidNavHeight = () => {
  let deviceHeight = Dimensions.get("screen").height;
  let windowHeight = Dimensions.get("window").height;
  const bottomOSNavBarHeight = deviceHeight - windowHeight;
  const bottomAppNavBarHeight = 56;
  return bottomOSNavBarHeight + bottomAppNavBarHeight;
};

export default getAndroidNavHeight;
