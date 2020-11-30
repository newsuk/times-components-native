import React from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface Props {
  animatedWidth: any;
  icon?: string;
  text: string;
  onPress: <T = unknown, R = unknown>(args?: T) => R;
}

const FloatingActionButton: React.FC<Props> = ({
  animatedWidth,
  icon,
  text,
  onPress,
}) => {
  const buttonWidth = animatedWidth.interpolate({
    inputRange: [0, 170],
    outputRange: [54, 170],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.wrapper}>
      <Animated.View style={[styles.outerContainer, { width: buttonWidth }]}>
        <TouchableOpacity style={styles.innerContainer} onPress={onPress}>
          <View style={styles.icon}>{icon}</View>
          <Text style={styles.text} allowFontScaling={false} numberOfLines={1}>
            {text}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default FloatingActionButton;
