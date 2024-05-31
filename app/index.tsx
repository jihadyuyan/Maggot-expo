import { StyleSheet, useColorScheme } from "react-native";
import { AntDesign, FontAwesome5, Entypo, Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "../components/Themed";
import { Link } from "expo-router";
import { Header } from "../components/Header";
import Status from "../components/Status";
import MonitoringCard from "../components/MonitoringCard";

import { useState, useEffect } from "react";

import { collection, doc, onSnapshot } from "firebase/firestore";
import { FIREBASE_DB } from "../config/firebaseConfig";

import registerNNPushToken from "native-notify";

export default function TabOneScreen() {
  registerNNPushToken(21593, "QbC2IFrrEDVHv7IcVjHATX");
  const locale = "en";
  const [data, setData] = useState<any>();
  const colorScheme = useColorScheme();

  const dateTime = new Date();
  const year = dateTime.getFullYear();
  const month = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ][dateTime.getMonth()];
  const date = dateTime.getDate();
  const day = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"][
    dateTime.getDay()
  ];

  useEffect(() => {
    const ref = collection(FIREBASE_DB, "tools");
    const Documents = doc(ref, "monitoring");

    const unSubscribe = onSnapshot(Documents, (snapshot) => {
      const data: any = snapshot.data();
      setData(data);
    });

    return () => unSubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Home" />
      <View style={styles.hero}>
        <View>
          <Text style={styles.text}>HELLO.</Text>
          <Text style={styles.title}>Maggot App.</Text>
        </View>
      </View>

      <View
        style={[
          styles.kotak,
          { borderColor: colorScheme === "dark" ? "#6455cd" : "#0d3876" },
        ]}
      >
        <View>
          <Text style={styles.text_sm}>Selamat Datang.</Text>
          <Text
            lightColor="#0d3876"
            darkColor="#f5f5f5"
            style={[styles.dett, { flexGrow: 1 }]}
          >
            {day} / {date} {month}
          </Text>
          <Text lightColor="#0d3876" darkColor="#f5f5f5" style={styles.dett}>
            {year}
          </Text>
          <View
            lightColor="#e2e8f3"
            darkColor="#6455cd"
            style={styles.tangandaun}
          >
            <Entypo
              name="leaf"
              color={colorScheme === "dark" ? "#fff" : "#0d3876"}
              size={18}
              style={styles.daun}
            />
            <FontAwesome5
              name="hand-holding"
              size={18}
              color={colorScheme === "dark" ? "#fff" : "#0d3876"}
              style={styles.tangan}
            />
          </View>
        </View>
        {data?.fuzzy >= 0 && data?.fuzzy <= 50 && (
          <Status color="#0A8200" label="Normal" />
        )}
        {data?.fuzzy > 50 && data?.fuzzy <= 100 && (
          <Status color="#FFC700" label="Bahaya" />
        )}
        {data?.fuzzy > 100 && data?.fuzzy <= 150 && (
          <Status color="#FF0000" label="Sangat Bahaya" />
        )}
      </View>
      <Text lightColor="#0d3876" darkColor="#fff" style={styles.title}>
        Monitoring
      </Text>
      <View style={{ flexGrow: 1 }}>
        <View style={styles.monitoring}>
          <MonitoringCard
            title="Gas Amonia"
            sub="NH3"
            value={data?.amonia}
            backgroundsub={
              data?.amonia <= 25
                ? "green"
                : data?.amonia <= 50
                ? "#FFC700"
                : "#FF0000"
            }
            lightColor="#0d3876"
            darkColor="#6455cd"
            LightTextColor="#fff"
          />
          <MonitoringCard
            title="Gas Metana"
            sub="CH4"
            value={data?.metana}
            lightColor="#e2e8f3"
            darkColor="#ed7756"
            LightTextColor="#0d3876"
            backgroundsub={
              data?.metana <= 200
                ? "green"
                : data?.amonia <= 300
                ? "#FFC700"
                : "#FF0000"
            }
          />
        </View>
        <View style={styles.monitoring}>
          <MonitoringCard
            title="Gas Karbon Monoksida"
            sub="CO"
            value={data?.karbonmonoksida}
            lightColor="#e2e8f3"
            darkColor="#ed7756"
            LightTextColor="#0d3876"
            backgroundsub={
              data?.karbonmonoksida <= 8
                ? "green"
                : data?.karbonmonoksida <= 25
                ? "#FFC700"
                : "#FF0000"
            }
          />
          <View lightColor="#e2e8f3" darkColor="#96cdc2" style={styles.button}>
            <View
              lightColor="#e2e8f3"
              darkColor="#96cdc2"
              style={styles.history}
            >
              <Text
                lightColor="#0d3876"
                darkColor="#2f3254"
                style={styles.text_sm_bold}
              >
                Buka {`\n`}History
              </Text>
              <Ionicons
                name="stats-chart-outline"
                size={30}
                color={colorScheme === "dark" ? "#2f3254" : "#0d3876"}
              />
            </View>
            <TouchableOpacity
              lightColor="#0d3876"
              darkColor="#2f3254"
              style={styles.icon}
            >
              <Link href="/history">
                <AntDesign
                  name="doubleright"
                  size={28}
                  color={colorScheme === "dark" ? "#96cdc2" : "#fff"}
                />
              </Link>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View lightColor="#f5f5f5" darkColor="#2f3254" style={styles.slogan}>
        <Text lightColor="#0d3876" darkColor="#fff" style={styles.tagline}>
          Keep Healthy and Happy 🍃
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
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
  hero: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontFamily: "Poppins",
    fontSize: 20,
  },
  kotak: {
    height: 170,
    width: "100%",
    marginVertical: 20,
    borderRadius: 10,
    padding: 20,
    borderColor: "#0d3876",
    borderWidth: 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  dett: {
    fontSize: 17,
    fontFamily: "PoppinsSemiBold",
  },
  kotaklogo: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    borderRadius: 10,
  },
  text_sm: {
    fontFamily: "Poppins",
    fontSize: 15,
  },
  text_sm_bold: {
    fontSize: 16,
    fontFamily: "PoppinsSemiBold",
  },
  tangandaun: {
    height: 40,
    width: 40,
    borderRadius: 10,
    marginTop: 15,
  },
  tangan: {
    position: "absolute",
    bottom: 5,
    left: 10,
  },
  daun: {
    position: "absolute",
    left: 13,
    top: 6,
  },
  monitoring: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 2,
    marginBottom: 33,
    marginTop: 20,
  },
  button: {
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
  history: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    flexGrow: 1,
  },

  icon: {
    width: 50,
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text_link: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 12,
    color: "#fff",
    width: 100,
  },
  slogan: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  tagline: {
    fontSize: 13,
    fontFamily: "Poppins",
  },
});
