import React from "react";
import { Text, View } from "./Themed";
import { StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
type GrafikProps = {
  lightcolor?: string;
  darkcolor?: string;
  yaxis?: number;
};

const Grafik = ({ lightcolor, darkcolor, yaxis }: GrafikProps) => {
  return (
    <>
      <LineChart
        data={{
          labels: ["04:00", "08:00", "12:00", "16:00", "20:00", "24:00"],
          datasets: [
            {
              data: [0, 50, 100, 500, 1000],
            },
          ],
        }}
        width={310}
        height={280}
        yAxisLabel=""
        yAxisSuffix=" ppm"
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: "#0d3876",
          backgroundGradientFrom: "#f5f5f5",
          backgroundGradientTo: "#f5f5f5",
          decimalPlaces: 0, //
          color: (opacity = 1) => "#000000",
          labelColor: (opacity = 1) => "#000000",
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "5",
            strokeWidth: "1",
            stroke: "#fff",
          },
          propsForLabels: {
            fontFamily: "PoppinsSemoBold",
            fontSize: 12,
          },
        }}
        bezier={false}
        style={{
          marginVertical: 5,
          borderRadius: 10,
        }}
      />
    </>
  );
};

export default Grafik;
