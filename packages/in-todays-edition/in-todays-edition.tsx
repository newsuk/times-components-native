import React from "react";
import { Text, View } from "react-native";
import styleFactory from "./styles";

import { ItemsContainer } from "./itemsContainer";
import { Item } from "./item";

type ItemType = {
  id: string;
  title: string;
  strapline: string;
};

interface Props {
  items: [ItemType];
}

const text = {
  heading: "IN TODAY'S EDITION",
};

const InTodaysEdition: React.FC<Props> = ({ items }) => {
  const styles = styleFactory();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.heading}>{text.heading}</Text>
      </View>
      <ItemsContainer>
        {items.map((item, index) => (
          <Item key={`${item.id}-${index}`} item={item} index={index} />
        ))}
      </ItemsContainer>
    </View>
  );
};

export default InTodaysEdition;
