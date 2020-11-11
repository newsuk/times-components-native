import React, { useEffect, useState } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import { useResponsiveContext } from "@times-components-native/responsive";
import { colours } from "@times-components-native/styleguide";
import { IconClose } from "@times-components-native/icons";
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

  const onPress = () =>
    Animated.timing(opacity, {
      duration: 200,
      toValue: 0,
      useNativeDriver: true,
    }).start();

  useEffect(() => {
    onTooltipPresented(type);
  }, []);

  return (
    <>
      {tooltips?.includes(type) && isTablet && (
        <Animated.View
          style={{
            opacity: opacity,
          }}
        >
          <View style={styles.container}>
            <View style={styles.body}>
              <Text style={styles.text}>{content}</Text>
              <View style={styles.close}>
                <TouchableOpacity onPress={onPress}>
                  <IconClose
                    fillColour={colours.functional.white}
                    height={16}
                    width={16}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.arrow} />
            </View>
          </View>
        </Animated.View>
      )}
      {children}
    </>
  );
};

export default Tooltip;
