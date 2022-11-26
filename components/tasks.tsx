import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import globalStyle from "../styles/global";

interface tasksProps {
  foreground: () => string;
  background: () => string;
}

const Tasks: React.FC<tasksProps> = ({ foreground, background }) => {
  const data = [
    { text: "drink 1 glass of water", key: "0" },
    { text: "Meditate for 10 mins", key: "1" },
    { text: "drink 1 glass of water", key: "2" },
    { text: "Meditate for 10 mins", key: "3" },
    { text: "drink 1 glass of water", key: "4" },
    { text: "drink 1 glass of water", key: "5" },
    { text: "drink 1 glass of water", key: "6" },
    { text: "Meditate for 10 mins", key: "7" },
    { text: "Meditate for 10 mins", key: "8" },
    { text: "Meditate for 10 mins", key: "9" },
    { text: "drink 1 glass of water", key: "10" },
    { text: "Meditate for 10 mins hey", key: "11" },
  ];
  return (
    <View style={[styles.section2, { backgroundColor: foreground() }]}>
      <Text style={{ ...globalStyle.display, ...styles.title }}>
        Your Routine
      </Text>
      <View style={styles.total}>
        <Text style={{ borderRightColor: foreground(), borderRightWidth: 1 }}>
          {data.length} Tasks
        </Text>
        <Text>Morning</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              <Text style={globalStyle.display}>{item.text}</Text>
              <TouchableOpacity
                style={[styles.done, { backgroundColor: background() }]}
              >
                <Text style={{ color: foreground(), fontSize: 12 }}>
                  Mark as done
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};
export default Tasks;

const styles = StyleSheet.create({
  section2: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    flex: 4,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  title: {
    fontSize: 28,
  },

  total: {
    marginVertical: 15,
    borderColor: "#d1d1d1",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 8,
    width: 182,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  item: {
    paddingVertical: 32,
    borderBottomColor: "#d1d1d1",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  done: {
    height: 38,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});
