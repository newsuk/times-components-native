import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import Image from "@times-components-native/image";
import Touchable from "./touchable";
import PlayIcon from "./play-icon";
import { propTypes, defaultProps } from "./video-prop-types";
import styles from "./styles";

const Video = ({
  accountId,
  height,
  onVideoPress,
  policyKey,
  poster,
  videoId,
  width,
  relativeWidth,
  relativeHeight,
  relativeHorizontalOffset,
  relativeVerticalOffset,
  testIDProp,
}) => (
  <Touchable
    accessibilityLabel="Video Splash"
    onPress={(e) => {
      onVideoPress(e, {
        accountId,
        policyKey,
        videoId,
      });
    }}
    testID={testIDProp ? testIDProp : "splash-component"}
  >
    <View style={[styles.videoTabletContainer, { height, width }]}>
      {poster ? (
        <Image
          aspectRatio={width / height}
          style={{
            height,
            width,
          }}
          uri={poster.uri}
          relativeWidth={relativeWidth}
          relativeHeight={relativeHeight}
          relativeHorizontalOffset={relativeHorizontalOffset}
          relativeVerticalOffset={relativeVerticalOffset}
        />
      ) : (
        <View
          style={{
            backgroundColor: "black",
            height,
            width,
          }}
        />
      )}
      <View style={[styles.overlay, { height, width }]}>
        <PlayIcon containerWidth={width} />
      </View>
    </View>
  </Touchable>
);

Video.defaultProps = {
  ...defaultProps,
  onVideoPress: () => null,
};
Video.propTypes = {
  ...propTypes,
  onVideoPress: PropTypes.func,
};

export default Video;
export { default as PlayIcon } from "./play-icon";
