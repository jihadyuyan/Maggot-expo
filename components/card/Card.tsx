import { Animated, Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { Text, View } from "../Themed";
import React, { useState, useEffect } from "react";
import Grafik from "../Grafik";
import Indicator from "./Indicator";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { FIREBASE_DB } from "../../config/firebaseConfig";
import { getToday } from "react-native-modern-datepicker";

const { width } = Dimensions.get("window");

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

interface CardProps<TData> {
  data: TData[];
}

export default function Card<TData>({ data }: CardProps<TData>) {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <>
      <View style={Style.heading}>
        <Text lightColor="#0d3876" darkColor="#fff" style={Style.text_md_bold}>
          Statistik
        </Text>
        <Indicator data={DATA} scrollX={scrollX} />
      </View>
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
            lightColor="#f5f5f5"
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
              {item.title === "GAS AMONIA" ? (
                <Grafik
                  darkcolor={item.darkcolor}
                  lightcolor={item.lightcolor}
                  lightTextColor={item.LightTextColor}
                  darkTextColor={item.DarkTextColor}
                  yaxis={
                    data && data.length > 0
                      ? data.map((item: any) => item.amonia)
                      : [0, 0, 0, 0, 0, 0]
                  }
                  ylabel={
                    data && data.length > 0
                      ? data.map((item: any) => item.jam)
                      : [0, 0, 0, 0, 0, 0]
                  }
                />
              ) : item.title === "GAS METANA" ? (
                <Grafik
                  darkcolor={item.darkcolor}
                  lightcolor={item.lightcolor}
                  lightTextColor={item.LightTextColor}
                  darkTextColor={item.DarkTextColor}
                  yaxis={
                    data && data.length > 0
                      ? data.map((item: any) => item.metana)
                      : [0, 0, 0, 0, 0, 0]
                  }
                  ylabel={
                    data && data.length > 0
                      ? data.map((item: any) => item.jam)
                      : [0, 0, 0, 0, 0, 0]
                  }
                />
              ) : (
                <Grafik
                  darkcolor={item.darkcolor}
                  lightcolor={item.lightcolor}
                  lightTextColor={item.LightTextColor}
                  darkTextColor={item.DarkTextColor}
                  yaxis={
                    data && data.length > 0
                      ? data.map((item: any) => item.karbonmonoksida)
                      : [0, 0, 0, 0, 0, 0]
                  }
                  ylabel={
                    data && data.length > 0
                      ? data.map((item: any) => item.jam)
                      : [0, 0, 0, 0, 0, 0]
                  }
                />
              )}
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
    width: width - 40,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
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
  text_md_bold: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 20,
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
  },
});
