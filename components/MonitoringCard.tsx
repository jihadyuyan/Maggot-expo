import React from "react";
import { Text, View } from "./Themed";
import { StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

type MonitoringCardProps = {
  title: string;
  lightColor?: string;
  darkColor?: string;
  sub?: string;
  value?: number;
  LightTextColor?: string;
};

const MonitoringCard = ({
  title,
  sub,
  value,
  darkColor,
  lightColor,
  LightTextColor,
}: MonitoringCardProps) => {
  return (
    <>
      <View lightColor={lightColor} darkColor={darkColor} style={Style.card}>
        <View lightColor={lightColor} darkColor={darkColor} style={Style.title}>
          <Text lightColor={LightTextColor} style={Style.text_sm_bold}>
            {title}
          </Text>
          <Entypo name="info-with-circle" size={20} color="#FFF" />
        </View>
        <View
          lightColor={lightColor}
          darkColor={darkColor}
          style={Style.indikator}
        >
          <View lightColor={LightTextColor} darkColor="#fff" style={Style.sub}>
            <Text
              lightColor={lightColor}
              darkColor={darkColor}
              style={Style.text_sm_bold}
            >
              {sub}
            </Text>
          </View>
          <View
            lightColor={lightColor}
            darkColor={darkColor}
            style={Style.value}
          >
            <Text lightColor={LightTextColor} style={Style.text_sm}>
              Progress
            </Text>
            <Text lightColor={LightTextColor} style={Style.text_sm_bold}>
              {value} ppm
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default MonitoringCard;

const Style = StyleSheet.create({
  card: {
    width: "45%",
    height: 150,
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexGrow: 1,
  },
  indikator: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  sub: {
    width: 50,
    height: 50,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  value: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  text_sm_bold: {
    fontSize: 15,
    fontFamily: "PoppinsSemiBold",
  },
  text_sm: {
    fontSize: 15,
    fontFamily: "PoppinsRegular",
  },
});
