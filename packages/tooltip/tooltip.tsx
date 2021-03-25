import React, { ReactNode, useState } from "react";
import { Animated, Text, TouchableOpacity, View, Platform } from "react-native";
// @ts-ignore
import { Viewport } from "@skele/components";
import generateStyles from "./styles";

export interface TooltipProps {
  arrowOffset?: number;
  content: string | ReactNode;
  displayedInView?: boolean;
  flexDirectionColumnReverse?: boolean;
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
  flexDirectionColumnReverse = false,
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
  const [opacity] = useState(new Animated.Value(1));
  const ViewportAwareView = Viewport.Aware(View);

  const styles = generateStyles({
    arrowOffset,
    flexDirectionColumnReverse,
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

  if (displayedInView && onTooltipPresented) {
    onTooltipPresented(type, articleId);
  }

  return (
    <View style={styles.wrapper}>
      {tooltips.includes(type) && (
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
