import { Animated, Dimensions, FlatList } from "react-native";
import { StyleSheet } from "react-native";
import { Text, View } from "../Themed";
import { LineChart } from "react-native-chart-kit";
import React from "react";

const { height, width } = Dimensions.get("window");

const DATA = [
  {
    key: "12345",
    title: "GAS AMONIA",
    lightcolor: "#0d3876",
    darkcolor: "#6455cd",
    LightTextColor: "#f5f5f5",
    DarkTextColor: "#f5f5f5",
  },
  {
    key: "66",
    title: "GAS METANA",
    lightcolor: "#0d3876",
    darkcolor: "#ed7756",
    LightTextColor: "#f5f5f5",
    DarkTextColor: "#f5f5f5",
  },
  {
    key: "77",
    title: "GAS KARBON MONOKSIDA",
    LightTextColor: "#0d3876",
    DarkTextColor: "#2f3254",
    lightcolor: "#e2e8f3",
    darkcolor: "#96cdc2",
  },
];

export default function Card() {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <>
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
          <View
            lightColor="#e0e7f2"
            darkColor="#303355"
            style={Style.container}
          >
            <View
              lightColor={item.lightcolor}
              darkColor={item.darkcolor}
              style={Style.Card}
            >
              <Text
                lightColor={item.LightTextColor}
                darkColor={item.DarkTextColor}
                style={Style.Gas}
              >
                {item.title}
              </Text>
              <View>
                <LineChart
                  data={{
                    labels: [
                      "00:00",
                      "02:00",
                      "04:00",
                      "06:00",
                      "08:00",
                      "10:00",
                      "12:00",
                      "14:00",
                      "16:00",
                      "18:00",
                      "20:00",
                      "22:00",
                    ],
                    datasets: [
                      {
                        data: [
                          Math.random() * 100,
                          Math.random() * 100,
                          Math.random() * 100,
                          Math.random() * 100,
                          Math.random() * 100,
                          Math.random() * 100,
                        ],
                      },
                    ],
                  }}
                  width={Dimensions.get("window").width} // from react-native
                  height={220}
                  yAxisLabel="$"
                  yAxisSuffix="k"
                  yAxisInterval={1} // optional, defaults to 1
                  chartConfig={{
                    backgroundColor: "#6455cd",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) =>
                      `rgba(255, 255, 255, ${opacity})`,
                    style: {
                      borderRadius: 16,
                    },
                    propsForDots: {
                      r: "6",
                      strokeWidth: "2",
                      stroke: "#ffa726",
                    },
                  }}
                  bezier
                  style={{
                    marginVertical: 8,
                    borderRadius: 16,
                  }}
                />
              </View>
            </View>
          </View>
        )}
      />
    </>
  );
}

const Style = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  Card: {
    width: width - 80,
    height: height / 3,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  Gas: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 15,
  },
});
