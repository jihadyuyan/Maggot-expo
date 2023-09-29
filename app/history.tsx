import { Modal, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import React from "react";
import DatePicker from "react-native-modern-datepicker";
import { Text, View } from "../components/Themed";
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
    <View lightColor="#f5f5f5" darkColor="#2f3254" style={styles.container}>
      <View
        lightColor="#f5f5f5"
        darkColor="#2f3254"
        style={[
          styles.boks,
          { borderColor: colorScheme === "dark" ? "#6455cd" : "#0d3876" },
        ]}
      >
        <TouchableOpacity>
          <Link href="/">
            <View lightColor="#e2e8f3" darkColor="#fff" style={styles.back}>
              <AntDesign
                name="doubleleft"
                size={24}
                color={colorScheme === "dark" ? "#2f3254" : "#0d3876"}
                style={styles.bek}
              />
            </View>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleOnPress}>
          <View lightColor="#e2e8f3" darkColor="#fff" style={styles.tombol}>
            <Text lightColor="#0d3876" darkColor="#2f3254" style={styles.dor}>
              Buka
            </Text>
            <Text lightColor="#0d3876" darkColor="#2f3254" style={styles.buka}>
              Kalender
            </Text>
            <MaterialCommunityIcons
              name="calendar-cursor"
              size={32}
              color={colorScheme === "dark" ? "#2f3254" : "#0d3876"}
              style={styles.kalender}
            />
            <Modal animationType="fade" transparent={true} visible={open}>
              <View
                lightColor="#f5f5f5"
                darkColor="#2f3254"
                style={styles.centeredView}
              >
                <View
                  lightColor="#f5f5f5"
                  darkColor="#fff"
                  style={styles.modalView}
                >
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
                  <TouchableOpacity onPress={handleOnPress}>
                    <Text
                      lightColor="#0d3876"
                      darkColor="#0d3876"
                      style={styles.tutup}
                    >
                      Tutup
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
        </TouchableOpacity>
        <View lightColor="#e2e8f3" darkColor="white" style={styles.topbox}>
          <Text lightColor="#0d3876" darkColor="#2f3254" style={styles.top}>
            History
          </Text>
          <Ionicons
            name="stats-chart-outline"
            size={18}
            color={colorScheme === "dark" ? "#2f3254" : "#0d3876"}
          />
        </View>
      </View>
      <Text lightColor="#0d3876" darkColor="#fff" style={styles.akun}>
        Hari ini, 24 April 2023
      </Text>
      <View lightColor="#e0e7f2" darkColor="#303355" style={styles.kotak}>
        <Text lightColor="#0d3876" darkColor="#fff" style={styles.stats}>
          Statistik
        </Text>
        {/* <View lightColor="#0d3876" darkColor="#6455cd" style={styles.metan}>
          <Text lightColor="#e2e8f3" darkColor="#fff" style={styles.ch4}>
            {" "}
            CH4{" "}
          </Text>
        </View>
        <View lightColor="#e2e8f3" darkColor="#ed7756" style={styles.amonia}>
          <Text lightColor="#0d3876" darkColor="#fff" style={styles.nh3}>
            {" "}
            NH3{" "}
          </Text>
        </View>
        <View lightColor="#e2e8f3" darkColor="#96cdc2" style={styles.monok}>
          <Text lightColor="#0d3876" darkColor="#fff" style={styles.co}>
            {" "}
            CO{" "}
          </Text>
        </View> */}
        <Card />
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
  boks: {
    height: 200,
    width: "100%",
    borderRadius: 10,
    marginTop: 35,
    borderWidth: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  tanggal: {
    fontFamily: "Nunito",
    fontSize: 17,
    fontWeight: "bold",
    position: "absolute",
    top: 10,
    left: 15,
  },
  tang: {
    fontFamily: "Nunito",
    fontSize: 17,
    fontWeight: "bold",
    position: "absolute",
    top: 28,
    left: 15,
  },
  back: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  bek: {
    position: "absolute",
    top: 8,
    left: 7,
  },
  topbox: {
    width: 150,
    height: 30,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.24,
    shadowRadius: 17.43,
    elevation: 21,
    position: "absolute",
    top: 2,
    right: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  top: {
    fontSize: 15,
    fontFamily: "PoppinsSemiBold",
  },
  tombol: {
    width: 100,
    height: 100,
    position: "absolute",
    right: 10,
    top: 30,
    borderRadius: 10,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "flex-start",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.24,
    shadowRadius: 17.43,
    elevation: 21,
  },
  dor: {
    fontFamily: "Nunito",
    fontSize: 15,
    fontWeight: "bold",
    position: "absolute",
    bottom: 25,
    left: 30,
  },
  buka: {
    fontSize: 15,
    fontFamily: "Nunito",
    fontWeight: "bold",
    position: "absolute",
    bottom: 8,
    left: 20,
  },
  kalender: {
    position: "absolute",
    top: 7,
    right: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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

  akun: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 25,
    marginTop: 30,
    marginLeft: 80,
  },
  kotak: {
    height: 500,
    flexDirection: "column",
    paddingLeft: 11,
    borderRadius: 10,
    gap: 5,
    marginTop: 20,
    paddingTop: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    marginBottom: 15,
  },
  stats: {
    fontFamily: "Nunito",
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    top: 15,
    left: 16,
  },
  metan: {
    height: 120,
    width: 350,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
    marginTop: 20,
  },
  ch4: {
    fontSize: 20,
    fontFamily: "Nunito",
    fontWeight: "bold",
    position: "absolute",
    top: 15,
    right: 15,
  },
  nh3: {
    fontSize: 20,
    fontFamily: "Nunito",
    fontWeight: "bold",
    position: "absolute",
    top: 15,
    right: 15,
  },
  amonia: {
    height: 120,
    width: 350,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
    marginTop: 20,
  },
  monok: {
    height: 120,
    width: 350,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
    marginTop: 20,
  },
  co: {
    fontSize: 20,
    fontFamily: "Nunito",
    fontWeight: "bold",
    position: "absolute",
    top: 15,
    right: 15,
  },
  tutup: {
    fontFamily: "Poppins",
    fontSize: 18,
    margin: 10,
  },
});
