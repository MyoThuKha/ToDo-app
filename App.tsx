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
      <View style={styles.section1}>
        {/* time and account */}
        <View style={styles.header}>
          <Text style={styles.text}>Today</Text>
          <Text style={styles.date}>Friday, Oct 8</Text>
        </View>

        {/* greeting */}
        <View style={styles.middle}>
          <View style={styles.greet}>
            <Text style={styles.mainText}>
              rise and{"\n"}shine, {name}!{"\n"}how are you feeling{"\n"}today?
            </Text>
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
  section1: {
    flex: 5,
  },
  header: {
    paddingHorizontal: 24,
    borderBottomColor: foreground(),
    borderBottomWidth: 1,
    paddingBottom: 15,
  },
  text: {
    color: foreground(),
    fontSize: 20,
  },
  date: {
    color: foreground(),
    fontSize: 15,
  },

  middle: {
    paddingVertical: 24,
    flex: 1,
  },
  greet: {
    flex: 1,
  },
  mainText: {
    color: foreground(),
    fontSize: 40,
    paddingHorizontal: 24,
    textTransform: "uppercase",
  },
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
