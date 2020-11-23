import React, { useState } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
// @ts-ignore
import { Viewport } from "@skele/components";
import { useResponsiveContext } from "@times-components-native/responsive";
import generateStyles from "./styles";

interface Props {
  arrowOffsetX?: number;
  content: string;
  offsetX?: number;
  offsetY?: number;
  onClose?: <T = unknown, R = unknown>(args?: T) => R;
  onTooltipPresented: <T = unknown, R = unknown>(args?: T) => R;
  placement?: "bottom" | "top" | "left";
  tooltips: [string];
  type: string;
  width?: number;
}

const Tooltip: React.FC<Props> = ({
  arrowOffsetX = 20,
  content,
  children,
  offsetX = 0,
  offsetY = 0,
  onClose,
  onTooltipPresented,
  placement = "bottom",
  tooltips,
  type,
  width = 256,
}) => {
  const { isTablet } = useResponsiveContext();
  const [opacity] = useState(new Animated.Value(1));
  const ViewportAwareView = Viewport.Aware(View);

  const styles = generateStyles({
    arrowOffsetX,
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
    <TouchableOpacity onPress={onClosePress} style={styles.close}>
      <View style={styles.crossDiagonal1} />
      <View style={styles.crossDiagonal2} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.wrapper}>
      {tooltips.includes(type) && isTablet && (
        <ViewportAwareView
          onViewportEnter={() => {
            onTooltipPresented(type);
          }}
        >
          <Animated.View
            style={{
              opacity: opacity,
            }}
          >
            <View style={styles.container}>
              {closeButton}
              <Text style={styles.text}>{content}</Text>
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
