/* eslint-disable no-undef */
import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import { useResponsiveContext } from "@times-components-native/responsive";
import { getNarrowArticleBreakpoint } from "@times-components-native/styleguide";

import { getPrebidSlotConfig, getSlotConfig, prebidConfig } from "./utils";
import adInit from "./utils/ad-init";
import AdContainer from "./ad-container";
import DOMContext from "./dom-context";
import { defaultProps, propTypes } from "./ad-prop-types";
import styles from "./styles";

const determineData = (config, props) => {
  const { contextUrl, orientation, screenWidth, slotName, adConfig } = props;

  const allSlotConfigs = adConfig.globalSlots
    .concat(adConfig.bidderSlots)
    .map((slot) => getSlotConfig(slot, screenWidth, orientation));

  const slots = adConfig.bidderSlots.map((slot) =>
    getPrebidSlotConfig(
      slot,
      adConfig.slotTargeting.section,
      config.maxSizes.width,
      adConfig.biddersConfig.bidders,
      orientation,
    ),
  );

  return {
    adUnit: adConfig.adUnit,
    allSlotConfigs: allSlotConfigs || slots,
    bidInitialiser: adConfig.bidInitialiser || false,
    config,
    contextUrl,
    debug: adConfig.debug || false,
    disableAds: adConfig.disabled || false,
    networkId: adConfig.networkId,
    pageTargeting: adConfig.pageTargeting,
    prebidConfig: Object.assign(prebidConfig, {
      bidders: adConfig.biddersConfig.bidders,
      bucketSize: adConfig.biddersConfig.bucketSize,
      maxBid: adConfig.biddersConfig.maxBid,
      minPrice: adConfig.biddersConfig.minPrice,
      timeout: adConfig.biddersConfig.timeout,
    }),
    section: adConfig.slotTargeting.section,
    sizingMap: config.mappings,
    slotName,
    slots,
    slotTargeting: adConfig.slotTargeting,
    "test=video": "test=video",
  };
};

export class AdBase extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      isAdReady: false,
      offline: false,
    };
  }

  componentDidMount() {
    NetInfo.fetch()
      .then((state) => {
        const { isConnected } = state;
        this.setState({
          offline: !isConnected,
        });
      })
      .then(() => {
        this.unsubscribe = NetInfo.addEventListener((state) => {
          const { offline } = this.state;
          const { isConnected } = state;
          if (isConnected && offline) {
            this.setState({
              offline: false,
            });
          }
        });
      });
  }

  componentWillUnmount() {
    if (typeof this.unsubscribe === "function") {
      this.unsubscribe();
    }
  }

  setAdReady = () => {
    this.setState({
      isAdReady: true,
    });
  };

  setAdError = () => {
    this.setState({
      hasError: true,
    });
  };

  render() {
    const {
      baseUrl,
      display,
      isLoading,
      narrowContent,
      screenWidth,
      style,
      slotName,
      orientation,
      width,
    } = this.props;

    const { hasError, isAdReady, offline } = this.state;
    const config = getSlotConfig(slotName, width || screenWidth, orientation);
    const data = determineData(config, this.props);
    console.log("data", data);

    if (hasError || offline) return null;

    const sizeProps =
      !isAdReady || hasError
        ? { width: 0 }
        : {
            width:
              width ||
              (narrowContent
                ? getNarrowArticleBreakpoint(screenWidth).content
                : screenWidth),
          };

    const isInline = display === "inline";

    return (
      <View style={[styles.container, style, isInline && styles.inlineAd]}>
        {isInline ? (
          <View style={[styles.inlineAdTitle, { width: sizeProps.width }]}>
            <Text style={styles.inlineAdTitleText}>Advertisement</Text>
          </View>
        ) : null}
        {isLoading ? null : (
          <DOMContext
            baseUrl={baseUrl}
            data={data}
            init={adInit}
            onRenderComplete={this.setAdReady}
            onRenderError={this.setAdError}
            isInline={isInline}
            maxHeight={config.maxSizes.height}
            {...sizeProps}
          />
        )}
      </View>
    );
  }
}

const Ad = (props) => {
  const { windowWidth, orientation } = useResponsiveContext();
  return (
    <AdBase {...props} screenWidth={windowWidth} orientation={orientation} />
  );
};

Ad.propTypes = propTypes;
Ad.defaultProps = defaultProps;

export { AdContainer };
export default Ad;
