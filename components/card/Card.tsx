import { Animated, Dimensions, FlatList } from "react-native";
import { StyleSheet } from "react-native";
import { Text, View } from "../Themed";
import React from "react";

const { height, width } = Dimensions.get("window");

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
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View>
      <Animated.FlatList
        data={DATA}
        keyExtractor={(item) => item.key}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item }) => (
          <View style={Style.container}>
            <View style={Style.Card}>
              <Text>
                {item.title} {item.unit}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const Style = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  Card: {
    width: width * 0.8,
    height: height / 3,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#d3d3d3",
  },
});
