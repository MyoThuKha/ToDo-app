import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "react-native";
import Tasks from "../components/tasks";
import globalStyle from "../styles/global";

import { useSelector } from "react-redux";
import Greet from "../components/greet";

// return "#f2eee9";

const Home = () => {
  const foreground: string = useSelector((state: any) => state.user.foreground);
  const background: string = useSelector((state: any) => state.user.background);

  return (
    <View style={{ ...styles.container, backgroundColor: background }}>
      {/* app bar */}
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
            Friday, Oct 8
          </Text>
        </View>
        <View style={styles.profile}></View>
      </View>
      <Greet />
      <Tasks />
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
