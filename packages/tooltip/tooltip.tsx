import React, { ReactNode, useState } from "react";
import { Animated, Text, TouchableOpacity, View, Platform } from "react-native";
// @ts-ignore
import { Viewport } from "@skele/components";
import { useResponsiveContext } from "@times-components-native/responsive";
import generateStyles from "./styles";

export interface TooltipProps {
  arrowOffset?: number;
  content: string | ReactNode;
  displayedInView?: boolean;
  offsetX?: number;
  offsetY?: number;
  onClose?(): void;
  onTooltipPresented(type: string, articleId: string): void;
  placement?: "bottom" | "top" | "left" | "right";
  tooltips: string[];
  type: string;
  width?: number;
  articleId: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  arrowOffset = 20,
  content,
  children,
  displayedInView = false,
  offsetX = 0,
  offsetY = 0,
  onClose,
  onTooltipPresented,
  placement = "bottom",
  tooltips,
  type,
  width = 256,
  articleId,
}) => {
  const { isArticleTablet } = useResponsiveContext();
  const [opacity] = useState(new Animated.Value(1));
  const ViewportAwareView = Viewport.Aware(View);

  const styles = generateStyles({
    arrowOffset,
    offsetX,
    offsetY,
    placement,
    width,
  });

  const onClosePress = () => {
    onClose && onClose();
    Animated.timing(opacity, {
      duration: 200,
      toValue: 0,
      useNativeDriver: false,
    }).start();
  };

  const closeButton = (
    <TouchableOpacity
      onPress={onClosePress}
      style={styles.close}
      testID="closeButton"
    >
      <View style={styles.crossDiagonal1} />
      <View style={styles.crossDiagonal2} />
    </TouchableOpacity>
  );

  if (isArticleTablet && displayedInView && onTooltipPresented) {
    onTooltipPresented(type, articleId);
  }

  return (
    <View style={styles.wrapper}>
      {tooltips.includes(type) && isArticleTablet && (
        <ViewportAwareView
          testID="viewportAwareView"
          onViewportEnter={() => {
            onTooltipPresented(type, articleId);
          }}
        >
          <Animated.View
            style={{
              opacity: opacity,
            }}
          >
            <View style={styles.container}>
              {Platform.OS === "ios" && closeButton}
              <Text style={styles.text} allowFontScaling={false}>
                {content}
              </Text>
              <View style={styles.arrow} />
            </View>
          </Animated.View>
        </ViewportAwareView>
      )}
      {children}
    </View>
  );
};

export default Tooltip;
