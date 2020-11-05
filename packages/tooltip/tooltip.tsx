import { IconTwitter } from "@times-components-native/icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface Props {
  children: any;
}

const Tooltip: React.FC<Props> = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.text}>{children}</Text>
        <View style={styles.close}>
          <TouchableOpacity onPress={() => false}>
            <IconTwitter width={28} height={28} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Tooltip;
