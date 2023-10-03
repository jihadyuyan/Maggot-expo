import { Modal, StyleSheet } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import React from "react";
import DatePicker from "react-native-modern-datepicker";
import { Text, TouchableOpacity, View } from "../components/Themed";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import Card from "../components/card/Card";

export default function TabTwoScreen() {
  const [selectedDate, setSelectedDate] = useState("");
  const [open, setOpen] = useState(false);
  function handleOnPress() {
    setOpen(!open);
  }
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          { borderColor: colorScheme === "dark" ? "#6455cd" : "#0d3876" },
        ]}
      >
        <View style={styles.header}>
          <TouchableOpacity
            lightColor="#0d3876"
            darkColor="#6455cd"
            style={styles.button}
          >
            <Link href="/">
              <AntDesign
                name="doubleleft"
                size={24}
                color={colorScheme === "dark" ? "white" : "#fff"}
              />
            </Link>
          </TouchableOpacity>
          <View lightColor="#0d3876" darkColor="#6455cd" style={styles.history}>
            <Text lightColor="#fff" darkColor="white" style={styles.text_sm}>
              History
            </Text>
            <Ionicons
              name="stats-chart-outline"
              size={18}
              color={colorScheme === "dark" ? "white" : "#fff"}
            />
          </View>
        </View>
        <View style={styles.calendar}>
          <Text style={styles.text_cd_bold}> Senin, {`\n`} 24 April 2023</Text>
          <TouchableOpacity
            lightColor="#0d3876"
            darkColor="#6455cd"
            style={styles.tombol}
            onPress={handleOnPress}
          >
            <View
              lightColor="#0d3876"
              darkColor="#6455cd"
              style={{ alignItems: "flex-end" }}
            >
              <MaterialCommunityIcons
                name="calendar-cursor"
                size={32}
                color={colorScheme === "dark" ? "white" : "#fff"}
              />
            </View>
            <Text lightColor="#fff" darkColor="white" style={styles.text_sm}>
              Buka kalender
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal animationType="fade" transparent={true} visible={open}>
        <View
          lightColor="#f5f5f5"
          darkColor="#2f3254"
          style={styles.centeredView}
        >
          <View lightColor="#fff" darkColor="#fff" style={styles.modalView}>
            <DatePicker
              mode="calendar"
              onSelectedChange={(date) => setSelectedDate(date)}
              options={{
                textHeaderColor: "#0d3876",
                textDefaultColor: "#0d3876",
                selectedTextColor: "#fff",
                mainColor: "#0d3876",
                defaultFont: "Poppins",
                textSecondaryColor: "#0d3876",
                headerFont: "PoppinsSemiBold",
              }}
            />
            <TouchableOpacity
              lightColor="#f5f5f5"
              darkColor="#fff"
              style={styles.tutup}
              onPress={handleOnPress}
            >
              <Text
                lightColor="#0d3876"
                darkColor="#0d3876"
                style={styles.text_sm}
              >
                Tutup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View lightColor="#e0e7f2" darkColor="#303355" style={styles.kotak}>
        <Text
          lightColor="#0d3876"
          darkColor="#fff"
          style={[
            styles.text_md_bold,
            {
              margin: 20,
            },
          ]}
        >
          Statistik
        </Text>
        <Card
          title="GAS AMONIA"
          lightcolor="#0d3876"
          darkcolor="#6455cd"
          lightcolortext="#f5f5f5"
          darkcolortext="#f5f5f5"
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  box: {
    width: "100%",
    borderRadius: 10,
    marginTop: 35,
    borderWidth: 5,
    padding: 15,
  },
  header: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  history: {
    height: 40,
    width: 100,
    borderRadius: 10,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  tombol: {
    width: 100,
    height: 100,
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.24,
    shadowRadius: 17.43,
    elevation: 21,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    width: "90%",
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  tutup: {
    width: "50%",
    height: 50,
    borderRadius: 10,
    borderColor: "#0d3876",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  kotak: {
    borderRadius: 5,
    marginTop: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  text_sm: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 15,
  },
  icon: {
    width: 50,
    height: 50,
  },
  calendar: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginTop: 20,
  },
  text_md_bold: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 20,
  },
  text_cd_bold: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 17,
  },
});
