import React from "react";
import { Text, View } from "./Themed";
import { StyleSheet, Dimensions, useColorScheme } from "react-native";
import { LineChart } from "react-native-chart-kit";
type GrafikProps = {
  lightcolor?: string;
  darkcolor?: string;
  lightTextColor: string;
  darkTextColor: string;
  yaxis: number[];
};

const { height, width } = Dimensions.get("window");

const Grafik = ({
  lightcolor,
  darkcolor,
  lightTextColor,
  darkTextColor,
  yaxis,
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
          labels: yaxis.map((item, index) => {
            // return time per index
            if (index === 0) {
              return "00:00";
            } else if (index === 1) {
              return "04:00";
            } else if (index === 2) {
              return "08:00";
            } else if (index === 3) {
              return "12:00";
            } else if (index === 4) {
              return "16:00";
            } else if (index === 5) {
              return "20:00";
            } else {
              return "00:00";
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
