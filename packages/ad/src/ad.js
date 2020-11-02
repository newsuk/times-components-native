/* eslint-disable no-undef */
import React, { Component } from "react";
import { Subscriber } from "react-broadcast";
import { View, Text } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import { useResponsiveContext } from "@times-components-native/responsive";

import { getPrebidSlotConfig, getSlotConfig, prebidConfig } from "./utils";
import adInit from "./utils/ad-init";
import AdContainer from "./ad-container";
import DOMContext from "./dom-context";
import AdComposer from "./ad-composer";
import { defaultProps, propTypes } from "./ad-prop-types";
import styles from "./styles";

export class AdBase extends Component {
  static getDerivedStateFromProps(nextProps) {
    const { slotName, width, screenWidth, orientation } = nextProps;

    return {
      config: getSlotConfig(slotName, width || screenWidth, orientation),
    };
  }

  constructor(props) {
    super(props);

    const { slotName, width, screenWidth, orientation } = props;

    this.prebidConfig = prebidConfig;

    this.state = {
      config: getSlotConfig(slotName, width || screenWidth, orientation),
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

  renderAd(adConfig) {
    const {
      baseUrl,
      contextUrl,
      display,
      isLoading,
      slotName,
      style,
      width,
      screenWidth,
      orientation,
    } = this.props;
    const { config, hasError, isAdReady, offline } = this.state;

    if (hasError || offline) return null;

    this.slots = adConfig.bidderSlots.map((slot) =>
      getPrebidSlotConfig(
        slot,
        adConfig.slotTargeting.section,
        config.maxSizes.width,
        adConfig.biddersConfig.bidders,
        orientation,
      ),
    );

    this.allSlotConfigs = adConfig.globalSlots
      .concat(adConfig.bidderSlots)
      .map((slot) => getSlotConfig(slot, screenWidth, orientation));

    const data = {
      adUnit: adConfig.adUnit,
      allSlotConfigs: this.allSlotConfigs || this.slots,
      bidInitialiser: adConfig.bidInitialiser || false,
      config,
      contextUrl,
      debug: adConfig.debug || false,
      disableAds: adConfig.disabled || false,
      networkId: adConfig.networkId,
      pageTargeting: adConfig.pageTargeting,
      prebidConfig: Object.assign(this.prebidConfig, {
        bidders: adConfig.biddersConfig.bidders,
        bucketSize: adConfig.biddersConfig.bucketSize,
        maxBid: adConfig.biddersConfig.maxBid,
        minPrice: adConfig.biddersConfig.minPrice,
        timeout: adConfig.biddersConfig.timeout,
      }),
      section: adConfig.slotTargeting.section,
      sizingMap: config.mappings,
      slotName,
      slots: this.slots,
      slotTargeting: adConfig.slotTargeting,
    };

    const sizeProps =
      !isAdReady || hasError
        ? { width: 0 }
        : {
            width: width || screenWidth,
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

  render() {
    const { adConfig: propAdConfig } = this.props;
    if (propAdConfig) {
      return this.renderAd(propAdConfig);
    }
    return (
      <Subscriber channel="adConfig">
        {(adConfig) => this.renderAd(adConfig)}
      </Subscriber>
    );
  }
}

const Ad = (props) => {
  const { screenWidth, orientation } = useResponsiveContext();
  return (
    <AdBase {...props} screenWidth={screenWidth} orientation={orientation} />
  );
};

Ad.propTypes = propTypes;
Ad.defaultProps = defaultProps;

export { AdComposer, AdContainer };
export default Ad;
