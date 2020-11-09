import React, { useEffect, useState } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";

import { colours } from "@times-components-native/styleguide";
import { IconSaveBookmark } from "@times-components-native/icons";
import styles from "./styles";

interface Props {
  children: any;
}

const Tooltip: React.FC<Props> = ({ children }) => {
  const [opacity] = useState(new Animated.Value(1));

  const onPress = () =>
    Animated.timing(opacity, {
      duration: 200,
      toValue: 0,
      useNativeDriver: true,
    }).start();

  return (
    <Animated.View
      style={{
        opacity: opacity,
      }}
    >
      <View style=[{ styles.container }, {
        opacity: opacity,
      }]>
        <View style={styles.body}>
          <Text style={styles.text}>{children}</Text>
          <View style={styles.close}>
            <TouchableOpacity onPress={onPress}>
              <IconSaveBookmark
                fillColour={colours.functional.white}
                opacity={1}
                height={16}
                width={16}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Animated.View>
  );
};

export default Tooltip;
