import React, { useEffect, useRef } from "react";
import { Animated, Platform, View } from "react-native";

import { ARTICLE_READ_ANIMATION } from "@times-components-native/styleguide";

interface MarkAsReadProps {
  children: any;
  articleReadState: {
    animate: boolean;
    read: boolean;
  };
}

export const MarkAsRead = ({ children, articleReadState }: MarkAsReadProps) => {
  const animationOpacity = useRef(new Animated.Value(1)).current;
  const opacity = 0.57;

  useEffect(() => {
    if (!articleReadState.animate) return;

    Animated.timing(animationOpacity, {
      delay: ARTICLE_READ_ANIMATION.DELAY,
      duration: ARTICLE_READ_ANIMATION.DURATION,
      toValue: opacity,
      useNativeDriver: Platform.OS === "ios",
    }).start();
  }, [articleReadState.animate]);

  return articleReadState.animate ? (
    <Animated.View
      style={{
        opacity: animationOpacity,
      }}
    >
      {children}
    </Animated.View>
  ) : articleReadState.read ? (
    <View
      style={{
        opacity: opacity,
      }}
    >
      {children}
    </View>
  ) : (
    <View>{children}</View>
  );
};
