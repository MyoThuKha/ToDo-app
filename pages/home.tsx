import { StyleSheet, Text, View } from "react-native";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { StatusBar } from "react-native";
import Tasks from "../components/tasks";
import globalStyle from "../styles/global";
import { useState } from "react";
import { useSelector } from "react-redux";
import Greet from "../components/greet";
import CreateTask from "../components/create";
import moment from "moment";

// return "#f2eee9";

const Home = () => {
  const foreground: string = useSelector((state: any) => state.user.foreground);
  const background: string = useSelector((state: any) => state.user.background);
  const date = new Date();

  const [day, month, dateOfMonth] = [
    moment().format("dddd"),
    moment().format("MMM"),
    date.getDate(),
  ];

  const [createMode, setCreateMode] = useState(false);
  const handleCreate = () => setCreateMode(true);
  return (
    <View style={{ ...styles.container, backgroundColor: background }}>
      {/* app bar */}
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{ ...styles.header, borderBottomColor: foreground }}>
          <View>
            <Text
              style={[globalStyle.display, styles.today, { color: foreground }]}
            >
              Today
            </Text>
            <Text
              style={[globalStyle.display, styles.date, { color: foreground }]}
            >
              {/* Friday, Oct 8 */}
              {day + ", " + month + " " + dateOfMonth}
            </Text>
          </View>
          {/* <View style={styles.profile}></View> */}
          {<Text style={{ color: foreground }}>{moment().format("LT")}</Text>}
        </View>
      </TouchableWithoutFeedback>
      {!createMode && <Greet create={handleCreate} />}
      {createMode && <CreateTask />}
      {!createMode && <Tasks />}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },

  header: {
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    paddingBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  today: {
    fontSize: 20,
  },
  date: {
    fontSize: 15,
  },
  profile: {
    borderRadius: 50,
    width: 50,
    height: 50,
  },
});
