import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "react-native";
import Tasks from "../components/tasks";
import { useSelector } from "react-redux";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import AppBar from "../components/appBar";
import globalStyle from "../styles/global";
import { useColorScheme } from "react-native";

// return "#f2eee9";

const Home = ({ navigation }: { navigation: any }) => {
  let color = useColorScheme();
  const frontColor = color === "light" ? "black" : "white";
  const backColor = color === "light" ? "#f2eee9" : "black";

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
            rise and{"\n"}shine, {username}!{"\n"}how are you feeling{"\n"}
            today?
          </Text>
          <TouchableOpacity
            style={{ ...globalStyle.goTo, backgroundColor: frontColor }}
          >
            <AntDesign name="arrowright" size={24} color={backColor} />
          </TouchableOpacity>
        </View>

        {/* Add new text and work mode */}
        <View style={{ ...styles.btnSection, borderTopColor: frontColor }}>
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
            style={{ ...styles.verticleLine, backgroundColor: frontColor }}
          ></View>

          <TouchableOpacity style={styles.btn}>
            <View style={styles.btnContent}>
              <MaterialIcons name="laptop" size={24} color={frontColor} />
              <Text style={{ ...styles.btnText, color: frontColor }}>
                Work mode
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
  verticleLine: {
    height: "100%",
    width: 1,
  },
});

export default Home;
