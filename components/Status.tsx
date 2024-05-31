import React from "react";
import { Text, View } from "./Themed";
import { StyleSheet } from "react-native";

type StatusProps = {
  color: string;
  label: string;
};

const Status = ({ color, label }: StatusProps) => {
  return (
    <View lightColor="#e2e8f3" darkColor="#6455cd" style={styles.dalam}>
      <View lightColor="#e2e8f3" darkColor="#6455cd">
        <Text style={styles.stats}>Status</Text>
        <View lightColor="#0d3876" darkColor="#fff" style={styles.garis}></View>
      </View>
      <View lightColor="#e2e8f3" darkColor="#6455cd" style={styles.indikator}>
        <View
          style={[
            styles.bulat,
            {
              backgroundColor: color,
            },
          ]}
        ></View>
        <Text style={styles.stat}>{label}</Text>
      </View>
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({
  text_sm_bold: {
    fontSize: 14,
    fontFamily: "PoppinsSemiBold",
  },
  dalam: {
    width: 165,
    borderRadius: 10,
    padding: 13,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  stats: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 18,
  },
  stat: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 15,
  },
  garis: {
    height: 2,
    borderRadius: 10,
    marginTop: 3,
  },
  bulat: {
    height: 25,
    width: 25,
    borderRadius: 10,
  },
  indikator: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
