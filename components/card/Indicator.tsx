import { Animated, Dimensions, View, StyleSheet } from "react-native";
import { useColorScheme } from "react-native";
import React from "react";

interface indicatorProps {
  data: any;
  scrollX: Animated.Value;
}

const { width } = Dimensions.get("window");

const Indicator: React.FC<indicatorProps> = ({ data, scrollX }) => {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.indicator}>
      {data.map((value: any, i: number) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidht = scrollX.interpolate({
          inputRange,
          outputRange: [1, 1.5, 1],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={i}
            style={[
              styles.circle,
              {
                opacity,
                transform: [{ scale: dotWidht }],
                backgroundColor: colorScheme === "dark" ? "#fff" : "#0d3876",
              },
            ]}
          />
        );
      })}
    </View>
  );
};

export default Indicator;

const styles = StyleSheet.create({
  indicator: {
    flexDirection: "row",
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});
