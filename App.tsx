import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "react-native";
import { StatusBar as ExpoBar } from "expo-status-bar";
import { useState } from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import Tasks from "./components/tasks";

const background = (): string => {
  return "black";
};
const foreground = () => {
  return background() === "white" ? "black" : "white";
};

export default function App() {
  const [name, setName] = useState("Bella");
  return (
    <View style={styles.container}>
      <ExpoBar style="auto" />

      {/* App bar*/}
      <View style={styles.header}>
        <View>
          <Text style={styles.today}>Today</Text>
          <Text style={styles.date}>Friday, Oct 8</Text>
        </View>
        <View style={styles.profile}></View>
      </View>

      {/* greeting */}
      <View style={styles.section1}>
        <View style={styles.greet}>
          <Text style={styles.mainText}>
            rise and{"\n"}shine, {name}!{"\n"}how are you feeling{"\n"}today?
          </Text>
          <TouchableOpacity style={styles.goTo}>
            <AntDesign name="arrowright" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.btnSection}>
          <TouchableOpacity style={styles.btn}>
            <View style={styles.btnContent}>
              <AntDesign name="plus" size={24} color={foreground()} />
              <Text style={styles.btnText}>add new text</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.verticleLine}></View>

          <TouchableOpacity style={styles.btn}>
            <View style={styles.btnContent}>
              <MaterialIcons
                name="work-outline"
                size={24}
                color={foreground()}
              />
              <Text style={styles.btnText}>Work mode</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* tasks */}
      <Tasks foreground={foreground} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    height: "100%",
    backgroundColor: background(),
  },

  //------------------------
  // App Bar
  header: {
    paddingHorizontal: 24,
    borderBottomColor: foreground(),
    borderBottomWidth: 1,
    paddingBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  today: {
    color: foreground(),
    fontSize: 20,
  },
  date: {
    color: foreground(),
    fontSize: 15,
  },
  profile: {
    borderRadius: 50,
    width: 50,
    height: 50,
    backgroundColor: foreground(),
  },

  //------------------------
  section1: {
    justifyContent: "space-between",
    flex: 1,
  },

  //-----------------------
  greet: {
    flex: 1,
    justifyContent: "center",
    position: "relative",
  },
  mainText: {
    color: foreground(),
    fontSize: 35,
    paddingHorizontal: 24,
    textTransform: "uppercase",
  },

  goTo: {
    backgroundColor: foreground(),
    width: 69,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    right: 24,
  },

  //------------------------
  //Buttons
  btnSection: {
    borderTopColor: foreground(),
    borderTopWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 72,
  },
  btn: {
    flex: 1,
    alignItems: "center",
  },
  btnContent: {
    flexDirection: "row",
    alignItems: "center",
  },

  btnText: {
    color: foreground(),
    textTransform: "capitalize",
    paddingLeft: 5,
  },
  verticleLine: {
    height: "100%",
    width: 1,
    backgroundColor: foreground(),
  },
});
