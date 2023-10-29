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
        <Text style={styles.text_sm_bold}>Status</Text>
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
        <Text style={styles.text_sm_bold}>{label}</Text>
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
    padding: 10,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  garis: {
    height: 3,
    borderRadius: 10,
  },
  bulat: {
    height: 20,
    width: 20,
    borderRadius: 20,
  },
  indikator: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
