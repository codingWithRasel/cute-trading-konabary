import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";

const Home = () => {
  const [text, setText] = React.useState("");
  return (
    <View style={{ marginHorizontal: 10 }}>
      <Text>Cute Trading Konabari</Text>
      <TextInput
        mode="outlined"
        label="Texts"
        value={text}
        onChangeText={(text) => setText(text)}
      />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({});
