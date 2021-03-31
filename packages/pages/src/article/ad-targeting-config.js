import { NativeModules, Platform } from "react-native";

const config = NativeModules.ReactConfig;

export default ({ adTestMode, article, sectionName }) => ({
  adUnit: Platform.OS === "ios" ? "thetimes.mob.ios" : "thetimes.mob.android",
  biddersConfig: {},
  bidderSlots: [],
  bidInitialiser: Promise.resolve(),
  globalSlots: [],
  networkId: config.adNetworkId,
  pageTargeting: {
    aid: article.id,
    cont_type: "art",
    cos: Platform.OS === "ios" ? "iOS" : "Android",
    cov: config.operatingSystemVersion,
    cpn: "AAAA008955006",
    did: config.deviceId,
    eid: "AAAA008955006",
    kw: article.keywords.join(),
    log: config.isLoggedIn ? "1" : "0",
    section: sectionName,
    Shared: "0",
    testmode: adTestMode,
    vid: "",
    test: "video",
  },
  slotTargeting: {
    path: `/${sectionName.toLowerCase()}`,
    section: sectionName,
    slot: sectionName.toLowerCase(),
    zone: "current_edition",
    test: "video",
    pos: "native-inline-ad",
  },
});
