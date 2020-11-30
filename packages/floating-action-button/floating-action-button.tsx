import React from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import styles, { buttonHeight } from "./styles";

interface Props {
  animatedWidth: Animated.Value;
  icon?: string;
  extendedWidth: number;
  text: string;
  onPress: <T = unknown, R = unknown>(args?: T) => R;
}

const FloatingActionButton: React.FC<Props> = ({
  animatedWidth,
  icon,
  extendedWidth,
  text,
  onPress,
}) => {
  const buttonWidth = animatedWidth.interpolate({
    inputRange: [0, extendedWidth],
    outputRange: [buttonHeight, extendedWidth],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.wrapper}>
      <Animated.View style={{ width: buttonWidth }}>
        <TouchableOpacity style={styles.container} onPress={onPress}>
          {icon && <View style={styles.icon}>{icon}</View>}
          <Text style={styles.text} allowFontScaling={false} numberOfLines={1}>
            {text}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default FloatingActionButton;
