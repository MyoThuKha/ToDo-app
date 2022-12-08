import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "react-native";
import Tasks from "../components/tasks";
import { useSelector } from "react-redux";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import AppBar from "../components/appBar";
import globalStyle from "../styles/global";

// return "#f2eee9";

const Home = ({ navigation }: { navigation: any }) => {
  const foreground: string = useSelector((state: any) => state.user.foreground);
  const background: string = useSelector((state: any) => state.user.background);
  const username: string = useSelector((state: any) => state.user.firstname);
  return (
    <View style={{ ...styles.container, backgroundColor: background }}>
      {/* app bar */}
      <AppBar />

      {/* middle Section */}
      <View style={styles.section1}>
        <View style={styles.greet}>
          <Text
            style={[
              globalStyle.display,
              styles.mainText,
              { color: foreground },
            ]}
          >
            rise and{"\n"}shine, {username}!{"\n"}how are you feeling{"\n"}
            today?
          </Text>
          <TouchableOpacity
            style={{ ...globalStyle.goTo, backgroundColor: foreground }}
          >
            <AntDesign name="arrowright" size={24} color={background} />
          </TouchableOpacity>
        </View>

        {/* Add new text and work mode */}
        <View style={{ ...styles.btnSection, borderTopColor: foreground }}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("create")}
          >
            <View style={styles.btnContent}>
              <AntDesign name="plus" size={24} color={foreground} />
              <Text style={{ ...styles.btnText, color: foreground }}>
                add new task
              </Text>
            </View>
          </TouchableOpacity>

          <View
            style={{ ...styles.verticleLine, backgroundColor: foreground }}
          ></View>

          <TouchableOpacity style={styles.btn}>
            <View style={styles.btnContent}>
              <MaterialIcons name="laptop" size={24} color={foreground} />
              <Text style={{ ...styles.btnText, color: foreground }}>
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
