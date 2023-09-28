import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import React from "react";

type headerProps = {
  title: string;
};

export function Header({ title }: headerProps) {
  return (
    <View style={Style.header}>
      <Text style={Style.title}>{title}</Text>
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
