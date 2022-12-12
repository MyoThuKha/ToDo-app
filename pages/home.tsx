import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "react-native";
import Tasks from "../components/tasks";
import { useSelector } from "react-redux";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import AppBar from "../components/appBar";
import globalStyle from "../styles/global";
import { useColorScheme } from "react-native";
import moment from "moment";
import { useCallback } from "react";

// return "#f2eee9";

const Home = ({ navigation }: { navigation: any }) => {
  let color = useColorScheme();
  const frontColor = color === "light" ? "black" : "white";
  const backColor = color === "light" ? "#f2eee9" : "black";

  const greetUser = useCallback((name: string): string => {
    var currentHour = parseInt(moment().format("HH"));
    if (currentHour >= 3 && currentHour < 12) {
      return `rise and${"\n"}shine, ${name}!${"\n"}how are you feeling${"\n"}today?`;
    } else if (currentHour >= 12 && currentHour < 15) {
      return `Good${"\n"}Siesta, ${name}!${"\n"}how are you feeling${"\n"}today?`;
    } else if (currentHour >= 15 && currentHour < 20) {
      return `Good${"\n"}Evening, ${name}!${"\n"}how are you feeling${"\n"}today?`;
    } else if (currentHour >= 20 && currentHour < 3) {
      return `Beautiful${"\n"}Night, ${name}!${"\n"}how are you feeling${"\n"}today?`;
    } else {
      return "Hello";
    }
  }, []);

  const username: string = useSelector((state: any) => state.user.firstname);
  return (
    <View style={{ ...styles.container, backgroundColor: backColor }}>
      {/* app bar */}
      <AppBar frontColor={frontColor} backColor={backColor} />

      {/* middle Section */}
      <View style={styles.section1}>
        <View style={styles.greet}>
          <Text
            style={[
              globalStyle.display,
              styles.mainText,
              { color: frontColor },
            ]}
          >
            {greetUser(username)}
          </Text>
          <TouchableOpacity
            style={{ ...globalStyle.goTo, backgroundColor: frontColor }}
          >
            <AntDesign name="arrowright" size={24} color={backColor} />
          </TouchableOpacity>
        </View>

        <View style={{ ...styles.btnSection, borderTopColor: frontColor }}>
          {/* Add new text */}
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("create")}
          >
            <View style={styles.btnContent}>
              <AntDesign name="plus" size={24} color={frontColor} />
              <Text style={{ ...styles.btnText, color: frontColor }}>
                add new task
              </Text>
            </View>
          </TouchableOpacity>

          <View
            style={{ ...globalStyle.verticleLine, backgroundColor: frontColor }}
          ></View>

          {/* Logout (to implement) */}
          <TouchableOpacity style={styles.btn}>
            <View style={styles.btnContent}>
              <AntDesign name="logout" size={24} color={frontColor} />
              <Text style={{ ...styles.btnText, color: frontColor }}>
                Log Out
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Tasks />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
  section1: {
    justifyContent: "space-between",
    flex: 5,
  },
  greet: {
    flex: 1,
    justifyContent: "center",
    position: "relative",
  },
  mainText: {
    fontSize: 35,
    paddingHorizontal: 24,
    textTransform: "uppercase",
  },
  //Buttons
  btnSection: {
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
    textTransform: "capitalize",
    paddingLeft: 5,
  },
});

export default Home;
