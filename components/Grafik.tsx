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
          labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00"],
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
