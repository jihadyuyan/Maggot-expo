import React from "react";
import { Text, View } from "./Themed";
import { StyleSheet, Dimensions, useColorScheme } from "react-native";
import { LineChart } from "react-native-chart-kit";
type GrafikProps = {
  lightcolor?: string;
  darkcolor?: string;
  lightTextColor: string;
  darkTextColor: string;
  yaxis: any[];
  ylabel: any[];
};

const { height, width } = Dimensions.get("window");

const Grafik = ({
  lightcolor,
  darkcolor,
  lightTextColor,
  darkTextColor,
  yaxis,
  ylabel,
}: GrafikProps) => {
  const colorScheme = useColorScheme();

  return (
    <View
      style={{
        marginTop: 20,
      }}
    >
      <LineChart
        data={{
          //label dynamic dari data
          labels: ylabel.map((item, index) => {
            // return time per index
            if (index === 0) {
              if (item != "00.00") {
                return item;
              }
              return "00.00";
            } else if (index === 1) {
              if (item != "04.00") {
                return item;
              }
              return "04.00";
            } else if (index === 2) {
              if (item != "08.00") {
                return item;
              }
              return "08.00";
            } else if (index === 3) {
              if (item != "12.00") {
                return item;
              }
              return "12.00";
            } else if (index === 4) {
              if (item != "16.00") {
                return item;
              }
              return "16.00";
            } else if (index === 5) {
              if (item != "20.00") {
                return item;
              }
              return "20.00";
            } else {
              return "00.00";
            }
          }),
          datasets: [
            {
              data: yaxis,
            },
          ],
        }}
        width={width - 60}
        height={height / 3}
        chartConfig={{
          backgroundGradientFrom:
            colorScheme === "dark" ? darkcolor : lightcolor,
          backgroundGradientTo: colorScheme === "dark" ? darkcolor : lightcolor,
          color(opacity, index) {
            return colorScheme === "dark" ? darkTextColor : lightTextColor;
          },
        }}
      />
    </View>
  );
};

export default Grafik;
