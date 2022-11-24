import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "react-native";
import { StatusBar as ExpoBar } from "expo-status-bar";
import { useState } from "react";
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
          <TouchableOpacity style={styles.goTo}></TouchableOpacity>
        </View>

        <View style={styles.btnSection}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>add new text</Text>
          </TouchableOpacity>

          <View style={styles.verticleLine}></View>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Work mode</Text>
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
    fontSize: 40,
    paddingHorizontal: 24,
    textTransform: "uppercase",
  },

  goTo: {},

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
    textTransform: "capitalize",
  },
  btnText: {
    color: foreground(),
    textAlign: "center",
  },
  verticleLine: {
    height: "100%",
    width: 1,
    backgroundColor: foreground(),
  },
});
