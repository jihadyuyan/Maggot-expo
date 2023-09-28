import {
  StyleSheet,
  Touchable,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import Colors from "../../constants/Colors";
import Card from "../../components/card/Card";
import { StatusBar } from "expo-status-bar";

export default function TabOneScreen() {
  const colorScheme = useColorScheme();
  return (
    <View lightColor="#f5f5f5" darkColor="#2f3254" style={styles.container}>
      <View lightColor="#f5f5f5" darkColor="#2f3254" style={styles.bar}>
        <Text lightColor="#0d3876" darkColor="#fff" style={styles.atas}>
          HELLO.
        </Text>
        <Text lightColor="#0d3876" darkColor="#fff" style={styles.maggot}>
          Maggot App.
        </Text>
        <Text lightColor="#0d3876" darkColor="#fff" style={styles.tengah}>
          Home
        </Text>
        <AntDesign name="home" size={30} color="#f5f5f5" style={styles.logo} />
        <View
          lightColor="#0d3876"
          darkColor="#6455cd"
          style={styles.kotaklogo}
        ></View>
      </View>
      <View
        lightColor="#f5f5f5"
        darkColor="#2f3254"
        style={[
          styles.kotak,
          { borderColor: colorScheme === "dark" ? "#6455cd" : "#0d3876" },
        ]}
      >
        <Text lightColor="#0d3876" darkColor="#fff" style={styles.welcome}>
          Selamat Datang
        </Text>
        <Text lightColor="#0d3876" darkColor="#fff" style={styles.hari}>
          Senin / 24 April
        </Text>
        <Text lightColor="#0d3876" darkColor="#fff" style={styles.tanggal}>
          2023
        </Text>
        <View
          lightColor="#e2e8f3"
          darkColor="#6455cd"
          style={styles.tangandaun}
        >
          <Entypo
            name="leaf"
            color={colorScheme === "dark" ? "#fff" : "#0d3876"}
            size={20}
            style={styles.daun}
          />
          <FontAwesome5
            name="hand-holding"
            size={25}
            color={colorScheme === "dark" ? "#fff" : "#0d3876"}
            style={styles.tangan}
          />
        </View>
        <View lightColor="#e2e8f3" darkColor="#6455cd" style={styles.dalam}>
          <Text lightColor="#0d3876" darkColor="#fff" style={styles.status}>
            Status
          </Text>
          <View
            lightColor="#0d3876"
            darkColor="#fff"
            style={styles.garis}
          ></View>
          <View style={styles.bulat}></View>
          <Text lightColor="#0d3876" darkColor="#fff" style={styles.indikator}>
            Bahaya
          </Text>
        </View>
      </View>
      <Text lightColor="#0d3876" darkColor="#fff" style={styles.ongoing}>
        Gas yang Berjalan
      </Text>
      <View lightColor="#f5f5f5" darkColor="#2f3254" style={styles.kotakbesar}>
        <View lightColor="#0d3876" darkColor="#6455cd" style={styles.amoniabox}>
          <Text lightColor="#e2e8f3" darkColor="#fff" style={styles.amonia}>
            Gas Amonia
          </Text>
          <View lightColor="#e2e8f3" darkColor="#fff" style={styles.ruler1}>
            <Text lightColor="#0d3876" darkColor="#6455cd" style={styles.nh3}>
              NH3
            </Text>
          </View>
          <Text lightColor="#e2e8f3" darkColor="#fff" style={styles.prog1}>
            Progress
          </Text>
          <Text lightColor="#e2e8f3" darkColor="#fff" style={styles.angka1}>
            128 ppm
          </Text>
          <Entypo
            name="info-with-circle"
            size={20}
            color="#FFF"
            style={styles.dots}
          />
        </View>
        <View lightColor="#e2e8f3" darkColor="#ed7756" style={styles.metanabox}>
          <Text lightColor="#0d3876" darkColor="#fff" style={styles.metana}>
            Gas Metana
          </Text>
          <View lightColor="#0d3876" darkColor="#fff" style={styles.ruler2}>
            <Text lightColor="#e2e8f3" darkColor="#ed7756" style={styles.ch4}>
              CH4
            </Text>
          </View>
          <Text lightColor="#0d3876" darkColor="#fff" style={styles.prog2}>
            Progress
          </Text>
          <Text lightColor="#0d3876" darkColor="#fff" style={styles.angka2}>
            223 ppm
          </Text>
          <Entypo
            name="info-with-circle"
            size={20}
            color="#0d3876"
            style={styles.dots}
          />
        </View>
      </View>
      <View lightColor="#f5f5f5" darkColor="#2f3254" style={styles.kotakbesar}>
        <View lightColor="#e2e8f3" darkColor="#ed7756" style={styles.monobox}>
          <Text lightColor="#0d3876" darkColor="#fff" style={styles.monok}>
            Gas Karbon Monoksida
          </Text>
          <View lightColor="#0d3876" darkColor="#fff" style={styles.ruler3}>
            <Text lightColor="#e2e8f3" darkColor="#ed7756" style={styles.co}>
              {" "}
              CO
            </Text>
          </View>
          <Text lightColor="#0d3876" darkColor="#fff" style={styles.prog3}>
            Progress
          </Text>
          <Text lightColor="#0d3876" darkColor="#fff" style={styles.angka3}>
            32 ppm
          </Text>
          <Entypo
            name="info-with-circle"
            size={20}
            color="#0d3876"
            style={styles.dots}
          />
        </View>
        <TouchableOpacity>
          <View
            lightColor="#e2e8f3"
            darkColor="#96cdc2"
            style={styles.kotakhistory}
          >
            <Text lightColor="#0d3876" darkColor="#fff" style={styles.buka}>
              Buka
            </Text>
            <Text lightColor="#0d3876" darkColor="#fff" style={styles.bukah}>
              History
            </Text>
            <Ionicons
              name="stats-chart-outline"
              size={24}
              color={colorScheme === "dark" ? "#fff" : "#0d3876"}
              style={styles.history}
            />
            <View lightColor="#0d3876" darkColor="#fff" style={styles.kl}>
              <AntDesign
                name="doubleright"
                size={24}
                color={colorScheme === "dark" ? "#96cdc2" : "#fff"}
                style={styles.kanan}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View lightColor="#f5f5f5" darkColor="#2f3254" style={styles.slogan}>
        <Text lightColor="#0d3876" darkColor="#fff" style={styles.keep}>
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
  bar: {
    height: 100,
    width: "100%",
    marginTop: 25,
  },
  tengah: {
    fontSize: 15,
    position: "absolute",
    right: 167,
    fontFamily: "Nunito",
    fontWeight: "bold",
  },
  kalender: {
    position: "absolute",
    top: 20,
    right: 10,
  },

  logo: {
    position: "absolute",
    right: 10,
    top: 33,
    zIndex: 1,
  },
  kotaklogo: {
    height: 40,
    width: 40,
    position: "absolute",
    top: 30,
    right: 5,
    borderRadius: 10,
  },
  atas: {
    fontSize: 20,
    fontFamily: "Nunito",
    position: "absolute",
    top: 30,
    left: 10,
  },
  maggot: {
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    top: 48,
    left: 10,
  },
  welcome: {
    fontFamily: "Nunito",
    fontSize: 17,
    marginTop: 7,
    marginBottom: 5,
  },
  tanggal: {
    fontSize: 17,
    fontFamily: "Nunito",
    fontWeight: "bold",
    marginBottom: 5,
  },

  hari: {
    fontSize: 17,
    fontFamily: "Nunito",
    fontWeight: "bold",
  },
  dalam: {
    height: 100,
    width: 165,
    position: "absolute",
    top: 11,
    right: 10,
    borderRadius: 10,
  },

  status: {
    fontSize: 18,
    fontFamily: "Nunito",
    fontWeight: "bold",
    position: "absolute",
    top: 8,
    left: 10,
  },

  indikator: {
    fontSize: 18,
    fontFamily: "Nunito",
    fontWeight: "bold",
    position: "absolute",
    bottom: 20,
    left: 45,
  },
  tangandaun: {
    height: 45,
    width: 45,
    borderRadius: 10,
    position: "absolute",
    bottom: 15,
    left: 18,
  },
  tangan: {
    position: "absolute",
    bottom: 5,
    left: 8,
  },
  daun: {
    position: "absolute",
    left: 15,
    top: 6,
  },
  garis: {
    height: 3,
    width: 150,
    position: "absolute",
    top: 35,
    left: 8,
    borderRadius: 10,
  },

  kotak: {
    height: 170,
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderColor: "#0d3876",
    borderWidth: 4,
  },

  ongoing: {
    fontFamily: "Nunito",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  buka: {
    fontSize: 17,
    fontWeight: "bold",
    fontFamily: "Nunito",
    position: "absolute",
    left: 15,
    top: 10,
  },
  bukah: {
    fontSize: 17,
    fontFamily: "Nunito",
    fontWeight: "bold",
    position: "absolute",
    left: 15,
    top: 28,
  },

  bulat: {
    height: 20,
    width: 20,
    borderRadius: 20,
    position: "absolute",
    bottom: 20,
    left: 10,
    backgroundColor: "orange",
  },
  history: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  kotakbesar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 33,
    marginTop: 20,
  },

  kotakhistory: {
    height: 120,
    width: 160,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  kl: {
    height: 40,
    width: 40,
    borderRadius: 40,
    position: "absolute",
    bottom: 10,
    left: 15,
  },
  ruler1: {
    height: 40,
    width: 40,
    borderRadius: 40,
    justifyContent: "center",
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  kanan: {
    position: "absolute",
    top: 8,
    left: 9,
  },
  amoniabox: {
    height: 120,
    width: 160,
    borderRadius: 10,
    paddingHorizontal: 4,
    paddingVertical: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  amonia: {
    fontFamily: "Nunito",
    fontSize: 17,
    fontWeight: "bold",
    alignItems: "center",
    marginLeft: 5,
  },

  dots: {
    position: "absolute",
    top: 8,
    right: 10,
  },
  nh3: {
    fontSize: 15,
    fontFamily: "Nunito",
    fontWeight: "bold",
    marginLeft: 6,
  },
  angka1: {
    fontSize: 17,
    fontFamily: "Nunito",
    position: "absolute",
    right: 10,
    bottom: 10,
    fontWeight: "bold",
  },
  prog1: {
    fontFamily: "Nunito",
    position: "absolute",
    bottom: 33,
    right: 16,
    fontSize: 17,
  },
  metanabox: {
    height: 120,
    width: 160,
    borderRadius: 10,
    paddingHorizontal: 4,
    paddingVertical: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  metana: {
    fontFamily: "Nunito",
    fontSize: 17,
    fontWeight: "bold",
    alignItems: "center",
    marginLeft: 5,
  },
  ruler2: {
    height: 40,
    width: 40,
    borderRadius: 40,
    justifyContent: "center",
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  prog2: {
    fontFamily: "Nunito",
    position: "absolute",
    bottom: 33,
    right: 16,
    fontSize: 17,
  },
  angka2: {
    fontSize: 17,
    fontFamily: "Nunito",
    position: "absolute",
    right: 10,
    bottom: 10,
    fontWeight: "bold",
  },
  ch4: {
    fontSize: 15,
    fontFamily: "Nunito",
    fontWeight: "bold",
    marginLeft: 6,
  },
  monobox: {
    height: 120,
    width: 160,
    borderRadius: 10,
    paddingHorizontal: 4,
    paddingVertical: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  monok: {
    fontFamily: "Nunito",
    fontSize: 17,
    fontWeight: "bold",
    alignItems: "center",
    marginLeft: 5,
  },
  ruler3: {
    height: 40,
    width: 40,
    borderRadius: 40,
    justifyContent: "center",
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  co: {
    fontSize: 15,
    fontFamily: "Nunito",
    fontWeight: "bold",
    marginLeft: 6,
  },
  angka3: {
    fontSize: 17,
    fontFamily: "Nunito",
    position: "absolute",
    right: 10,
    bottom: 10,
    fontWeight: "bold",
  },
  prog3: {
    fontFamily: "Nunito",
    position: "absolute",
    bottom: 33,
    right: 16,
    fontSize: 17,
  },
  slogan: {
    height: 50,
    width: "100%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
  },
  keep: {
    fontFamily: "Nunito",
    fontSize: 18,
  },
});
