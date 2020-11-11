import React, { useState } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import { useResponsiveContext } from "@times-components-native/responsive";
// @ts-ignore
import { Viewport } from "@skele/components";
import styles from "./styles";

interface Props {
  content: string;
  onTooltipPresented: <T = unknown, R = unknown>(args?: T) => R;
  tooltips: [string];
  type: string;
}

const Tooltip: React.FC<Props> = ({
  content,
  children,
  onTooltipPresented,
  tooltips,
  type,
}) => {
  const [opacity] = useState(new Animated.Value(1));
  const { isTablet } = useResponsiveContext();
  const ViewportAwareView = Viewport.Aware(View);

  const onPress = () =>
    Animated.timing(opacity, {
      duration: 200,
      toValue: 0,
      useNativeDriver: true,
    }).start();

  const closeButton = (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.close}>
        <View style={styles.crossDiagonal1} />
        <View style={styles.crossDiagonal2} />
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      {tooltips?.includes(type) && isTablet && (
        <ViewportAwareView onViewportEnter={onTooltipPresented(type)}>
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
    </>
  );
};

export default Tooltip;
