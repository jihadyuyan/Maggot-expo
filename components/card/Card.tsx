import { FlatList } from "react-native";
import { StyleSheet } from "react-native";
import { Text, View } from "../Themed";

const DATA = [
  {
    key: "12345",
    title: "Gas Amonia",
    unit: "ppm",
  },
  {
    key: "66",
    title: "Gas Metana",
    unit: "ppm",
  },
  {
    key: "77",
    title: "Gas Karbon Monoksida",
    unit: "ppm",
  },
];

export default function Card() {
  return (
    <View>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.key}
        horizontal
        pagingEnabled
        renderItem={({ item }) => (
          <View style={Style.Card}>
            <Text>{item.title}</Text>
          </View>
        )}
      />

      <Text>Card</Text>
    </View>
  );
}

const Style = StyleSheet.create({
  Card: {
    widht: "100%",
    height: 200,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#d3d3d3",
  },
});
