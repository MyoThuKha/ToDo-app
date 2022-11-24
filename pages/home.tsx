import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import Tasks from "../components/tasks";
import { useState } from "react";
import Display from "../components/displayText";

const background = (): string => {
  // return "#f2eee9";
  return "black";
};
const foreground = () => {
  return background() === "#f2eee9" ? "black" : "white";
};
const Home = () => {
  const [username, setusername] = useState("Bella");
  return (
    <>
      <View style={styles.header}>
        <View>
          <Display style={styles.today}>Today</Display>
          <Display style={styles.date}>Friday, Oct 8</Display>
        </View>
        <View style={styles.profile}></View>
      </View>

      {/* greeting */}
      <View style={styles.section1}>
        <View style={styles.greet}>
          <Display style={styles.mainText}>
            rise and{"\n"}shine, {username}!{"\n"}how are you feeling{"\n"}
            today?
          </Display>
          <TouchableOpacity style={styles.goTo}>
            <AntDesign name="arrowright" size={24} color={background()} />
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
      <Tasks foreground={foreground} background={background} />
    </>
  );
};

export default Home;

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
    flex: 5,
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
    // fontFamily: "display",
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
    // fontFamily: "display",
    paddingLeft: 5,
  },
  verticleLine: {
    height: "100%",
    width: 1,
    backgroundColor: foreground(),
  },
});
