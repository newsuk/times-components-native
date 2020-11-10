import React, { useEffect, useState } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";

import { colours } from "@times-components-native/styleguide";
import { IconClose } from "@times-components-native/icons";
import styles from "./styles";

interface Props {
  content: any;
  children: any;
  onTooltipPresented: <T = unknown, R = unknown>(args?: T) => R;
  type: string;
}

const Tooltip: React.FC<Props> = ({
  content,
  children,
  onTooltipPresented,
  type,
}) => {
  const [opacity] = useState(new Animated.Value(1));

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
      {children}
    </>
  );
};

export default Tooltip;
