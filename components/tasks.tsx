import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Display from "./displayText";

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
      <Display style={styles.title}>Your Routine</Display>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              <Text>{item.text}</Text>
              <TouchableOpacity
                style={[styles.done, { backgroundColor: background() }]}
              >
                <Display style={{ color: foreground(), fontSize: 12 }}>
                  Mark as done
                </Display>
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
    fontWeight: "bold",
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
