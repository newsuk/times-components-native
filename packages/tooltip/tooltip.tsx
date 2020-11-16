import React, { useState } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
// @ts-ignore
import { Viewport } from "@skele/components";
import styles, { calculateArrowPosition, defaults } from "./styles";

interface Props {
  alignment?: "center" | "left";
  content: string;
  offsetY: number;
  onClose?: <T = unknown, R = unknown>(args?: T) => R;
  onTooltipPresented: <T = unknown, R = unknown>(args?: T) => R;
  type: string;
  width?: number;
}

const Tooltip: React.FC<Props> = ({
  alignment = "center",
  content,
  children,
  offsetY = defaults.offsetY,
  onClose,
  onTooltipPresented,
  type,
  width = defaults.width,
}) => {
  const [opacity] = useState(new Animated.Value(1));
  const ViewportAwareView = Viewport.Aware(View);
  const leftAligned = alignment === "left";

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
    <>
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
          <View
            style={[
              styles.container,
              { width },
              styles[alignment],
              { bottom: offsetY },
            ]}
          >
            {closeButton}
            <Text style={[styles.text, leftAligned && styles.textLeft]}>
              {content}
            </Text>
            <View
              style={[
                styles.arrow,
                { left: calculateArrowPosition(alignment, width) },
              ]}
            />
          </View>
        </Animated.View>
      </ViewportAwareView>
      {children}
    </>
  );
};

export default Tooltip;
