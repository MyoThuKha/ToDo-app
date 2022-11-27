import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../datas/reducer";
import globalStyle from "../styles/global";

interface tasksProps {
  foreground: () => string;
  background: () => string;
}

const Tasks: React.FC<tasksProps> = ({ foreground, background }) => {
  const data = useSelector((state: any) => state.tasks.data);
  const dispatch = useDispatch();

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
                onPress={() => dispatch(deleteTask(item.key))}
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
