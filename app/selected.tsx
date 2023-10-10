import { Text, View, TouchableOpacity } from "../components/Themed";
import Grafik from "../components/Grafik";
import { StyleSheet, ScrollView } from "react-native";
import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

export default function selected() {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.kotak,
          { borderColor: colorScheme === "dark" ? "#6455cd" : "#0d3876" },
        ]}
      >
        <TouchableOpacity
          lightColor="#0d3876"
          darkColor="#6455cd"
          style={styles.back}
        >
          <Link href="/history">
            <Text style={styles.text_regular}>Kembali Ke Kalender</Text>
          </Link>
        </TouchableOpacity>
        <ScrollView>
          <Text
            lightColor="#0d3876"
            darkColor="#6455cd"
            style={styles.text_sm_bold}
          >
            Gas Amonia
          </Text>
          <Grafik />
          <Text
            lightColor="#0d3876"
            darkColor="#ed7756"
            style={styles.text_sm_bold}
          >
            Gas Metana
          </Text>
          <Grafik />
          <Text
            lightColor="#0d3876"
            darkColor="#96cdc2"
            style={styles.text_sm_bold}
          >
            Gas Karbon Monoksida
          </Text>
          <Grafik />
        </ScrollView>
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
    justifyContent: "center",
    alignItems: "center",
  },
  back: {
    height: 40,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginBottom: 20,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },

  kotak: {
    width: "100%",
    height: 800,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,

    borderRadius: 10,
    borderWidth: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  text_sm_bold: {
    fontSize: 14,
    fontFamily: "PoppinsSemiBold",
  },
  text_regular: {
    fontFamily: "Poppins",
    fontSize: 15,
    color: "#fff",
  },
});
