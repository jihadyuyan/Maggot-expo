import { StyleSheet } from "react-native";
import React from "react";
import { Text, View } from "./Themed";
import { AntDesign } from "@expo/vector-icons";

type headerProps = {
  title: string;
};

export function Header({ title }: headerProps) {
  return (
    <View style={Style.header}>
      <Text style={Style.title}>{title}</Text>
      <AntDesign name="home" size={18} color="#f5f5f5" />
    </View>
  );
}

const Style = StyleSheet.create({
  header: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 20,
  },
});
