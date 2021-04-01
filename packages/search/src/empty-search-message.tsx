import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles/empty-search-message-styles";

const { container, text, title } = styles;

const EmptySearchMessage = () => (
  <View style={container}>
    <Text style={title}>Popular thing to search for:</Text>
    <Text style={text}>Articles</Text>
    <Text style={text}>Topics</Text>
    <Text style={text}>Journalists</Text>
  </View>
);

export default EmptySearchMessage;
