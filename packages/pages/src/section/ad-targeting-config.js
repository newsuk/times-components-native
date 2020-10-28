import { NativeModules, Platform } from "react-native";

const config = NativeModules.ReactConfig;

export default ({ adTestMode = null, sectionName }) => ({
  adUnit: Platform.OS === "ios" ? "thetimes.mob.ios" : "thetimes.mob.android",
  biddersConfig: {},
  bidderSlots: [],
  bidInitialiser: Promise.resolve(),
  globalSlots: [],
  networkId: config.adNetworkId,
  pageTargeting: {
    // aid: article.id,
    cont_type: "art",
    cos: Platform.OS === "ios" ? "iOS" : "Android",
    cov: config.operatingSystemVersion,
    cpn: config.cookieEid,
    did: config.deviceId,
    eid: config.cookieEid,
    // kw: article.keywords.join(),
    log: config.isLoggedIn ? "1" : "0",
    path: `/${sectionName.toLowerCase()}`,
    section: sectionName,
    Shared: "0",
    testmode: adTestMode,
    vid: "",
    zone: "current_edition",
  },
  slotTargeting: {
    slot: sectionName.toLowerCase(),
  },
});
