import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "react-native";
import { StatusBar as ExpoBar } from "expo-status-bar";
import { useState } from "react";

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
        <View style={styles.greet}>
          <Text style={styles.mainText}>
            rise and{"\n"}shine, {name}!{"\n"}how are you feeling{"\n"}today?
          </Text>
          <View style={styles.btns}>
            <Text style={styles.btn}>add new text</Text>
            <View style={styles.verticleLine}></View>
            <Text style={styles.btn}>Work mode</Text>
          </View>
        </View>
      </View>

      {/* tasks */}
      <View style={styles.section2}>
        <Text>Your Routine</Text>
        <Text>Drink 1 glass of water</Text>
        <Text>Meditate for 10 mins</Text>
      </View>
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

  greet: {
    paddingVertical: 24,
  },
  mainText: {
    color: foreground(),
    fontSize: 40,
    paddingHorizontal: 24,
    textTransform: "uppercase",
  },
  btns: {
    borderTopColor: foreground(),
    borderTopWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 72,
  },
  btn: {
    color: foreground(),
    flex: 1,
    textAlign: "center",
    textTransform: "capitalize",
  },
  verticleLine: {
    height: "100%",
    width: 1,
    backgroundColor: foreground(),
  },

  //
  section2: {
    flex: 4,
    backgroundColor: foreground(),
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
});
